import React from "react";
import { SafeAreaView, Image, Text, View } from "react-native";
import styles from "../Global/style";
import AddIcon from "../../assets/images/Add.svg";

export default function AppBar() {
  return (
    <SafeAreaView style={styles.androidAreaView}>
      <View style={styles.flexBetween}>
        <View style={styles.flex}>
          <Image
            style={styles.avatar}
            source={require("../../assets/images/avatar1.jpg")}
          />
          <Text style={styles.username}>Hi, Amaechi</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.textAction}>Add Money</Text>
          <AddIcon width={34} />
        </View>
      </View>
    </SafeAreaView>
  );
}
