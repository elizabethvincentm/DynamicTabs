import { StyleSheet, Dimensions } from 'react-native'

export const COLOR_LIGHT = '#96D3FF'
export const COLOR_MEDIUM = '#4BB4FF'
export const COLOR_DARK = '#3B90CC'
export const COLOR_BORDER = '#255A80'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  dynamicTabView: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dynamicTabHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  dynamicTabHeaderItemView: {
    paddingBottom: 20,
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_MEDIUM,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderRightColor: COLOR_BORDER,
    borderRightWidth: 0.5,
  },
  dynamicTabHeaderMenuIcon: {
    paddingBottom: 20,
    paddingTop: 20,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dynamicTabHeaderItemText: {
    fontSize: 16,
    textAlign: 'center',
  },
  dynamicTabComponentView: {
    backgroundColor: COLOR_LIGHT,
    padding: 20,
    minHeight: Dimensions.get('window').height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dynamicTabModalView: {
    padding: 20,
    backgroundColor: COLOR_DARK,
    borderBottomColor: COLOR_BORDER,
    borderBottomWidth: 0.5,
  },
  dynamicTabModalText: {
    fontSize: 20,
    textAlign: 'center',
  },
})
