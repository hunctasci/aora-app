import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = () => {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  return (
    <View className="h-16 w-full flex-row items-center space-x-4 rounded-2xl border-2 border-black-200 bg-black-100 px-4 focus:border-secondary">
      <TextInput
        className="mt-0.5 flex-1 font-pregular text-base"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#7cdcde0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert("Please enter a search query");
          }
          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="h-5 w-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
