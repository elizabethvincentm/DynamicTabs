import React, { useEffect } from 'react'
import { Animated } from 'react-native'
import { Styles } from '../Styles'

export const SlideInScrollView: React.SFC = (props) => {
  const rightAnim = new Animated.Value(-100)

  useEffect(() => {
    Animated.spring(rightAnim, {
      toValue: 0,
      useNativeDriver: false,
    }).start()
  }, [])

  return (
    <Animated.ScrollView
      contentContainerStyle={{ flex: 1 }}
      style={{ ...Styles.slideInScrollViewStyle, right: rightAnim }}
    >
      {props.children}
    </Animated.ScrollView>
  )
}
