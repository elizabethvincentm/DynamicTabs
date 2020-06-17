import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { Styles } from '../Styles'
import { DynamicTabsProps } from '../types/DynamicTabsTypes'
import { TabBar, TabModal } from '../components'

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
    selectedTabIndex,
    setSelectedTabIndex,
    setAllTabsVisible,
  }
  const tabModalProps = {
    config,
    maxTabsToShow,
    allTabsVisible,
    setLastTab,
    setSelectedTabIndex,
    setAllTabsVisible,
  }
  const TabComponent = config[selectedTabIndex].component
  return (
    <View style={Styles.dynamicTabView}>
      <TabModal {...tabModalProps} />
      <TabBar {...tabBarProps} />
      <View style={Styles.dynamicTabComponentView}>
        <TabComponent />
      </View>
    </View>
  )
}
