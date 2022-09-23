import { Platform, StyleSheet, StatusBar } from "react-native";
import {
  avatarColor,
  darkBg,
  lightColor,
  primaryColor,
  secondaryColor,
} from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flexBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  androidAreaView: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  username: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 17,
    color: "#000",
  },
  textAction: {
    paddingRight: 20,
    fontWeight: "bold",
    fontSize: 17,
    color: primaryColor,
  },
  accountContainer: {
    paddingVertical: 30,
    paddingHorizontal: 25,
  },
  accountCard: {
    width: "100%",
    backgroundColor: primaryColor,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  accountText: {
    textAlign: "center",
  },
  accountTitle: {
    fontSize: 16,
    color: lightColor,
    fontWeight: "bold",
    opacity: 0.8,
  },
  accountBalance: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
  },
  tabBox: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tab: {
    width: 53,
    height: 35,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: lightColor,
  },
  tabText: {
    color: lightColor,
    opacity: 0.5,
  },
  ScrollViewContainer: {
    paddingHorizontal: 25,
    flexGrow: 1,
  },
  validityCard: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    // backgroundColor: "#eee",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 5,
  },
  validityTitle: {
    fontSize: 19.0,
    color: primaryColor,
    fontWeight: "900",
    textTransform: "capitalize",
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: avatarColor,
    justifyContent: "center",
    alignItems: "center",
  },
  validityTextWrapper: {
    width: "60%",
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: "orangered",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
  validityText: {
    color: "#7A5F9990",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  validityTitle2: {
    fontSize: 19.0,
    color: primaryColor,
    fontWeight: "900",
    width: "100%",
    textTransform: "none",
  },
  icon2: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: avatarColor,
  },
  validityTextWrapper2: {
    width: "90%",
    paddingHorizontal: 10,
  },
  headerTextWrapper: {
    paddingVertical: 22,
  },
  headerText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
  transactionCard: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    borderBottomColor: "#7A5F9920",
    borderBottomWidth: 1,
  },
  bankWrapper: {
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  bankIcon: { width: 40, height: 40, borderRadius: 100 },
  transactionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  transactionTextWrapper: {
    paddingLeft: 10,
  },
  transactionPurpose: {
    paddingBottom: 2,
    fontWeight: "bold",
  },
  time: {
    fontWeight: "bold",
  },
  transactionDate: {
    color: secondaryColor,
  },
  cardSurface: {
    marginVertical: 12,
  },
});

export default styles;
