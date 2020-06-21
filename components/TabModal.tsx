import React from 'react'
import { Text, TouchableOpacity, Animated } from 'react-native'
import { Styles } from '../Styles'

import { TabModalProps, DynamicTabConfig } from '../types/DynamicTabsTypes'
import { FadeInView } from '../animations/AnimatedModal'

export const TabModal: React.SFC<TabModalProps> = ({
  config,
  maxTabsToShow,
  allTabsVisible,
  setLastTab,
  setSelectedTabIndex,
  setAllTabsVisible,
}) => {
  if (allTabsVisible)
    return (
      <FadeInView
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 10,
          elevation: 10,
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
              style={{ ...Styles.dynamicTabModalView, elevation: 12 }}
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
      </FadeInView>
    )
  else return <></>
}
