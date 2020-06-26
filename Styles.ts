import { StyleSheet, Dimensions } from 'react-native'

export const COLOR_LIGHT = '#96D3FF'
export const COLOR_MEDIUM = '#4BB4FF'
export const COLOR_DARK = '#3B90CC'
export const COLOR_BORDER = '#255A80'
export const COLOR_GREY = '#cfcfcf'
export const COLOR_WHITE = '#ebebeb'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  dynamicTabView: {
    flex: 1,
    elevation: 0,
    minHeight: Dimensions.get('screen').height * 0.5,
  },
  dynamicTabHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomColor: COLOR_BORDER,
    borderBottomWidth: 2,
  },
  dynamicTabHeaderItemView: {
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_MEDIUM,
    borderRightColor: COLOR_BORDER,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 10,
    borderRightWidth: 0.5,
  },
  dynamicTabHeaderMenuIcon: {
    padding: 5,
  },
  dynamicTabHeaderItemText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  dynamicTabComponentHeader: {
    fontSize: 24,
    padding: 10,
    backgroundColor: COLOR_GREY,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
  dynamicTabComponentView: {
    padding: 20,
    paddingBottom: 40,
    flex: 1,
  },
  dynamicTabModalWrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'flex-end',
    backgroundColor: '#00000080',
  },
  dynamicTabModalItem: {
    padding: 10,
    backgroundColor: COLOR_DARK,
    borderBottomWidth: 0.5,
    borderBottomColor: COLOR_LIGHT,
  },
  dynamicTabModalView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 10,
  },
  dynamicTabModalItemText: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  slideInScrollViewStyle: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 10,
    elevation: 10,
  },
})
