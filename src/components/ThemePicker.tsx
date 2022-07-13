import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react'
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList
} from '@gorhom/bottom-sheet'
import { useAtom } from 'jotai'
import { useTheme } from '@shopify/restyle'

import { Box, Text } from '@app/atoms'
import activeThemeId from '@app/states/theme'
import ThemeListItem from './ThemePickerListItem'
import { LocalTheme, Theme, themes } from '@app/themes'

interface Props {}
interface ThemePickerHandle {
  show: () => void
}

const ThemePicker = forwardRef<ThemePickerHandle, Props>((_props, ref) => {
  const snapPoints = useMemo(() => ['40%', '90%'], [])
  const theme = useTheme<Theme>()
  const [, setActiveTheme] = useAtom(activeThemeId)

  const refBottomSheet = useRef<BottomSheet>(null)

  const bgColor = theme.colors['$background']
  const handleColor = theme.colors['$foreground']

  useImperativeHandle(ref, () => ({
    show: () => {
      const { current: bottomSheet } = refBottomSheet
      if (bottomSheet) {
        bottomSheet.snapToIndex(0)
      }
    }
  }))

  const renderThemeItem = useCallback(({ item }) => {
    return <ThemeListItem theme={item} onPress={setActiveTheme} />
  }, [])

  return (
    <BottomSheet
      ref={refBottomSheet}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
      detached
      bottomInset={46}
      enablePanDownToClose
      style={{ marginHorizontal: 12 }}
      handleIndicatorStyle={{
        backgroundColor: handleColor,
        opacity: 0.8
      }}
      backgroundStyle={{
        backgroundColor: bgColor
      }}
    >
      <BottomSheetFlatList
        ListHeaderComponent={() => (
          <Box p="lg" alignItems="center">
            <Text fontWeight="bold">Change Theme</Text>
          </Box>
        )}
        data={themes}
        keyExtractor={(t: LocalTheme) => t.id}
        renderItem={renderThemeItem}
      />
    </BottomSheet>
  )
})

type ThemePicker = ThemePickerHandle
export default ThemePicker
