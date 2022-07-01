# zerion-integration-starter
The zerion-integration-starter is a one-stop-shop to set up multiple types of integrations. Use the following description to guide your start and inform what can be potentially be deleted when not in use.

## Project Structure

- **site-static:** Directory for hosting a static website
- **site-react:** Boilerplate ReactJS project
- **packages:** Base directory for serverless functions. Project directories are directly nested within /packages and actual serverless functions are nested within their project directory
    - sample
        - **hello:** Bare bones example of setting up a new function
    - zerion-starter
        - **zerion-js:** Boilerplate connection to the iForm API written in NodeJS
        - **zerion-py:** Boilerplate connection to the iForm API written in Python

## Getting Started
### Prerequisite Accounts / Installations
- Accounts
    - [GitHub Account](https://github.com)
    - [Digital Ocean Account](https://digitalocean.com)
- Software Installations
    - IDE/Text Editor: Any will do, but if you do not have one then [Visual Studio Code](https://vscode.com) is recommended
    - doctl command line (used for local development), installation will be detailed below
