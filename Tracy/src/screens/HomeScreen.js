import React, { useState } from "react";
import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Features from "../components/Features";
import { dummyMessages } from "../constants";

const HomeScreen = () => {
  const [messages, setMessages] = useState([dummyMessages]);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1, marginTop: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={require("../../assets/images/Blue-eye.jpg")}
            style={{ width: hp(20), height: hp(20), borderRadius: 100 }}
          />
        </View>

        {/* features || text message history */}
        {messages.length > 0 ? (
          <View style={{ flex: 1, margin: 20 }}>
            <Text
              style={{
                fontSize: wp(5),
                fontWeight: "bold",
                marginLeft: 2,
                color: "gray",
              }}
            >
              Assistant
            </Text>
            <View
              style={{
                height: hp(58),
                // borderWidth: 1,
                borderRadius: 18,
                padding: 4,
                backgroundColor: "#DEDEDE",
              }}
            >
              <ScrollView
                bounces={false}
                style={{ margin: 10 }}
                showsVerticalScrollIndicator={false}
              >
                {messages.map((message, index) => {
                  return (
                    <View>
                      <Text>{message.content}</Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
