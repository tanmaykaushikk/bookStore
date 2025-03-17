import {
    StyleSheet,
    Text,
    View,
    Modal,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { MaterialIcons } from "@expo/vector-icons";
  
  const CustomerDetailsModal = ({ visible, onClose, onSave }) => {
    const [details, setDetails] = useState({
      name: "",
      phone: "",
      pincode: "",
      locality: "",
      address: "",
      city: "",
      landmark: "",
      type: "Home",
    });
  
    // Function to handle adding customer details
    const handleSave = () => {
      onSave(details); // Pass details to parent
      onClose(); // Close modal
    };
  
    return (
      <Modal animationType="slide" transparent visible={visible}>
        <View style={styles.modalContainer}>
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <MaterialIcons name="close" color={"white"} size={24} />
          </TouchableOpacity>
  
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Customer Details</Text>
  
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={details.name}
              onChangeText={(text) => setDetails({ ...details, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
              keyboardType="numeric"
              value={details.phone}
              onChangeText={(text) => setDetails({ ...details, phone: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Pincode"
              keyboardType="numeric"
              value={details.pincode}
              onChangeText={(text) => setDetails({ ...details, pincode: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Locality"
              value={details.locality}
              onChangeText={(text) => setDetails({ ...details, locality: text })}
            />
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Address"
              multiline
              value={details.address}
              onChangeText={(text) => setDetails({ ...details, address: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="City/Town"
              value={details.city}
              onChangeText={(text) => setDetails({ ...details, city: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Landmark"
              value={details.landmark}
              onChangeText={(text) => setDetails({ ...details, landmark: text })}
            />
  
            {/* Address Type Selection */}
            <Text style={styles.label}>Type</Text>
            <View style={styles.radioContainer}>
              {["Home", "Work", "Other"].map((type) => (
                <TouchableOpacity
                  key={type}
                  style={styles.radioButton}
                  onPress={() => setDetails({ ...details, type })}
                >
                  <View style={styles.radioOuter}>
                    {details.type === type && <View style={styles.radioInner} />}
                  </View>
                  <Text>{type}</Text>
                </TouchableOpacity>
              ))}
            </View>
  
            {/* Add Button */}
            <TouchableOpacity style={styles.addButton} onPress={handleSave}>
              <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  
  export default CustomerDetailsModal;
  
  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
      width: "100%",
      height: "80%",
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
    },
    modalHeading: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    label: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
    radioContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 30,
    },
    radioButton: { flexDirection: "row", alignItems: "center" },
    radioOuter: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "#000",
      justifyContent: "center",
      alignItems: "center",
      marginRight: 5,
    },
    radioInner: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: "#000",
    },
    addButton: {
      backgroundColor: "#A03037",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    addButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    closeButton: {
      top: 20,
      right: 20,
      backgroundColor: "#A03037",
      borderRadius: 50,
      height: 30,
      width: 30,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
      marginBottom:25,
      marginLeft:25
    },
  });
  
