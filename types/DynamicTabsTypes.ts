export type DynamicTabConfig = {
  // title of the tab - tab name
  title: string
  // Component to mount/show on the tab screen when tab is active
  component: React.ComponentType
}
export interface DynamicTabsProps {
  // tab configuration
  config: Array<DynamicTabConfig>
  // max tabs to show on the screen at a time
  maxTabsToShow: number
}
export interface TabBarProps {
  // tab configuration
  config: Array<DynamicTabConfig>
  // max tabs to show on the screen at a time
  maxTabsToShow: number
  // index of last tab displayed on tab bar
  lastTab: number
  //index of selected tab
  selectedTabIndex: number
  //setter for selectedTabIndex
  setSelectedTabIndex: Function
  //setter for allTabsVisible
  setAllTabsVisible: Function
}
export interface TabModalProps {
  // tab configuration
  config: Array<DynamicTabConfig>
  // max tabs to show on the screen at a time
  maxTabsToShow: number
  // index of last tab displayed on tab bar
  allTabsVisible: boolean
  //setter for lastTab
  setLastTab: Function
  //setter for selectedTabIndex
  setSelectedTabIndex: Function
  //setter for allTabsVisible
  setAllTabsVisible: Function
}
