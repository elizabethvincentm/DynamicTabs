import React from 'react'
import { Text, TouchableOpacity, Modal } from 'react-native'
import { Styles } from '../Styles'

import { TabModalProps, DynamicTabConfig } from '../types/DynamicTabsTypes'

export const TabModal: React.SFC<TabModalProps> = ({
  config,
  maxTabsToShow,
  allTabsVisible,
  setLastTab,
  setSelectedTabIndex,
  setAllTabsVisible,
}) => (
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
      {config.map((tab: DynamicTabConfig, tabIndex: number) => (
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
)
