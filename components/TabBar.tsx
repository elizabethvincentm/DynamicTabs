import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Styles } from '../Styles'
import MenuIcon from '../assets/menu.svg'
import { TabBarProps, DynamicTabConfig } from '../types/DynamicTabsTypes'

export const TabBar: React.SFC<TabBarProps> = ({
  config,
  maxTabsToShow,
  lastTab,
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
            borderBottomWidth:
              tabIndex + lastTab - maxTabsToShow === selectedTabIndex ? 3 : 0,
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
      onPress={() => setAllTabsVisible((prev: boolean) => !prev)}
    >
      <MenuIcon testID="menu-icon" />
    </TouchableOpacity>
  </View>
)
