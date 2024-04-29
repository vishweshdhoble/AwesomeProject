import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert,
  ScrollView,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  const Handler = () => {
    Alert.alert('Button Clicked');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards/>
          <FancyCard/>
          <ActionCard/>
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
