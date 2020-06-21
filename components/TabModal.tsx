import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Styles, COLOR_BORDER, COLOR_DARK } from '../Styles'
import { TabModalProps, DynamicTabConfig } from '../types/DynamicTabsTypes'
import { SlideInScrollView } from '../animations/SlideInScrollView'

export const TabModal: React.SFC<TabModalProps> = ({
  config,
  maxTabsToShow,
  allTabsVisible,
  selectedTabIndex,
  setLastTab,
  setSelectedTabIndex,
  setAllTabsVisible,
}) => {
  if (allTabsVisible)
    return (
      <SlideInScrollView>
        <TouchableOpacity
          style={Styles.dynamicTabModalWrapper}
          onPress={() => {
            setAllTabsVisible(false)
          }}
        >
          <View style={Styles.dynamicTabModalView}>
            {config.map((tab: DynamicTabConfig, tabIndex: number) => (
              <TouchableOpacity
                style={{
                  ...Styles.dynamicTabModalItem,
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
                <Text style={Styles.dynamicTabModalItemText}>{tab.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </SlideInScrollView>
    )
  else return <></>
}
