# Frontend Documentation

## Technologies Used in Frontend

- NextAuth
- Keycloak
- Formik

### NextAuth

https://next-auth.js.org/

NextAuth is a library created for React that manages authentication. The library creates a session that holds a NextAuth token when logged in. On sign out, this session is cleared.

The Keycloak token will remain as a cookie until it expires or the logout redirect is called.

**Sign In**
The sign in function redirects to Keycloak through the [nextauth].js file.

```javascript
[...nextauth].js;
import NextAuth from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export default NextAuth({
  providers: [
    KeycloakProvider({
      issuer: process.env.NEXT_PUBLIC_ISSUER,
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    }),
  ],
});
```

The environment variables are:

`NEXT_PUBLIC_ISSUER={auth-server-url}/realms/{realm}`
`NEXT_PUBLIC_CLIENT_ID={resource}`
`NEXT_PUBLIC_CLIENT_SECRET=anything_you_want:)`

Since this project uses a public client, a secret is not attached to it.
Even if using a public client, a client secret must still be defined or NextAuth will not see the configuration as valid. Any string value will work.

Using this in the application requires the `signIn()` method from `'next-auth/react'`.
The argument is the id of the default sign in option. Leave the arguments blank if you have multiple providers and would like users to choose from a list.

```javascript
signIn('keycloak');
```

**Sign Out**
Sign out must remove both the NextAuth session and the Keycloak session.
The NextAuth session is used with the `signOut()` method from `'next-auth/react'`.

To sign out of Keycloak and prevent bypassing the sign in page on following attempts, the sign out action must involve a redirect.

In the following example, `signOut()` removes the NextAuth session. After setting the `redirectURL`, the redirect to the Keycloak sign out can requested.
This removes the Keycloak session.

```typescript
signOut({ redirect: false });
// Construct redirectURL from current url (AKA remove URL after root domain)
const redirectURL = window.location.href.substring(
  0,
  window.location.href.indexOf('/', 9),
);
window.location.href = `https://logon7.gov.bc.ca/clp-cgi/logoff.cgi?retnow=1&returl=${process.env.NEXT_PUBLIC_ISSUER}/protocol/openid-connect/logout?post_logout_redirect_uri=${redirectURL}`;
```

**Other Environment Variables**
Two other environment variables are needed for NextAuth:
`NEXTAUTH_URL=https://example.com`
`NEXTAUTH_SECRET=someJWTsecret`

Read more on these at [NextAuth Options](https://next-auth.js.org/configuration/options).

### Formik

A library that uses prebuilt forms. Used to create software titles and licensees.

https://formik.org/docs/tutorial
