import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'

import { Styles } from '../Styles'
import MenuIcon from '../assets/menu.svg'

export const DynamicTabs = ({ DynamicTabsProps }) => {
  const { config, maxTabToShow } = DynamicTabsProps
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [lastTab, setLastTab] = useState(maxTabToShow)
  const [allTabsVisible, setAllTabsVisible] = useState(false)
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
                  tabIndex >= maxTabToShow ? tabIndex + 1 : maxTabToShow
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
        {config.slice(lastTab - maxTabToShow, lastTab).map((tab, tabIndex) => (
          <TouchableOpacity
            style={{
              ...Styles.dynamicTabHeaderItemView,
              borderBottomWidth:
                tabIndex + lastTab - maxTabToShow === selectedTabIndex ? 2 : 0,

              borderBottomColor:
                tabIndex + lastTab - maxTabToShow === selectedTabIndex
                  ? '#255A80'
                  : '#4BB4FF',
            }}
            key={tabIndex}
            onPress={() =>
              setSelectedTabIndex(tabIndex + lastTab - maxTabToShow)
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
        {config[selectedTabIndex].component}
      </View>
    </View>
  )
}
