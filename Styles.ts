import { StyleSheet, Dimensions } from 'react-native'

export const Styles = StyleSheet.create({
  dynamicTabView: {
    padding: 10,
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
    backgroundColor: '#4BB4FF',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderRightColor: '#255A80',
    borderRightWidth: 0.5,
  },
  dynamicTabHeaderMenuIcon: {
    paddingBottom: 20,
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#4BB4FF',
    // borderTopRightRadius: 5,
    // borderTopLeftRadius: 5,
    // borderRightColor: '#255A80',
    // borderRightWidth: 0.5,
  },
  dynamicTabHeaderItemText: {
    fontSize: 16,
    textAlign: 'center',
  },
  dynamicTabComponentView: {
    backgroundColor: '#96D3FF',
    padding: 20,
    minHeight: Dimensions.get('window').height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dynamicTabModalView: {
    //width: Dimensions.get('window').width * 0.8,
    padding: 20,
    //flex: 1,
    backgroundColor: '#3B90CC',
    borderBottomColor: '#255A80',
    borderBottomWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dynamicTabModalText: {
    fontSize: 20,
    textAlign: 'center',
  },
})
