import { View, ScrollView } from "react-native";
import styles from "../../../src/Global/style";
import AccountBalanceCard from "../../components/AccountBalanceCard";
import AppBar from "../../components/AppBar";
import Cards from "../../components/Cards";
import Transactions from "../../components/Transactions";
export default function Home() {
  return (
    <View styles={styles.container}>
      <AppBar />
      <AccountBalanceCard />
      <ScrollView style={styles.ScrollViewContainer}>
        <Cards />
        <Transactions />
      </ScrollView>
    </View>
  );
}
