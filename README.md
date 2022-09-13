# Nx Electrode [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project was generated using [Nx](https://nx.dev). Click [here](./docs/NX.md) for more details.

### Table of Contents

- [Getting Started](#getting-started)
- [Tools](#tools)
- [Git Workflow](./docs/git_workflow.md)

## Getting Started 

### Package Installation

```script
yarn install
```

### Run dev server

```script
yarn dev
```

### Run Storybook

You can run the storybook for the ui components, which are located [here](./packages/ui/).

```script
yarn storybook
```

## Tools

### Generate an Electrode Subapp template

Please use this command to generate a subapp using the custom workspace generator.

```script
yarn nx workspace-generator create-subapp demo1
```

NOTE: demo1 is a sample name, you can replace with whatever you want.

If you want to load the subapp to the core app, please follow these steps [here](./apps/core/README.md)

### Generate an UI component
