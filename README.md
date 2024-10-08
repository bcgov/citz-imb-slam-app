<!-- @format -->
## Lifecycle

[![Lifecycle:Retired](https://img.shields.io/badge/Lifecycle-Retired-d45500)](<Redirect-URL>)

# Software Licence and Application Management (SLAM)

This is the Server (frontend) for the [SLAM API](https://github.com/bcgov/citz-imb-slam-api)

## How to Contribute

Please note that this project is released with a [Contributor Code of Conduct](Code_of_Conduct.md). By participating in this project you agree to abide by its terms.

## Developer workstation setup

Create a .env file at the root of the project directory.

```
NEXTAUTH_URL=
NEXTAUTH_SECRET=
NEXT_PUBLIC_API_PORT=3001
NEXT_PUBLIC_API_PATH=api/v1
NEXT_PUBLIC_ISSUER=
NEXT_PUBLIC_CLIENT_ID=
NEXT_PUBLIC_CLIENT_SECRET=
```

Run the following command into local terminal:

```
docker-compose up --build slam-app
```

The following output in terminal should show that the SLAM! frontend container is healthy.'

To access the frontend container, navigate to localhost:3000 in your local browser.

### Documentation

See detailed documentation in the [documentation file](/docs/readme.md).
