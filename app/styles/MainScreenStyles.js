import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#FFBE00',
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  contactsView: {
    width: 200,
    backgroundColor: 'red',
  },

  textInput: {
    backgroundColor: 'white',
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    paddingLeft: 10,
    paddingVertical: 10,
  },

  listContainer: {
    marginTop: 0,
  },

  contactList: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    width: 200,
    paddingLeft: 10,
    paddingVertical: 10,
  },
});

export default styles;