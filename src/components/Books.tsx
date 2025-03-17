import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import CustomModal from "./CustomModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../redux/slice/wishlistSlice";
import { addToCart, removeFromCart } from "../redux/slice/cartSlice"; 

const Books = ({ book }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state: any) => state.wishlist.wishlist);
  const cart = useSelector((state: any) => state.cart.cart);

  const isFavorite = wishlist.some((item) => item.id === book.id);
  const isInCart = cart.some((item) => item.id === book.id);

  const toggleWishlist = () => {
    if (isFavorite) {
      dispatch(removeFromWishlist(book.id));
    } else {
      dispatch(addToWishlist(book));
    }
  };

  const toggleCartHandler = () => {
    if (isInCart) {
      dispatch(removeFromCart(book.id)); 
    } else {
      dispatch(addToCart(book));
    }
  };

  return (
    <View style={styles.main}>
      <View style={{ backgroundColor: "#F5F5F5" }}>
        <View style={styles.image}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={book.image} style={styles.singleImage} />
          </TouchableOpacity>
        </View>
      </View>

      <CustomModal
        visible={modalVisible}
        book={book}
        onClose={() => setModalVisible(false)}
      />

      <View style={{ paddingHorizontal: 4 }}>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 5 }}>
          {book.title}
        </Text>
        <Text style={{ marginRight: 60, color: "grey", marginTop: 5 }}>
          {book.author}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              marginRight: 20,
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 5,
            }}
          >
          {book.discountedPrice}
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontSize: 12,
              color: "grey",
              marginLeft: -10,
              textDecorationLine: "line-through",
            }}
          >
            Rs. {book.originPrice}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.favIcon}>
            <TouchableOpacity onPress={toggleWishlist}>
              <MaterialIcons
                name={isFavorite ? "favorite" : "favorite-border"}
                size={28}
                color={isFavorite ? "#A03037" : "grey"}
              />
            </TouchableOpacity>
          </View>
          <View style={isInCart ? styles.addedToBag : styles.addToBag}>
            <TouchableOpacity onPress={toggleCartHandler}>
              <Text
                style={{ color: "white", fontSize: 14, fontWeight: "bold" }}
              >
                {isInCart ? "ADDED!" : "ADD TO BAG"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  main: {
    height: 320,
    width: 160,
    borderWidth: 1,
    borderColor: "grey",
    overflow: "hidden",
    borderRadius: 6,
  },
  image: {
    height: 150,
    width: 120,
    margin: 18,
  },
  singleImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  favIcon: {
    height: 30,
    width: 35,
    borderWidth: 1,
    borderColor: "grey",
    marginLeft: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  addToBag: {
    height: 30,
    width: 100,
    backgroundColor: "#A03037",
    marginLeft: 5,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    borderRadius: 2,
    elevation: 20,
    marginTop: 12,
  },
  addedToBag: {
    height: 30,
    width: 100,
    backgroundColor: "#A03037",
    marginLeft: 5,
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    borderRadius: 2,
    elevation: 20,
    marginTop: 12,
    paddingLeft:25
  },
});

