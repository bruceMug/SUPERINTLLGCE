import React from "react";
import { View, Text, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Features = () => {
  return (
    <View style={{ height: hp(50), margin: 15 }}>
      <Text
        style={{
          fontSize: wp(6.5),
          fontWeight: "bold",
          color: "#4A5568",
          marginBottom: 10,
        }}
      >
        Features
      </Text>

      {/* chatgpt */}
      <View
        style={{
          padding: wp(4),
          //   borderWidth: 1,
          backgroundColor: "#90EE90",
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
            margin: 0,
          }}
        >
          <Image
            source={require("../../assets/images/chatgpt.jpg")}
            style={{ height: hp(5), width: hp(5) }}
          />
          <Text
            style={{
              fontSize: wp(4.8),
              marginLeft: 10,
              fontWeight: "900",
            }}
          >
            ChatGPT
          </Text>
        </View>
        <Text style={{ fontSize: wp(3.8), fontWeight: "900" }}>
          We are excited to introduce ChatGPT to get users’ feedback and learn
          about its strengths and weaknesses. During the research preview, usage
          of ChatGPT is free.
        </Text>
      </View>

      {/* dall e */}
      <View
        style={{
          padding: wp(4),
          //   borderWidth: 1,
          backgroundColor: "#CBC3E3",
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
            margin: 0,
          }}
        >
          <Image
            source={require("../../assets/images/chatgpticon.png")}
            style={{ height: hp(5), width: hp(5) }}
          />
          <Text
            style={{
              fontSize: wp(4.8),
              marginLeft: 10,
              fontWeight: "900",
            }}
          >
            DALL-E
          </Text>
        </View>
        <Text style={{ fontSize: wp(3.8), fontWeight: "900" }}>
          DALL·E 2 is an AI system that can create realistic images and art from
          a description in natural language
        </Text>
      </View>

      {/* smart ai */}
      <View
        style={{
          padding: wp(4),
          //   borderWidth: 1,
          backgroundColor: "cyan",
          borderRadius: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
            margin: 0,
          }}
        >
          <Image
            source={require("../../assets/images/smartaiicon.png")}
            style={{ height: hp(5), width: hp(5) }}
          />
          <Text
            style={{
              fontSize: wp(4.8),
              marginLeft: 10,
              fontWeight: "900",
            }}
          >
            ChatGPT
          </Text>
        </View>
        <Text style={{ fontSize: wp(3.8), fontWeight: "900" }}>
          A powerful assistant with the abilities of ChatGPT and DALL-E,
          providing you the best of both worlds.
        </Text>
      </View>
    </View>
  );
};

export default Features;
