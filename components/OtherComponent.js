import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Styles, COLOR_MEDIUM, COLOR_DARK } from '../Styles'

export const OtherComponent = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: COLOR_DARK,
          padding: 20,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 28, color: 'white' }}>
          Top Programming Languages
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 16, lineHeight: 24 }}>
          There are hundreds of programming languages out there, from the
          well-known to the ultra-obscure, and gaining fluency with one or more
          is a must if you want to make yourself a hot ticket for employers and
          score awesome coding jobs. Sure, there are plenty of colleges and
          universities offering coding courses and degrees, along with tech
          bootcamps for those who want to learn outside of traditional
          university settings. But deciding where to specialize can be a
          daunting choice for beginning coders—as well as more experienced ones
          who want to stay on top of the latest trends in the IT world.
        </Text>
      </View>
    </>
  )
}
