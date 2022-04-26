###############################################################################
###                          Install Dependencies                           ###
###############################################################################
FROM node:17.5.0-alpine3.14 as dependencies

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

###############################################################################
###                                Builder                                  ###
###############################################################################
FROM node:17.5.0-alpine3.14 as builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules

COPY . . 

RUN npm run build

###############################################################################
###                             Production Image                            ###
###############################################################################
FROM node:17.5.0-alpine3.14 as runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]

# Credit to Lee Robinson (Youtube) for example
# Youtube: https://www.youtube.com/watch?v=Pd2tVxhFnO4&t=186s
# Github Code Example: https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
