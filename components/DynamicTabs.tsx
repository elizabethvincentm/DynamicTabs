import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Styles, COLOR_MEDIUM, COLOR_HEADER } from '../Styles'
import { DynamicTabsProps } from '../types/DynamicTabsTypes'
import { TabModal } from './TabModal'
import { TabBar } from './TabBar'

export const DynamicTabs: React.FC<DynamicTabsProps> = ({
  config,
  maxTabsToShow,
}) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const [lastTab, setLastTab] = useState<number>(maxTabsToShow)
  const [allTabsVisible, setAllTabsVisible] = useState<boolean>(false)

  const tabBarProps = {
    config,
    maxTabsToShow,
    lastTab,
    allTabsVisible,
    selectedTabIndex,
    setSelectedTabIndex,
    setAllTabsVisible,
  }
  const tabModalProps = {
    config,
    maxTabsToShow,
    allTabsVisible,
    lastTab,
    selectedTabIndex,
    setLastTab,
    setSelectedTabIndex,
    setAllTabsVisible,
  }

  const TabComponent = config[selectedTabIndex].component

  return (
    <>
      <View style={Styles.dynamicTabView}>
        <TabBar {...tabBarProps} />
        <View style={{ flex: 1 }}>
          <Text style={Styles.dynamicTabComponentHeader}>
            {config[selectedTabIndex].title}
          </Text>
          <View style={Styles.dynamicTabComponentView}>
            <TabComponent />
          </View>
          <TabModal {...tabModalProps} />
        </View>
      </View>
    </>
  )
}
