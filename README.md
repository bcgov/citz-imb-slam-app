<!-- @format -->

![GitHub](https://img.shields.io/github/license/bcgov/citz-imb)

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](Redirect-URL)
The project is in the very early stages of development. The codebase will be changing frequently.

# Software Licence and Application Management (SLAM)

This is the Server (frontend) for the [SLAM API](https://github.com/bcgov/citz-imb-slam-api)

## How to Contribute

Please note that this project is released with a [Contributor Code of Conduct](Code_of_Conduct.md). By participating in this project you agree to abide by its terms.

## Developer workstation setup

Create a .env file at the root of the project directory.

Run the following command into local terminal:

```
docker-compose up --build slam-app
```

The following output in terminal should show that the SLAM! frontend container is healthy.'

To access the frontend container, navigate to localhost:3000 in your local browser.

### Documentation
[documentation](/docs/readme.md)
