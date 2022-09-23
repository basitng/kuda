import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "../../Global/style";
import { Surface } from "react-native-paper";
import { lighten1, primaryColor } from "../../../colors";
import ListItems from "../../Global/Lists";

const themeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
  },
  pageTitleWrapper: {
    borderBottomColor: "#7A5F9920",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  scrollView: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default function PaymentScreen() {
  const androidSafeArea =
    Platform.OS === "android" ? StatusBar.currentHeight : "";
  return (
    <View style={{ ...themeStyle.container, paddingTop: androidSafeArea }}>
      <View style={themeStyle.pageTitleWrapper}>
        <Text style={themeStyle.pageTitle}>Payments</Text>
      </View>
      <ScrollView style={themeStyle.scrollView}>
        <Text style={themeStyle.subHeader}>Friends on Kuda</Text>
        <Surface style={styles.cardSurface} elevation={2}>
          <TouchableOpacity>
            <View style={styles.validityCard}>
              <View style={styles.validityTextWrapper}>
                <Text style={styles.validityTitle}>Friends on Kuda</Text>
                <Text style={styles.validityText}>
                  Find your contact on kuda
                </Text>
              </View>
              <View style={styles.validityAction}>
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                    width: 100,
                    height: 35,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: primaryColor,
                  }}
                >
                  <Text style={styles.btnText}>Connect</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Surface>

        {ListItems.map((item) => (
          <Surface style={styles.cardSurface} key={item.id} elevation={2}>
            <TouchableOpacity>
              <View
                style={{
                  ...styles.validityCard,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ ...styles.icon, backgroundColor: lighten1 }}>
                    {item.icon}
                  </View>
                  <View style={{ ...styles.validityTextWrapper, width: "80%" }}>
                    <Text style={styles.validityTitle}>{item.title}</Text>
                    <Text style={styles.validityText}>{item.description}</Text>
                  </View>
                </View>
                <View style={styles.validityAction}>
                  <TouchableOpacity>
                    <MaterialIcons
                      name="arrow-forward-ios"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </Surface>
        ))}
      </ScrollView>
    </View>
  );
}
