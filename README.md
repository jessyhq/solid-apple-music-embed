# solid-apple-music-embed

[![npm](https://img.shields.io/badge/npm-solid--apple-music--embed-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/solid-apple-music-embed)
[![npm version](https://img.shields.io/npm/v/solid-apple-music-embed.svg?style=flat-square)](https://www.npmjs.com/package/solid-apple-music-embed)
[![npm downloads](https://img.shields.io/npm/dm/solid-apple-music-embed.svg?style=flat-square)](https://www.npmjs.com/package/solid-apple-music-embed)
[![sponsors](https://img.shields.io/github/sponsors/diragb)](https://github.com/sponsors/diragb)

Use this component to create a Apple Music embed for a given Apple Music link. In Apple Music, click ••• > Copy Link, and paste it in the <AppleMusic link={...}> prop.


## Inspiration
Inspired by the battle-tested and original [react-music-embed](https://www.npmjs.com/package/react-music-embed).

## Installation
```bash
npm i solid-apple-music-embed

yarn add solid-apple-music-embed
```

## Usage

```tsx
import type { Component } from 'solid-js'
import AppleMusic from 'solid-apple-music-embed'

const App: Component = () => {
  return (
    <div>
      <AppleMusic link="https://music.apple.com/us/album/to-summer-from-cole-audio-hug/1682147355?i=1682147657" />
      <AppleMusic wide link="https://music.apple.com/us/album/to-summer-from-cole-audio-hug/1682147355?i=1682147657" />
    </div>
  )
}
```

The `<AppleMusic>` component is completely customizable. Check out the following code:

```tsx
import type { Component } from 'solid-js'
import AppleMusic from 'solid-apple-music-embed'

const CustomAppleMusic: Component = () => {
  return (
    <AppleMusic
      wide={false}
      width='420px'
      height='69px'
      frameBorder='10px'
      allow='encrypted-media'
      { ...props }
    >
  )
}
```

## License
MIT