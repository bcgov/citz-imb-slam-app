import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export default NextAuth({
  providers: [
    KeycloakProvider({
      authServerUrl: 'https://dev.loginproxy.gov.bc.ca/auth',
      publicClient: true,
      confidentialPort: 0,
      issuer: 'https://dev.loginproxy.gov.bc.ca/auth/realms/standard',
      clientId: 'slam-3943',
      sslRequired: true,
      redirect_uri: 'https://dev.slam.im.gov.bc.ca',
      callbacks: {
        async redirect({ url, baseUrl }) {
          return baseUrl;
        },
      },
      debug: true,
    }),
  ],
});
