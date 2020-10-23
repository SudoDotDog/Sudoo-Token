# Sudoo-Token

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Token.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Token)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Token/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Token)
[![npm version](https://badge.fury.io/js/%40sudoo%2Ftoken.svg)](https://www.npmjs.com/package/@sudoo/token)
[![downloads](https://img.shields.io/npm/dm/@sudoo/token.svg)](https://www.npmjs.com/package/@sudoo/token)

:sweat_drops: Token generator and signature validator

## Install

```sh
yarn add @sudoo/token
# Or
npm install @sudoo/token --save
```

## Create Token

```ts
import { generateKeyPair, KeyPair, SignatureCreator } from "@sudoo/token";

const keyPair: KeyPair = generateKeyPair();
const creator: SignatureCreator = SignatureCreator.instantiate(keyPair.private);

const token: string = creator.sign("Hello World");
```

## Verify Token

```ts
import { KeyPair, SignatureVerifier } from "@sudoo/token";
// Also get your generated key pair

const verifier: SignatureVerifier = SignatureVerifier.instantiate(keyPair.public);

const result: string = verifier.verify("Hello World", "<Generated Token>");
```
