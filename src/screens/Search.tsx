import { StyleSheet, TextInput, View, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";
import Books from "../components/Books"; 

interface Book {
  id: number;
  title: string;
  author: string;
  discountedPrice: string;
  originPrice: string;
  image: any;
}

interface SearchScreenProps {
  route: RouteProp<{ params: { booksData: Book[] } }, "params">;
}

const Search: React.FC<SearchScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const booksData = route.params?.booksData || [];
  const [query, setQuery] = useState<string>("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(booksData);

  const handleSearch = (text: string) => {
    setQuery(text);
    setFilteredBooks(
      text.trim() === ""
        ? booksData
        : booksData.filter(
            (book) =>
              book.title.toLowerCase().includes(text.toLowerCase()) ||
              book.author.toLowerCase().includes(text.toLowerCase())
          )
    );
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by title or author..."
          placeholderTextColor="#888"
          value={query}
          onChangeText={handleSearch}
          autoFocus
        />
      </View>

      {/* Search Results with Books Component */}
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.bookList}
        renderItem={({ item }) => <Books book={item} />}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
    borderColor: "#A03037",
    borderWidth: 2,
  },
  bookList: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
