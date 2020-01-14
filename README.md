# One Package Manager [![Build Status](https://travis-ci.org/silver-xu/one-package-manager.svg?branch=master)](https://travis-ci.org/silver-xu/one-package-manager) [![codecov](https://codecov.io/gh/silver-xu/one-package-manager/branch/master/graph/badge.svg)](https://codecov.io/gh/silver-xu/one-package-manager) [![greenkeeper](https://badges.greenkeeper.io/silver-xu/one-package-manager.svg?style=flat)](https://badges.greenkeeper.io/silver-xu/one-package-manager.svg?style=flat)

> Enforcing the consistent usage of Yarn or NPM within a team

## Summary

> This repo is built to enforce a software development team to use either Yarn or NPM within a repo.

## Installation

Put the following code in package.json of the intended repo:

```json
{
  "scripts": {
    "preinstall": "npx one-package-manager"
  }
}
```

## Options

To enforce the use of Yarn (default)

```json
{
  "scripts": {
    "preinstall": "npx one-package-manager --yarn"
  }
}
```

To enforce the use of NPM (default)

```json
{
  "scripts": {
    "preinstall": "npx one-package-manager --npm"
  }
}
```
