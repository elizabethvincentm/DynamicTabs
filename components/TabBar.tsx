import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Styles, COLOR_DARK, COLOR_BORDER } from '../Styles'
import MenuIcon from '../assets/menu.svg'
import CloseIcon from '../assets/close.svg'
import { TabBarProps, DynamicTabConfig } from '../types/DynamicTabsTypes'

export const TabBar: React.SFC<TabBarProps> = ({
  config,
  maxTabsToShow,
  lastTab,
  allTabsVisible,
  selectedTabIndex,
  setSelectedTabIndex,
  setAllTabsVisible,
}) => (
  <View testID="tab-bar" style={Styles.dynamicTabHeader}>
    {config
      .slice(lastTab - maxTabsToShow, lastTab)
      .map((tab: DynamicTabConfig, tabIndex: number) => (
        <TouchableOpacity
          style={{
            ...Styles.dynamicTabHeaderItemView,
            backgroundColor:
              tabIndex + lastTab - maxTabsToShow === selectedTabIndex
                ? COLOR_BORDER
                : COLOR_DARK,
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
      onPress={() => setAllTabsVisible((prev: boolean) => !prev)}
    >
      {allTabsVisible ? <CloseIcon /> : <MenuIcon testID="menu-icon" />}
    </TouchableOpacity>
  </View>
)
