import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={[styles.container,]}>
        <View style={[styles.card,styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container:{
    flex:1,
    flexDirection:'row',
    padding:8,
  },
  card:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    width:110,
    height:100,
    margin:8,
    borderRadius:4,
  },
  cardOne:{
    backgroundColor:'#EF5354',
  },
  cardTwo:{
    backgroundColor:'#5DA3FA',
  },
  cardThree:{
    backgroundColor:'#50DBB4',
  },
});
