import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { Styles } from '../Styles'
import MenuIcon from '../assets/menu.svg'

type DynamicTabConfig = {
  // title of the tab - tab name
  title: string
  // Component to mount/show on the tab screen when tab is active
  component: React.ComponentType
}

interface DynamicTabsProps {
  // tab configuration
  config: Array<DynamicTabConfig>
  // max tabs to show on the screen at a time
  maxTabsToShow: number
}

const updateTabComponent = (TabComponent: React.ComponentType) => {
  return () => {
    return <TabComponent />
  }
}
export const DynamicTabs: React.FC<DynamicTabsProps> = ({
  config,
  maxTabsToShow,
}) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0)
  const [lastTab, setLastTab] = useState<number>(maxTabsToShow)
  const [allTabsVisible, setAllTabsVisible] = useState<boolean>(false)
  const EnhancedComponent = updateTabComponent(
    config[selectedTabIndex].component
  )
  return (
    <View style={Styles.dynamicTabView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={allTabsVisible}
        onRequestClose={() => {
          setAllTabsVisible(false)
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: '#00000080',
            flex: 1,
          }}
          onPress={() => setAllTabsVisible(false)}
        >
          {config.map((tab, tabIndex) => (
            <TouchableOpacity
              style={Styles.dynamicTabModalView}
              key={tabIndex}
              onPress={() => {
                setLastTab(() =>
                  tabIndex >= maxTabsToShow ? tabIndex + 1 : maxTabsToShow
                )
                setSelectedTabIndex(tabIndex)
                setAllTabsVisible(false)
              }}
            >
              <Text style={Styles.dynamicTabModalText}>{tab.title}</Text>
            </TouchableOpacity>
          ))}
        </TouchableOpacity>
      </Modal>

      <View style={Styles.dynamicTabHeader}>
        {config.slice(lastTab - maxTabsToShow, lastTab).map((tab, tabIndex) => (
          <TouchableOpacity
            style={{
              ...Styles.dynamicTabHeaderItemView,
              borderBottomWidth:
                tabIndex + lastTab - maxTabsToShow === selectedTabIndex ? 2 : 0,

              borderBottomColor:
                tabIndex + lastTab - maxTabsToShow === selectedTabIndex
                  ? '#255A80'
                  : '#4BB4FF',
            }}
            key={tabIndex}
            onPress={() =>
              setSelectedTabIndex(tabIndex + lastTab - maxTabsToShow)
            }
          >
            <Text style={Styles.dynamicTabHeaderItemText}>{tab.title}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={Styles.dynamicTabHeaderMenuIcon}
          onPress={() => setAllTabsVisible(true)}
        >
          <MenuIcon />
        </TouchableOpacity>
      </View>
      <View style={Styles.dynamicTabComponentView}>
        <EnhancedComponent />
      </View>
    </View>
  )
}
