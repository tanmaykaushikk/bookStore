import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MainHeader from "../components/MainHeader";
import Books from "../components/Books";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Wishlist = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.wishlist);
  const navigation = useNavigation();

  return (
    <>
      <View>
        <MainHeader />
      </View>
      <View style={styles.container}>
        {wishlist.length === 0 ? (
          <Text style={styles.emptyText}>Your wishlist is empty.</Text>
        ) : (
          <>
          <View style={{flexDirection:"row"}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons name="arrow-back" size={28} style={{marginTop:10}}/>
            </TouchableOpacity>
            <Text style={styles.title}>
              My Wishlist ({wishlist.length} items)
            </Text>
          </View>
            
            <FlatList
              data={wishlist}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.bookWrapper}>
                  <Books book={item} />
                </View>
              )}
            />
          </>
        )}
      </View>
    </>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  emptyText: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    marginTop: 20,
  },
  bookWrapper: {
    flex: 1,
    flexBasis: "48%", // Ensures 2 items per row
    margin: 4, // Adds spacing
  },
});
