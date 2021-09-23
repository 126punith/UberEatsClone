import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://www.elitetraveler.com/wp-content/uploads/2021/06/FSX-0164-Filia-main-e1623861643989.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$$",
    reviews: 1244,
    rating: 4.1,
  },
  {
    name: "Vegas Bar",
    image_url:
      "https://ca-times.brightspotcdn.com/dims4/default/fe4a2a7/2147483647/strip/true/crop/3642x2087+0+0/resize/840x481!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8f%2F71%2F26fe2b3f4f74a93c81771d815820%2Festhers-kitchen-in-the-arts-district-is-among-vegas-most-popular-off-strip-restaurants.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$$",
    reviews: 1774,
    rating: 5,
  },
  {
    name: "Underwater Bar",
    image_url:
      "https://media.cntraveler.com/photos/53e2f486dddaa35c30f6692f/1:1/w_344,h_258,c_limit/ithaa-1.jpgs",
    categories: ["Cafe", "Bar"],
    price: "$$$",
    reviews: 1840,
    rating: 4.8,
  },
  {
    name: "Sky Bar",
    image_url:
      "https://dirona.com/wp-content/uploads/2018/06/360-The-Restaurant-at-the-CN-Tower-in-Toronto-ON-Dining-Room-DiRoNA-Awarded-Restaurant.png",
    categories: ["Cafe", "Bar"],
    price: "$$$",
    reviews: 1904,
    rating: 5,
  },
  {
    name: "lakeside Bar",
    image_url:
      "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/p/e/p33320-15883975915ead06174e554.jpg?tr=tr:n-xlarge",
    categories: ["Cafe", "Bar"],
    price: "$$$",
    reviews: 1300,
    rating: 3.9,
  },
];

export default function RestaurantItems() {
  return (
    <>
      {localRestaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
        >
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: 20 }}>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 200, alignItems: "center" }}
      />
      <TouchableOpacity
        style={{ position: "absolute", right: 20, marginTop: 10 }}
      >
        <MaterialCommunityIcons name="heart-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "grey" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 40,
        width: 40,
        alignItems: "center",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Octicons
        name="star"
        size={11}
        color="darkblue"
        style={{ marginLeft: 1 }}
      />
      <Text>{props.rating}</Text>
    </View>
  </View>
);
