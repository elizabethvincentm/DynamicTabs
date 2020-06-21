import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Styles, COLOR_BORDER, COLOR_DARK } from '../Styles'
import MenuIcon from '../assets/menu.svg'

import { TabModalProps, DynamicTabConfig } from '../types/DynamicTabsTypes'
import { FadeInView } from '../animations/AnimatedModal'

export const TabModal: React.SFC<TabModalProps> = ({
  config,
  maxTabsToShow,
  allTabsVisible,
  lastTab,
  selectedTabIndex,
  setLastTab,
  setSelectedTabIndex,
  setAllTabsVisible,
}) => {
  if (allTabsVisible)
    return (
      <FadeInView
        style={{
          // flex: 1,
          position: 'absolute',
          top: 80,
          right: 0,
          zIndex: 10,
          elevation: 10,
          alignItems: 'center',
        }}
      >
        {config.map((tab: DynamicTabConfig, tabIndex: number) => (
          <TouchableOpacity
            style={{
              ...Styles.dynamicTabModalView,
              elevation: 12,
              backgroundColor:
                tabIndex === selectedTabIndex ? COLOR_BORDER : COLOR_DARK,
            }}
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
      </FadeInView>
    )
  else
    return (
      <></>
      // <TouchableOpacity
      //   style={Styles.dynamicTabHeaderMenuIcon}
      //   onPress={() => setAllTabsVisible(true)}
      // >
      //   <MenuIcon testID="menu-icon" />
      // </TouchableOpacity>
    )
}
