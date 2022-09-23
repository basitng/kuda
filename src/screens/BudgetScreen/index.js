import {
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { lightColor, lighten1, primaryColor } from "../../../colors";
import { Surface } from "react-native-paper";
import budgetAnalysis from "../../Global/Analysis";

export default function BudgetScreen() {
  const androidSafeArea =
    Platform.OS === "android" ? StatusBar.currentHeight * 1.3 : "";
  return (
    <View>
      <View style={{ ...screenStyle.appBar, paddingTop: androidSafeArea }}>
        <AntDesign
          style={{ flex: 0.5 }}
          name="piechart"
          size={30}
          color={primaryColor}
        />
        <Text style={screenStyle.appBarTitle}>Budget</Text>
      </View>
      <View style={screenStyle.dateTextWrapper}>
        <Text style={screenStyle.dateText}>Sep 2022</Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View style={screenStyle.analysisWrapper}>
          {budgetAnalysis.map((item) => (
            <Surface
              key={item.id}
              style={{ borderRadius: 3, marginHorizontal: 5, marginBottom: 10 }}
              elevation={5}
            >
              <View style={screenStyle.analysisCard}>
                <View
                  style={{
                    ...screenStyle.analysisIcon,
                    backgroundColor: item.backgroundColor,
                  }}
                >
                  <Feather name={item.icon} size={20} color={item.iconColor} />
                </View>
                <View style={screenStyle.analysisTextWrapper}>
                  <Text
                    style={{
                      ...screenStyle.analysisText1,
                      color: item.topper ? item.iconColor : "#000",
                    }}
                  >
                    {item.value}
                  </Text>
                  <Text style={screenStyle.analysisText2}>Money in</Text>
                </View>
              </View>
            </Surface>
          ))}
        </View>
        <TouchableOpacity>
          <View style={screenStyle.budgetCard}>
            <View style={screenStyle.budgetIcon}>
              <AntDesign name="piechart" size={35} color="grey" />
            </View>
            <View style={screenStyle.budgetTextWrapper}>
              <Text style={screenStyle.budgetText1}>Create a Budget</Text>
              <Text style={screenStyle.budgetText2}>
                Create a smart budget now to manage your finances better.
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "900",
            paddingTop: 30,
            paddingLeft: 20,
            paddingBottom: 10,
          }}
        >
          All Categories
        </Text>
        <TouchableOpacity style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View style={screenStyle.transferCard}>
            <View style={screenStyle.sec1}>
              <View style={screenStyle.transferIcon}>
                <Feather name="send" size={24} color={primaryColor} />
              </View>
              <View style={screenStyle.sec1TextWrapper}>
                <Text style={screenStyle.sec1Text}>Transfer</Text>
                <Text style={screenStyle.sec2Text}>31 Transactions</Text>
              </View>
            </View>
            <View style={screenStyle.sec2}>
              <Text style={screenStyle.sec3Text}>74,150.00</Text>
              <Text style={screenStyle.sec4Text}>88%</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const screenStyle = StyleSheet.create({
  appBar: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  appBarTitle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
  dateTextWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#dddddd50",
    borderBottomWidth: 1.5,
  },
  dateText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "normal",
  },
  analysisWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexBasis: "10%",
  },
  analysisCard: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 160,
  },
  analysisIcon: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: primaryColor,
    borderRadius: 100,
    marginRight: 10,
  },
  analysisTextWrapper: {},
  analysisText1: {
    fontSize: 20,
  },
  analysisText2: {
    color: "#55555590",
  },
  budgetCard: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  budgetIcon: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 100,
  },
  budgetTextWrapper: {
    paddingHorizontal: 10,
    width: "60%",
  },
  budgetText1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  budgetText2: {
    color: "#55555570",
    fontSize: 17,
  },
  transferCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sec1: {
    flexDirection: "row",
    alignItems: "center",
  },
  sec1TextWrapper: {
    paddingLeft: 10,
  },
  sec1Text: { fontSize: 18, fontWeight: "bold" },
  transferIcon: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lighten1,
    borderRadius: 100,
  },
  sec3Text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sec4Text: {
    alignSelf: "flex-end",
    fontSize: 16,
  },
});
