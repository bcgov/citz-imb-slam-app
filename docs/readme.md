
# React Documentation

## Technologies used in Frontend
- Next Auth
- Keycloak
- Formik

### Next Auth

Next Auth is a library created for React that manages Authorization. The library creates a session that holds a next-auth token when logged in. On signout, this session is cleared.

The sign in function redirects to keycloak through the [nextauth].js file.
![Provider info](/repository/docs/nextauthprovider.png?raw=true)

The variables are:
`NEXT_PUBLIC_ISSUER=https://dev.loginproxy.gov.bc.ca/auth/realms/{realm}`
`NEXT_PUBLIC_CLIENT_ID={resource}`
`NEXT_PUBLIC_CLIENT_SECRET=anything_you_want:)`

If using a public client, the client secret still has to be defined.
https://next-auth.js.org/


### Formik

A library that uses prebuilt forms. Used to create software titles and licensees 