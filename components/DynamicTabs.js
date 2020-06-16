import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import MenuIcon from '../assets/menu.svg'

export const DynamicTabs = ({ DynamicTabsProps }) => {
  const { config, maxTabToShow } = DynamicTabsProps
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const [lastTab, setLastTab] = useState(maxTabToShow)
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View>
      <Modal
        animationType="fade"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        {config.map((tab, tabIndex) => (
          <TouchableOpacity
            key={tabIndex}
            onPress={() => {
              setLastTab(() =>
                tabIndex >= maxTabToShow ? tabIndex + 1 : maxTabToShow
              )
              setSelectedTabIndex(tabIndex)
              setModalVisible(false)
            }}
          >
            <Text>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </Modal>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          {config
            .slice(lastTab - maxTabToShow, lastTab)
            .map((tab, tabIndex) => (
              <TouchableOpacity
                key={tabIndex}
                onPress={() =>
                  setSelectedTabIndex(tabIndex + lastTab - maxTabToShow)
                }
              >
                <Text>{tab.title}</Text>
              </TouchableOpacity>
            ))}
        </View>

        {/* <MenuIcon /> */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>menu</Text>
        </TouchableOpacity>
      </View>
      <View>{config[selectedTabIndex].component}</View>
    </View>
  )
}
