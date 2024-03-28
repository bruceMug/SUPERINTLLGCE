import React, { useState } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Features from "../components/Features";

const HomeScreen = () => {
  const [messages, setMessages] = useState([]);
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
          <View>
            <Text>Empty</Text>
          </View>
        ) : (
          <Features />
        )}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
