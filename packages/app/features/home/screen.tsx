import { H1 } from '@expo/html-elements'
import { View, Text } from 'react-native'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <View
      className="flex-1 flex-col justify-center items-center w-dvw h-dvh"
    >
      <H1 className="font-bold">Welcome to Expo + Next.</H1>
      <View className="flex flex-col">
        <TextLink
          href="/login"
          className="font-bold color-black"
        >
          Login
        </TextLink>
        <View className="w-4" />
        <MotiLink
          href="/signup"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          from={{
            scale: 0,
            rotateZ: '0deg',
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            className='font-bold color-black'
          >
            Sigup
          </Text>
        </MotiLink>
      </View>
    </View>
  )
}
