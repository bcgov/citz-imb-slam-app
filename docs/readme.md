
# React Documentation

## Technologies used in Frontend
- Next Auth
- Keycloak
- Formik

### Next Auth

Next Auth is a library created for React that manages Authorization. The library creates a session that holds a next-auth token when logged in. On signout, this session is cleared. The keycloak token will still remain as a cookie until it expires. 

The sign in function redirects to keycloak through the [nextauth].js file.
```
[...nextauth].js
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

The variables are:
`NEXT_PUBLIC_ISSUER=https://dev.loginproxy.gov.bc.ca/auth/realms/{realm}`
`NEXT_PUBLIC_CLIENT_ID={resource}`
`NEXT_PUBLIC_CLIENT_SECRET=anything_you_want:)`

Since this project uses a public client, a secret is not attached to it. If using a public client, the client secret still has to be defined.
https://next-auth.js.org/


### Formik

A library that uses prebuilt forms. Used to create software titles and licensees 
https://formik.org/docs/tutorial