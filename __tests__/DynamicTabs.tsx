import 'react-native'
import { Text } from 'react-native'
import React from 'react'
import { DynamicTabs } from '../components'
import { render, fireEvent } from 'react-native-testing-library'

//dummy data
const testData = {
  config: [
    {
      title: 'Tab1',
      component: () => <Text>Tab1 Data</Text>,
    },
    {
      title: 'Tab2',
      component: () => <Text>Tab2 Data</Text>,
    },
    {
      title: 'Tab3',
      component: () => <Text>Tab3 Data</Text>,
    },
    {
      title: 'Tab4',
      component: () => <Text>Tab4 Data</Text>,
    },
    {
      title: 'Tab5',
      component: () => <Text>Tab5 Data</Text>,
    },
    {
      title: 'Tab6',
      component: () => <Text>Tab6 Data</Text>,
    },
  ],
  maxTabsToShow: 3,
}

test('should show tab bar', () => {
  const { queryByTestId } = render(<DynamicTabs {...testData} />)
  expect(queryByTestId('tab-bar')).toBeTruthy
})

test('should show tab1 component initially', () => {
  const { getByText } = render(<DynamicTabs {...testData} />)
  expect(getByText('Tab1 Data')).toBeTruthy
})
test('should show specific tab component when clicked on tab bar', () => {
  const { getAllByText } = render(<DynamicTabs {...testData} />)
  fireEvent.press(getAllByText('Tab3')[0])
  expect(getAllByText('Tab3 Data')).toBeTruthy
})

test('should show hidden tabs when clicked on menu', () => {
  const { getAllByText, getByTestId } = render(<DynamicTabs {...testData} />)
  fireEvent.press(getByTestId('menu-icon'))
  expect(getAllByText(/Tab[1-6]/)).toHaveLength(10)
})
test('should show specific tab component when tab is selected from menu', () => {
  const { getAllByText, getByTestId } = render(<DynamicTabs {...testData} />)
  fireEvent.press(getByTestId('menu-icon'))
  fireEvent.press(getAllByText('Tab5')[0])
  expect(getAllByText('Tab5 Data')).toBeTruthy
})
