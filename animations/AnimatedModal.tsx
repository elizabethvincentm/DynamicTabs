import React, { useRef, useEffect } from 'react'
import { Animated, Text, Dimensions } from 'react-native'

export const FadeInView = (props) => {
  const fadeAnim = new Animated.Value(-100) // Initial value for opacity: 0

  useEffect(() => {
    Animated.spring(fadeAnim, {
      toValue: 0,
      useNativeDriver: false,
    }).start()
  }, [])

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        right: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  )
}
