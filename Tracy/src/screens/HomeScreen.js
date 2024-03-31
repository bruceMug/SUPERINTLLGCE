import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Features from "../components/Features";
import { dummyMessages } from "../constants";
import Voice from "@wdragon/react-native-voice";

const HomeScreen = () => {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  const speechStartHandler = () => {
    console.log("Speech has started");
  };

  const speechEndHandler = () => {
    setRecording(false);
    console.log("Speech has ended");
  };

  const speechResultsHandler = (e) => {
    console.log("REturn results:");
    // const { value } = e;
    console.log("Voice event", e);
    // setMessages([...messages, { role: "user", content: value[0] }]);
  };

  const speechErrorHandler = (e) => {
    console.log("Voice error", e);
  };

  const startRecording = async () => {
    setRecording(true);
    try {
      await Voice.start("en-GB"); // en-US
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      setRecording(false);
      // fetch results from chatgpt
    } catch (e) {
      console.error(e);
    }
  };

  const stopSpeaking = () => {
    setSpeaking(false);
  };

  useEffect(() => {
    // voice handler events
    console.log("speech handlers");
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultsHandler;
    Voice.onSpeechError = speechErrorHandler;

    return () => {
      // destroy the voice instance
      // console.log(Voice.isAvailable());
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SafeAreaView style={{ flex: 1, marginTop: 15 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            source={require("../../assets/images/Blue-eye.jpg")}
            style={{ width: hp(15), height: hp(15), borderRadius: 100 }}
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
                  if (message.role == "assistant") {
                    if (message.content.includes("https")) {
                      console.log(message.content);
                      return (
                        <View
                          key={index}
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                          }}
                        >
                          <View
                            style={{
                              padding: 2,
                              borderRadius: 10,
                              margin: 5,
                              borderTopLeftRadius: 0,
                              backgroundColor: "#90EE90",
                            }}
                          >
                            {/* <Text>{message.content}</Text> */}
                            <Image
                              // source={{ uri: message.content }}
                              source={require("../../assets/images/smartaiicon.png")}
                              resizeMode="contain"
                              style={{
                                width: 200,
                                height: 200,
                                borderRadius: 10,
                              }}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      // text response
                      return (
                        <View
                          key={index}
                          style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                          }}
                        >
                          <View
                            style={{
                              backgroundColor: "#90EE90",
                              padding: 5,
                              borderRadius: 7,
                              width: wp(70),
                              margin: 7,
                              borderTopLeftRadius: 0,
                            }}
                          >
                            <Text>{message.content}</Text>
                          </View>
                        </View>
                      );
                    }
                  } else {
                    // user input
                    return (
                      <View
                        key={index}
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "#F5F5F5",
                            padding: 5,
                            borderRadius: 7,
                            width: wp(70),
                            margin: 5,
                            borderTopRightRadius: 0,
                          }}
                        >
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        {/* recording, clear and stop buttons */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            // flexDirection: "row",
          }}
        >
          {recording ? (
            <TouchableOpacity onPress={stopRecording}>
              {/* recording stop button */}
              <Image
                source={require("../../assets/images/recordingicon.png")}
                style={{ width: hp(10), height: hp(10), borderRadius: 100 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              {/* recording start button */}
              <Image
                source={require("../../assets/images/startrecording.gif")}
                style={{ width: hp(10), height: hp(10), borderRadius: 100 }}
              />
            </TouchableOpacity>
          )}

          {/* this is Clear button */}
          {messages.length > 0 && (
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                padding: 8,
                position: "absolute",
                right: wp(15),
                // bottom: 20,
                borderRadius: 10,
              }}
              onPress={() => {
                setMessages([]);
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Clear</Text>
            </TouchableOpacity>
          )}

          {/* stop button: toggle accordingly */}
          {speaking > 0 && (
            <TouchableOpacity
              style={{
                backgroundColor: "#FF7F7F",
                padding: 8,
                position: "absolute",
                left: wp(15),
                // bottom: 20,
                borderRadius: 10,
              }}
              onPress={stopSpeaking}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
