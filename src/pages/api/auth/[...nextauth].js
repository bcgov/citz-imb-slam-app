import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import KeycloakProvider from 'next-auth/providers/keycloak';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    KeycloakProvider({
      clientId: 'slam-3943',
      issuer: 'https://dev.loginproxy.gov.bc.ca/auth/realms/standard',
      // params: { grant_type: 'authorization_code' },
      // scope: 'openid email profile console-prosa basic-user-attribute',
      // accessTokenUrl: `https://dev.loginproxy.gov.bc.ca/token`,
      // requestTokenUrl: `https://dev.loginproxy.gov.bc.ca/auth`,
      // authorizationUrl: `https://dev.loginproxy.gov.bc.ca/auth`,
      // profileUrl: `https://dev.loginproxy.gov.bc.ca/userinfo`,
      // authorization: 'https://dev.loginproxy.gov.bc.ca/auth',
      // requestTokenUrl: 'https://dev.loginproxy.gov.bc.ca/auth',
      // token: 'https://dev.loginproxy.gov.bc.ca/auth/token',
    }),
  ],
});
