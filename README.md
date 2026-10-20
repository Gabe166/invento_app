# React + Vite

## Deploying to a shared host

The GitHub Actions workflow builds the app and deploys `dist/` to the shared host over FTPS when code is pushed to `main`. It can also be started manually from the repository's Actions tab.

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `FTP_SERVER`: the host name of the FTP server
- `FTP_USERNAME`: the FTP account username
- `FTP_PASSWORD`: the FTP account password
- `FTP_SERVER_DIR`: the target directory on the server, including a trailing slash (for example, `public_html/`)

The host must support FTPS. The workflow uses the configured target directory as its deployment destination.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
