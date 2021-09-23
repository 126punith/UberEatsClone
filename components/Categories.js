import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    index: 1,
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-Up",
  },
  {
    index: 2,
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    index: 3,
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    index: 4,
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    index: 5,
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    index: 6,
    image: require("../assets/images/coffee.png"),
    text: "Coffeee & Tea",
  },
  {
    index: 7,
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];
export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        backgroundColor: "white",
        marginTop: 5,
        paddingVertical: 5,
      }}
    >
      {items.map((item, index) => (
        <View
          style={{
            alignItems: "center",
            marginRight: 30,
          }}
          key={item.index}
        >
          <Image
            source={item.image}
            style={{
              width: 50,
              height: 40,
              resizeMode: "contain",
            }}
            index={item.index}
          />
          <Text
            style={{
              fontSize: 13,
              fontWeight: "900",
            }}
            index={item.index}
          >
            {item.text}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
