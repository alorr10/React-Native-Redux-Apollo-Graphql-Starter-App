import React from 'react';
import { View, Modal, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Text, Button, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux'
import { createFilter } from 'react-native-search-filter';

import Loading from '../components/Loading'
import ContactListItem from '../components/ContactListItem'

import { toggleContactsModal } from '../actions';
import { sendBrighten } from '../actions/brightens/sendBrighten'
import { hideCompliment } from '../actions/brightens/hideCompliment'


const KEYS_TO_FILTERS = ['givenName'];


class ContactsModal extends React.Component {

  /* Use component level state for the search term. Can move to redux in the future */
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }


  /* Render searching components */

  renderHeader = () => <SearchBar onChangeText={this.onChange} />

  renderSeparator = () => <View style={{ height: 1, backgroundColor: "#CED0CE" }} />

  renderItem = ({item}) => {
    return (
      <ContactListItem
        onPressItem={this.onSubmit}
        name={!!item.givenName ? item.givenName : "No Name?? That's strange :)"}
        number={item.phoneNumbers[0] ? item. phoneNumbers[0].number : null                                      }
      />
    )
  }



  /* Call backs */

  onChange = searchTerm => this.setState({ searchTerm })

  onSubmit = (name, number) => {
    this.props.onCloseButtonPress(!this.props.contactsModalIsOpen)
    this.props.onCloseHideCompliment()
    this.props.sendBrighten(name, number)
  }


  onModalClose = () => {
    this.props.onCloseButtonPress(!this.props.contactsModalIsOpen)
    this.setState({ searchTerm: "" })
  }


  render(){
    //the filtered contacts list
    const filteredContacts = this.props.contacts.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    const names = filteredContacts.map(c => !!c.givenName ? c.givenName : "No Name?? That's strange :)")

    //show loading screen if contacts are still being set
    let view = null
    if (this.props.contactsLoading) {
      view = <Loading />
    }
    else {
      view = <FlatList style={styles.container} data={filteredContacts} renderItem={this.renderItem} ListHeaderComponent={this.renderHeader} ItemSeparatorComponent={this.renderSeparator} keyExtractor={item => item.recordID} />
    }

    return (
      <Modal
        transparent
        animationType={'slide'}
        visible={this.props.contactsModalIsOpen}
      >
        <View style={styles.modalContainerStyle}>
          {view}
        <Button
          title='close'
          onPress={() => this.onModalClose()}
        />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = ({ contacts: { contactsModalIsOpen, contacts, contactsLoading }}) => {
  return {
    contactsModalIsOpen,
    contacts,
    contactsLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCloseButtonPress: payload => { dispatch(toggleContactsModal(payload)) },
    onCloseHideCompliment: () => { dispatch(hideCompliment()) },
    sendBrighten: (name, number) => { dispatch(sendBrighten(name, number)) },
  }
}

const styles = {
  modalContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: 100,
  },
  container: {
    marginTop: 20,
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    fontSize: 24,
  },
}

export default connect(mapStateToProps, mapDispatchToProps) (ContactsModal)
























