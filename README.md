
# DSM-Storybook Live Components Demo

![Version: 1.0.0](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/InVisionApp/dsm-storybook-example-library/blob/master/LICENSE.txt)

Reference implementation for InVision's [DSM Live Components feature](https://support.invisionapp.com/hc/en-us/articles/360028214732).  The feature allows embedding Storybook stories in DSM to create a single source of truth for your product teams across design and development.

This repository includes an example library implementation in Vue that is pre-configured for the [@dsm-storybook](https://www.npmjs.com/package/@invisionapp/dsm-storybook) plugin. 
This has been updated to include Design Tokens.

## Setup

Install the packages using npm or Yarn:

```
npm install
```

## Preview

To run the Storybook with dsm-storybook integration locally, run:

```
npm run dsm-storybook:preview
```

## Publish to DSM

Follow the steps documented in the [Getting started with live components](https://support.invisionapp.com/hc/en-us/articles/360028509991) article to embed the components in DSM.

You'll need to setup the keys for your DSM project and then run:

`
npm run dsm-storybook:publish

`
## License

MIT 

---
#### [ Credit ]

Designed by Zoe Adelman and Zach Hauer.
Additions by Tim Hacker