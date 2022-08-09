import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export default NextAuth({
  providers: [
    KeycloakProvider({
      issuer: 'https://dev.loginproxy.gov.bc.ca/auth/realms/standard',
      clientId: 'slam-3943',
      clientSecret: 'some secret',
    }),
  ],

  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     // Allows relative callback URLs
  //     if (url.startsWith('/')) return `${baseUrl}${url}`;
  //     // Allows callback URLs on the same origin
  //     if (new URL(url).origin === baseUrl) return url;
  //     return baseUrl;
  //   },

  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token from a provider.
  //     session.accessToken = token.accessToken;
  //     return session;
  //   },
  // },
});
