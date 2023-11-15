# rn-auto-image-height

[![NPM Version](http://img.shields.io/npm/v/rn-auto-image-height.svg?style=flat-square)](https://www.npmjs.com/package/rn-auto-image-height)
[![NPM Downloads](https://img.shields.io/npm/dt/rn-auto-image-height.svg?style=flat-square)](https://www.npmjs.com/package/rn-auto-image-height)
[![MIT License](https://img.shields.io/npm/l/rn-auto-image-height.svg?style=flat-square)](./LICENSE)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

This component provides you a simple way to load a remote and local image and automatically set `Image` height to the image dimension which fits the provided width.

ReactNative `Image` component needs users to set both `width` and `height` props.

## Installation

`yarn add rn-auto-image-height`

`npm install rn-auto-image-height`

## Usage

Use local or remote files:

```js
import React, { Component } from "react";
import AutoHeightImage from "rn-auto-image-height";

export default class Demo extends Component {
  render() {
    return (
      <View>
        <AutoHeightImage width={100} source={require("/path-of-image-file")} />

        <AutoHeightImage
          width={100}
          source={{ uri: "http://placehold.it/350x150" }}
        />
      </View>
    );
  }
}
```

### Props

| name     | type             | isRequired | default | description                                                |
| -------- | ---------------- | ---------- | ------- | ---------------------------------------------------------- |
| `width`  | number           | ✔          | N/A     | image width to fit                                         |
| `source` | number or object | ✔          | N/A     | local (i.e. require/import) or remote image ({uri: '...'}) |

## Change Log

[Change log](./CHANGELOG.md)

## Licence

[MIT](./LICENSE)
