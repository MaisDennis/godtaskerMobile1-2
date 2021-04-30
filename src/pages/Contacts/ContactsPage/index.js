import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
// -----------------------------------------------------------------------------
import {
  AddIcon,
  Container,
  Header, HeaderTouchable,
  List,
  SearchBarTextInput,
  Title,
} from './styles'
import HeaderView from '~/components/HeaderView'
import Contacts from '~/components/Contacts'
import api from '~/services/api';

export default function ContactsPage({ navigation }) {
  const userId = useSelector( state => state.user.profile.id)
  const contacts_update = useSelector( state => state.contact.profile)

  const [contacts, setContacts] = useState([]);
  const [defaultContacts, setDefaultContacts] = useState([]);
  const [inputState, setInputState] = useState('');

  useEffect(() => {
    loadContacts(userId);

  }, [contacts_update]);

  async function loadContacts(userID) {
    console.tron.log(userID)
    const response = await api.get(`users/${userID}/contact-list`, {
    })
    setContacts(response.data)
    setDefaultContacts(response.data)
    // sorter
    // if(response.data) {
    //   const sortedResponseData = response.data.sort(compare)
    //   setContacts(sortedResponseData)
    //   // setContacts('Hi')
    //   setDefaultContacts(sortedResponseData)
    // }

  }

  function compare(a, b) {
    if (a.worker_name > b.worker_name) {
      return 1;
    }
    if (a.worker_name < b.worker_name) {
      return -1;
    }
    return 0;
  }

  const handleUpdateInput = async (input) => {
    const filteredList = defaultContacts.filter(c => {
      let contactName = c.first_name + c.last_name + c.worker_name
      return contactName.toLowerCase().includes(input.toLowerCase())
    })
    setContacts(filteredList)
    setInputState(input)
  }

  // const renderItem = ({ item, index }) => (
  //   <Contacts key={index} data={item} navigation={navigation}/>
  // );

  function handleCreateContact() {
    navigation.navigate('ContactCreate')
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <Header>
        <SearchBarTextInput
          placeholder='Procurar o contato'
          onChangeText={handleUpdateInput}
          value={inputState}
        />
        <HeaderTouchable onPress={() => loadContacts(userId)}>
          <AddIcon name='refresh-cw' size={21}/>
        </HeaderTouchable>
        <HeaderTouchable onPress={handleCreateContact}>
          <AddIcon name='plus' size={21}/>
        </HeaderTouchable>
      </Header>
      { contacts == ''
        ? (
          <Title>Não há contatos cadastrados.</Title>
        )
        : (
          <List
            data={contacts}
            keyExtractor={item => String(item.phonenumber)}

            renderItem={({ item }) => (
              // <Contacts
              //   key={item.phonenumber}
              //   data={item}
              //   navigation={navigation}
              // />
              <SafeAreaView
                key={item.phonenumber}
                data={item}
              ><Text>{item.phonenumber}</Text></SafeAreaView>
            )}
          />
        )
      }
    </Container>
  )
}
