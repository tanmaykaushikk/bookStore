import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import Books from "./Books";
import Footer from "./Footer";

const MainBody = () => {
  const booksData = [
    {
      id: 1,
      title: "Don't Make me Think",
      author: "by Steve Krug",
      discountedPrice: "Rs.500",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52.jpeg')
    },
    {
      id: 2,
      title: "React Material - UI",
      author: "by Steve Krug",
      discountedPrice: "Rs.1000",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52 (2).jpeg')
    },
    {
      id: 3,
      title: "UX - UI Design",
      author: "by Steve Krug",
      discountedPrice: "Rs.350",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52 (4).jpeg')
    },
    {
      id: 4,
      title: "UX for Dummies",
      author: "by Steve Krug",
      discountedPrice: "Rs.1200",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52 (3).jpeg')
    },
    {
      id: 5,
      title: "Design Of Things",
      author: "by Steve Krug",
      discountedPrice: "Rs.1100",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52 (7).jpeg')
    },
    {
      id: 6,
      title: "The Alchemist",
      author: "by Steve Krug",
      discountedPrice: "Rs.150",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52 (8).jpeg')
    },
    {
      id: 7,
      title: "Learn UX",
      author: "by Steve Krug",
      discountedPrice: "Rs.700",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52 (9).jpeg')
    },
    {
      id: 8,
      title: "UX for Dummies",
      author: "by Steve Krug",
      discountedPrice: "Rs.1200",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52 (3).jpeg')
    },
    {
      id: 9,
      title: "React Material - UI",
      author: "by Steve Krug",
      discountedPrice: "Rs.1000",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52 (2).jpeg')
    },
    {
      id: 10,
      title: "SharePoint Framework",
      author: "by Steve Krug",
      discountedPrice: "Rs.1500",
      originPrice: "2000",
      image: require('../assets/WhatsApp Image 2025-03-10 at 14.55.52 (1).jpeg')
    },
  ];
  return (
    <ScrollView>
      <View style={styles.main}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.booksTitle}>
            <Text style={{ fontSize: 24 }}>Books</Text>
          </View>
          <View>
            <Text style={styles.booksSubtitle}>(128)</Text>
          </View>
        </View>

        <View style={styles.bookCatalogue}>
          {booksData.map((book) => (
            <Books key={book.id} book={book} />
          ))}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default MainBody;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  booksTitle: {
    fontSize: 20,
    height: 40,
    width: 80,
    padding: 5,
    margin: 16,
  },
  booksSubtitle: {
    height: 40,
    flex: 1,
    marginLeft: -20,
    margin: 16,
    fontSize: 12,
    paddingTop: 15,
    color: "grey",
    marginTop: 18,
  },
  bookCatalogue: {
    flex: 1,
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
});
