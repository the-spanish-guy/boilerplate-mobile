import * as React from 'react'
import { BoxProps } from '@shopify/restyle'
import { Theme } from '@app/themes/Light'
import Box from './Box'

const Container: React.FC<BoxProps<Theme>> = props => (
  <Box {...props} flex={1} backgroundColor="$background">
    {props.children}
  </Box>
)

export default Container
