import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      {/* the title Tracy */}
      <View
        style={{
          marginBottom: 50,
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#4A5568",
            fontSize: hp(8),
          }}
        >
          TR∀CY
        </Text>
        <Text
          style={{
            fontWeight: "700",
            textAlign: "center",
            flexDirection: "row",
            color: "#718096",
            justifyContent: "center",
            letterSpacing: 1,
          }}
        >
          The future is here, powered by AI.
        </Text>
      </View>

      {/* the eye icon */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          padding: 10,
          marginBottom: hp(18),
        }}
      >
        <Image
          source={require("../../assets/images/Blue-eye.jpg")}
          style={{ width: wp(75), height: wp(75), borderRadius: 200 }}
        />
      </View>

      {/* button for Get Started */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#047857",
          padding: 10,
          borderRadius: 10,
          // marginTop: 15,
          // marginTop: hp(5),
          // flex: 1,
          // flexDirection: "row",
          width: "85%",
          position: "absolute",
          bottom: "5%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "white",
            fontSize: hp(3),
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
