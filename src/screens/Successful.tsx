import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

const Successful = () => {
  return (
    <>
    <View>
        <MainHeader/>
    </View>
     <View style={styles.container}>
      {/* <Image source={require('../assets/success.png')} style={styles.image} /> */}
      <Text style={styles.title}>Order Placed Successfully</Text>
      <Text style={styles.message}>
        Hurray!!! Your order is confirmed. The order ID is #123456. Save the order ID for further communication.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CONTINUE SHOPPING</Text>
      </TouchableOpacity>
      <View style={styles.contactContainer}>
        <Text style={styles.contactText}>📧 admin@bookstore.com</Text>
        <Text style={styles.contactText}>📞 +91 8163475881</Text>
        <Text style={styles.contactText}>
          📍 42, 14th Main, 15th Cross, Sector 4, opp to BDA complex, near Kumarakom restaurant, HSR Layout, Bangalore 560034
        </Text>
      </View>
    </View>
    <Footer/>
    </>
  );
};

export default Successful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#a83232',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contactText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 2,
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
  },
});
