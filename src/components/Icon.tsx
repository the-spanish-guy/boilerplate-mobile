import React from 'react'
import { Feather } from '@expo/vector-icons'
import { ColorProps, useResponsiveProp, useTheme } from '@shopify/restyle'
import { Theme } from '@app/themes/Light'

export type IconProps = React.ComponentProps<typeof Feather>
type Props = Omit<IconProps, 'color'> & ColorProps<Theme>

const FeatherIcon: React.FC<Props> = ({ color = '$foreground', ...rest }) => {
  const theme = useTheme<Theme>()
  const colorProp = useResponsiveProp(color)
  const vColor = theme.colors[colorProp || '$foreground']
  return <Feather {...rest} color={vColor} />
}

export default FeatherIcon
