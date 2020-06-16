/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { DynamicTabs } from './components'

const App = () => {
  const data = {
    config: [
      {
        title: 'Tab1',
        component: <Text>Tab1 Data</Text>,
      },
      {
        title: 'Tab2',
        component: <Text>Tab2 Data</Text>,
      },
      {
        title: 'Tab3',
        component: <Text>Tab3 Data</Text>,
      },
      {
        title: 'Tab4',
        component: <Text>Tab4 Data</Text>,
      },
      {
        title: 'Tab5',
        component: <Text>Tab5 Data</Text>,
      },
      {
        title: 'Tab6',
        component: <Text>Tab6 Data</Text>,
      },
    ],
    maxTabToShow: 3,
  }
  return (
    <SafeAreaView>
      <DynamicTabs DynamicTabsProps={data} />
    </SafeAreaView>
  )
}
export default App
