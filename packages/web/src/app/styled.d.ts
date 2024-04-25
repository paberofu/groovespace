import 'styled-components'
import type OpenColor from 'open-color'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: OpenColor,
  }
}