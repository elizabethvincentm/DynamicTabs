import { StyleSheet, Dimensions } from 'react-native'

export const COLOR_LIGHT = '#eee' //'#96D3FF'
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
  },
  dynamicTabHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: COLOR_MEDIUM,
  },
  dynamicTabHeaderItemView: {
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLOR_MEDIUM,
    // borderTopRightRadius: 5,
    // borderTopLeftRadius: 5,
    // borderRightColor: COLOR_BORDER,
    // borderRightWidth: 0.5,
  },
  dynamicTabHeaderMenuIcon: {
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    // position: 'absolute',
    // top: 100,
    // right: 0,
    // zIndex: 30,
    elevation: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    borderRadius: 1000,
  },
  dynamicTabHeaderItemText: {
    fontSize: 28,
    textAlign: 'center',
  },
  dynamicTabComponentView: {
    padding: 20,
    alignItems: 'center',
    minHeight: Dimensions.get('screen').height * 0.5,
  },
  dynamicTabModalView: {
    padding: 10,
    backgroundColor: COLOR_DARK,
    margin: 5,
    borderRadius: 1000,
  },
  dynamicTabModalText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
})
