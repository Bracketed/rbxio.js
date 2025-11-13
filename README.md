<div align="center" id="top">
    <img src="https://raw.githubusercontent.com/Bracketed/Bracketed-Packages/main/assets/LogoText.png" alt="Bracketed logo" width="800"/>
    Team Bracketed - <a href="https://bracketed.co.uk" >Website</a> | <a href="https://bracketed.co.uk/discord" >Discord</a> | <a href="https://github.com/Bracketed" >Github</a>
</div>

<br>

<h2 align="center" >rbxio.js</h2>

A comprehensive TypeScript/JavaScript library suite for interacting with Roblox APIs.

## 📦 Packages

This monorepo contains the following packages:

### Core Packages

-   **[@rbxio/rest](./libraries/rbxio.rest)** - REST API wrapper for Roblox APIs
    -   `@rbxio/rest` - Main REST client
    -   `@rbxio/rest/cloud` - Cloud API wrapper
    -   `@rbxio/rest/apis` - Web API wrapper
-   **[@rbxio/ws](./libraries/rbxio.ws)** - WebSocket and polling event emitter for Roblox API changes
-   **[@rbxio/types](./libraries/rbxio.types)** - TypeScript type definitions for Roblox APIs
    -   `@rbxio/types` - Common types
    -   `@rbxio/types/api` - API type definitions
    -   `@rbxio/types/cloud` - Cloud API type definitions

### Utility Packages

-   **[@rbxio/routes](./libraries/rbxio.routes)** - Route definitions and handlers
-   **[@rbxio/client](./libraries/rbxio.client)** - High-level client library
-   **[@rbxio/framework](./libraries/rbxio.framework)** - Framework for building Roblox API applications
-   **[@rbxio/utilities](./libraries/rbxio.utilities)** - Utility functions
-   **[@rbxio/proxy](./libraries/rbxio.proxy)** - Proxy server for Roblox API requests

### Developer Tools

-   **[@rbxio/create](./libraries/rbxio.create)** - CLI tool to create rbxio-enabled projects

## 🚀 Installation

Install individual packages as needed:

```sh
# Using yarn
yarn add @rbxio/rest @rbxio/types

# Using npm
npm install @rbxio/rest @rbxio/types
```

## 🛠️ Development

This is a monorepo managed with Yarn workspaces. To get started:

```sh
# Install dependencies
yarn install

# Build all packages
yarn build

# Lint all packages
yarn lint

# Validate formatting
yarn validate

# Clean all build outputs
yarn clean
```

### Building Individual Packages

```sh
# Build a specific package
cd libraries/rbxio.rest
yarn build
```

## 📝 Project Structure

```
rbxio.js/
├── libraries/           # All packages
│   ├── rbxio.rest/     # REST API wrapper
│   ├── rbxio.ws/       # WebSocket client
│   ├── rbxio.types/    # Type definitions
│   ├── rbxio.routes/   # Route handlers
│   ├── rbxio.client/   # Client library
│   ├── rbxio.framework/ # Framework
│   ├── rbxio.utilities/ # Utilities
│   ├── rbxio.create/   # CLI tool
│   └── rbxio.proxy/    # Proxy server
├── tsconfig.base.json  # Shared TypeScript config
└── package.json        # Root workspace config
```

## 🤝 Contribution & Help

Feel free to contribute to this project, join our [discord](https://bracketed.co.uk/discord) and help us with future development of Project Bracketed.
Please also notify us of errors within our projects as we may not be aware of them at the time.

<br>

<div align="center" style="font-weight: bold">
    <h2>Thanks for using our packages!</h2>
    <img src="https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextMini.png?raw=true" alt="Bracketed logo" width="900" style="border-radius: 25px" />
    Team Bracketed - <a href="https://bracketed.co.uk" >Website</a> | <a href="https://bracketed.co.uk/discord" >Discord</a> | <a href="https://github.com/Bracketed" >Github</a> | <a href="https://twitter.com/teambracketed" >Twitter</a> | <a href="#top" >Back To The Top</a>
    <br>
    <br>
    <img src="https://discordapp.com/api/guilds/1041758035355369542/widget.png?style=banner2" alt="Discord Banner" href="https://bracketed.co.uk/discord"/>
</div>
