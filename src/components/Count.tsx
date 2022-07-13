import { useAtom } from 'jotai'
import { useAtomValue } from 'jotai/utils'

import {
  countAtom,
  decrementCountAtom,
  incrementCountAtom
} from '@app/states/counter'
import FeatherIcon from './Icon'
import { Box, Button, Text } from '@app/atoms'

const Count: React.FC = () => {
  const count = useAtomValue(countAtom)
  const [, setCount] = useAtom(incrementCountAtom)
  const [, setDecrementCount] = useAtom(decrementCountAtom)

  return (
    <>
      <Box
        m="2xl"
        width="40%"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button onPress={setCount}>
          <FeatherIcon name="plus-circle" size={30} color="$primary" />
        </Button>

        <Text fontSize={20}>{count}</Text>

        <Button onPress={setDecrementCount}>
          <FeatherIcon name="minus-circle" size={30} color="$primary" />
        </Button>
      </Box>
    </>
  )
}

export default Count
