import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View >
          <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What,s new in Javascript 21 - ES12
          </Text>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWxidW0lMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              accusamus magni vitae soluta, sint similique molestiae mollitia
              doloribus quam suscipit excepturi provident ad sed est fugiat
              architecto. Commodi adipisci expedita, maiores sint sit tenetur
              consequatur! Vero sapiente quam modi tempore?
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => {
                openWebsite(
                  'https://www.youtube.com/watch?v=vtYdBaXjysU&list=PLbtI3_MArDOk7J-8hR6CeB5U6bvgRKNNr&index=12',
                );
              }}>
              <Text style={styles.socialLinks}>Read more</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openWebsite(
                  'https://www.youtube.com/watch?v=vtYdBaXjysU&list=PLbtI3_MArDOk7J-8hR6CeB5U6bvgRKNNr&index=12',
                );
              }}>
              <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 'auto',
  },
  elevatedCard: {
    backgroundColor:"#fff",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
  },
  headingContainer: {
    height: 40,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  headerText: {
    fontSize:16,
    fontWeight: '600',
  },
  cardImage: {
    height: 180,
    objectFit: 'cover',
  },
  bodyContainer: {
    padding:10,
  },
  footerContainer: {
    padding:10,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  socialLinks: {
    fontSize:14,
    color:'#000',
    backgroundColor:'#ababab',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    fontWeight:'400',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#000',
  },
});
