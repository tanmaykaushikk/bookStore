import {
  StyleSheet,
  Text,
  View,
  Animated,
  Modal,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const CustomModal = ({ visible, book, onClose }) => {
  const translateY = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <MaterialIcons name="close" color={"white"} size={24} />
        </TouchableOpacity>
        <Animated.View
          style={[styles.modalContent, { transform: [{ translateY }] }]}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.modalImage}>
              <Image source={book.image} style={{ height: 120, width: 80 }} />
            </View>
            <View style={styles.modalTitle}>
              <Text style={{ fontWeight: "bold" }}>{book.title}</Text>
              <Text style={{ marginRight: 45, color: "grey" }}>
                {book.author}
              </Text>
            </View>
          </View>
        <View style={{ borderTopWidth: 0.5, width: 320 ,marginTop:8 ,borderColor:'grey'}}></View>
        <View style={{padding:5}}>
            <Text style={{color:'grey'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A obcaecati corporis minus voluptates facilis quam? Hic, deleniti qui. Laboriosam aliquam repellat dignissimos adipisci natus est optio eum ad, corrupti aperiam laborum nisi. Excepturi magnam consectetur suscipit, itaque labore sapiente libero nemo porro illo quas, dolorem dolores sed nam. Incidunt recusandae cumque ab corrupti exercitationem? Voluptatibus, illum eveniet laboriosam quidem similique porro dolorem, dolor optio autem eum quisquam cumque sunt dolore culpa, doloremque a dicta voluptates aliquam magnam? Incidunt vero voluptate illum cupiditate unde suscipit porro itaque labore dicta enim, perspiciatis, cum totam, non dignissimos. Eveniet in nulla explicabo eaque itaque?
            </Text>
        </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    height: 450,
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
  closeButton: {
    height: 30,
    width: 30,
    marginLeft: 150,
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: "#A03037",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  modalImage: {
    height: 120,
    maxWidth: 80,
    backgroundColor: "red",
    resizeMode: "contain",
    overflow: "hidden",
  },
  modalTitle: {
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
