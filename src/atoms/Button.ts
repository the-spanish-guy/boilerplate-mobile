import { Theme } from '@app/themes/Light'
import {
  createRestyleComponent,
  createVariant,
  VariantProps
} from '@shopify/restyle'
import { TouchableOpacityProps } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = createRestyleComponent<
  VariantProps<Theme, 'buttonVariants'> & TouchableOpacityProps,
  Theme
>([createVariant({ themeKey: 'buttonVariants' })], TouchableOpacity)
export type BoxProps = React.ComponentProps<typeof Button>

export default Button
