import { useAtom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import React, { useCallback, useMemo } from 'react'

import FeatherIcon from './Icon'
import activeThemeId from '@app/states/theme'
import { Box, Text, Button } from '@app/atoms'
import { LocalTheme, ThemeNames } from '@app/themes'

interface Props {
  theme: LocalTheme
  onPress: (themeId: ThemeNames) => void
}

const ThemeListItem: React.FC<Props> = ({ theme, onPress }) => {
  const [isActive] = useAtom(
    useMemo(() => selectAtom(activeThemeId, v => v === theme.id), [theme])
  )
  const handlePress = useCallback(() => {
    onPress(theme.id)
  }, [onPress, theme])

  return (
    <Button
      style={{
        minHeight: 44,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
      onPress={handlePress}
    >
      <Box alignItems="center" justifyContent="center" width={32}>
        {isActive ? (
          <FeatherIcon size={20} name="check" color="$primary" />
        ) : null}
      </Box>
      <Text>{theme.name}</Text>
    </Button>
  )
}

export default ThemeListItem
