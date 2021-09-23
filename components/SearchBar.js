import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInputContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            borderRadius: 50,
            backgroundColor: "#eee",
          },
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <>
            <View
              style={{
                flexDirection: "row",
                marginRight: 8,
                backgroundColor: "white",
                padding: 9,
                borderRadius: 30,
                alignItems: "center",
              }}
            >
              <AntDesign
                name="clockcircle"
                size={10}
                color="black"
                style={{
                  marginRight: 6,
                }}
              />
              <Text>Search</Text>
            </View>
          </>
        )}
      />
    </View>
  );
}
