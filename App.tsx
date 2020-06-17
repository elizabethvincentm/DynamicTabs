import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import { DynamicTabs } from './components'
import { Styles } from './Styles'

const App = () => {
  //dummy data
  const tabData = {
    config: [
      {
        title: 'Tab1',
        component: () => <Text>Tab1 Data</Text>,
      },
      {
        title: 'Tab2',
        component: () => <Text>Tab2 Data</Text>,
      },
      {
        title: 'Tab3',
        component: () => <Text>Tab3 Data</Text>,
      },
      {
        title: 'Tab4',
        component: () => <Text>Tab4 Data</Text>,
      },
      {
        title: 'Tab5',
        component: () => <Text>Tab5 Data</Text>,
      },
      {
        title: 'Tab6',
        component: () => <Text>Tab6 Data</Text>,
      },
    ],
    maxTabsToShow: 2,
  }

  return (
    <SafeAreaView style={Styles.container}>
      <DynamicTabs
        config={tabData.config}
        maxTabsToShow={tabData.maxTabsToShow}
      />
    </SafeAreaView>
  )
}
export default App
