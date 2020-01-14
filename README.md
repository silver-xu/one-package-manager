# One Package Manager [![Build Status](https://travis-ci.org/silver-xu/one-package-manager.svg?branch=master)](https://travis-ci.org/silver-xu/one-package-manager) [![codecov](https://codecov.io/gh/silver-xu/one-package-manager/branch/master/graph/badge.svg)](https://codecov.io/gh/silver-xu/one-package-manager) [![greenkeeper](https://badges.greenkeeper.io/silver-xu/one-package-manager.svg?style=flat)](https://badges.greenkeeper.io/silver-xu/one-package-manager.svg?style=flat)

> Enforcing the consistent usage of Yarn or NPM within a team

## Summary

> This repo is built to enforce a software development team to use either Yarn or NPM within a repo.

## Installation

Put the following code in package.json of the intended repo:

```
{
  "scripts":{
    "preinstall": "npx one-package-manager";
  }
}
```

## Options

Change `npx one-package-manager` into `npx one-package-manager --yarn` (default) to enforce Yarn as the package manager, or `npx one-package-manager --yarn` to enforce NPM as the package maanger.
