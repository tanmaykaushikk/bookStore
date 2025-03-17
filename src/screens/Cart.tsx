import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slice/cartSlice";
import MainHeader from "../components/MainHeader";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomerDetailsModal from "../components/CustomerDetailsModal";

const Cart = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const totalAmount = useSelector((state: any) =>
    state.cart.cart
      ? state.cart.cart.reduce(
          (total, item) => total + (parseFloat(item.discountedPrice) || 0) * (item.quantity || 0),
          0
        )
      : 0
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(null);

  return (
    <>
      <View>
        <MainHeader />
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={26} />
          </TouchableOpacity>
          <Text style={styles.heading}>My Bag ({cart.length} Items)</Text>
        </View>

        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>by {item.author}</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.price}>{item.discountedPrice}</Text>
                  <Text style={styles.originalPrice}>
                    Rs.{item.originPrice}
                  </Text>
                </View>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <Text style={styles.quantityText}>−</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => dispatch(increaseQuantity(item.id))}
                  >
                    <Text style={styles.quantityText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => dispatch(removeFromCart(item.id))}
              >
                <Text style={styles.remove}>✖</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Customer Details Section */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.customerDetails}>
            <Text style={styles.customerText}>Customer Details</Text>
            <Text style={styles.plusIcon}>+</Text>
          </View>
        </TouchableOpacity>

        {/* Display Customer Details if Entered */}
        {customerDetails && (
          <View style={styles.customerInfo}>
            <Text style={styles.customerInfoText}>Name: {customerDetails.name}</Text>
            <Text style={styles.customerInfoText}>Phone: {customerDetails.phone}</Text>
            <Text style={styles.customerInfoText}>Pincode: {customerDetails.pincode}</Text>
            <Text style={styles.customerInfoText}>Locality: {customerDetails.locality}</Text>
            <Text style={styles.customerInfoText}>Address: {customerDetails.address}</Text>
            <Text style={styles.customerInfoText}>City: {customerDetails.city}</Text>
            <Text style={styles.customerInfoText}>Landmark: {customerDetails.landmark}</Text>
            <Text style={styles.customerInfoText}>Type: {customerDetails.type}</Text>
          </View>
        )}

        <View style={styles.footer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>Rs.{totalAmount}</Text>
        </View>

        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={() => navigation.navigate("Successful")}
        >
          <Text style={styles.placeOrderText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>

      {/* Customer Details Modal */}
      <CustomerDetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={(details) => setCustomerDetails(details)}
      />
    </>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 10, marginLeft: 10 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: { width: 60, height: 80, marginRight: 10 },
  details: { flex: 1 },
  title: { fontSize: 16, fontWeight: "bold" },
  author: { color: "grey" },
  priceContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  price: { fontSize: 16, fontWeight: "bold", marginRight: 10 },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "grey",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    backgroundColor: "#A03037",
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  quantityText: { color: "white", fontSize: 16, fontWeight: "bold" },
  quantity: { fontSize: 16, fontWeight: "bold", marginHorizontal: 10 },
  remove: { fontSize: 18, color: "grey" },
  customerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  customerText: { fontSize: 16, fontWeight: "bold" },
  plusIcon: { fontSize: 20, color: "black" },
  customerInfo: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  customerInfoText: { fontSize: 14, color: "#333" },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  totalText: { fontSize: 16, fontWeight: "bold" },
  totalAmount: { fontSize: 16, fontWeight: "bold", color: "#A03037" },
  placeOrderButton: {
    backgroundColor: "#A03037",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
  },
  placeOrderText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

