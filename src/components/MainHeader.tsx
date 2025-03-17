import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const MainHeader = () => {
  const navigation = useNavigation();
  const cartCount = useSelector((state) => state.cart.cartCount); // Get count from Redux

  return (
    <View style={styles.main}>
      <View style={styles.title}>
        <TouchableOpacity onPress={()=> navigation.navigate("Landing")}>
          <Image
            source={require("../assets/title-removebg-preview.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={()=> navigation.navigate("Search",)}>
          <MaterialIcons name="search" size={24} color={"#A03037"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Wishlist")}>
          <MaterialIcons name="favorite-border" size={24} color={"#A03037"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.cartIcon}>
          <MaterialIcons name="shopping-cart" size={24} color={"#A03037"} />
          {cartCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    height: 90,
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "column",
    elevation: 5,
  },
  title: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    marginLeft: 220,
    marginTop: -5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    width: 150,
    resizeMode: "contain",
    marginTop: 70,
    marginLeft: 50,
  },
  cartIcon: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    right: -6,
    top: -6,
    backgroundColor: "red",
    borderRadius: 10,
    height: 18,
    width: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
