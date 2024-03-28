import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
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
            fontSize: 36,
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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          padding: 10,
          marginBottom: 70,
        }}
      >
        <Image
          source={require("../../assets/images/Blue-eye.jpg")}
          style={{ width: 300, height: 300, borderRadius: 200 }}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#047857",
          padding: 10,
          borderRadius: 10,
          marginTop: 15,
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
            fontSize: 20,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
