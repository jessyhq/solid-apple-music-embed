// Packages:
import { Component, JSX } from 'solid-js'

// Typescript:
export interface AppleProps
  extends JSX.IframeHTMLAttributes<HTMLIFrameElement> {
  [key: string]: any
  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}

// Functions:
const AppleMusic: Component<AppleProps> = props => {
  // Constants:

  const style =
    typeof props.style === 'string'
      ? 'border-radius: 8px;' +
        `width: ${
          props.width ?? props.wide ? window.innerWidth - 16 : 100
        }px;` +
        props.style
      : ({
          'border-radius': '8px',
          width: `${
            props.width ?? props.wide ? window.innerWidth - 16 : 100
          }px`,
          ...props.style,
        } as JSX.CSSProperties)
  console.log(style)

  const src = props.link.replace('//music.apple.com', '//embed.music.apple.com')

  // Return:
  return (
    <iframe
      title="Apple Music Player"
      allow="autoplay *; encrypted-media *;"
      frameBorder={props.frameBorder ?? 0}
      height={props.height ?? 170}
      style={style}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={src}
      {...props}
    />
  )
}

// Exports:
export default AppleMusic

// Testing:
// const App = () => {
//   return (
//     <>
//       <AppleMusic wide link='https://music.apple.com/us/album/from-a-woman/1711291488?i=1711291492' />
//     </>
//   )
// }

// const root = document.getElementById('root')
// render(() => <App />, root!)
