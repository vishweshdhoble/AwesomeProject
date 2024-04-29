import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Pink Sky</Text>
          <Text style={styles.cardLabel}>Earth wonders</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            doloribus mollitia dolor saepe, sunt officia explicabo consequatur
            officiis expedita.
          </Text>
          <Text style={styles.cardFooter}>
            Found everywhere but rarely like this
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width:350,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:"auto",
  },
  cardElevated: {
    backgroundColor:"#fff",
    color:'#000000',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1,
    }
  },
  cardImage: {
    height: 180,
    objectFit: 'cover',
    marginBottom:8,
    borderRadius:6
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },
  cardTitle: {
    color:'#000000',
    fontSize:22,
    fontWeight:'bold',
    marginBottom:4
  },
  cardLabel: {
    color:'#000000',
    fontSize:14,
    marginBottom:6
  },
  cardDescription: {
    color:'#242B2E',
    fontSize:12,
    marginBottom:12,
    flexShrink:1,
    marginTop:6,
  },
  cardFooter: {
    color:'#000000',
  },
});
