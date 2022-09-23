import { TouchableOpacity, Image, Text, View } from "react-native";
import React from "react";
import transactions from "../../transactions";
import styles from "../Global/style";
import { secondaryColor } from "../../colors";

export default function Transactions() {
  return (
    <View>
      <View style={styles.headerTextWrapper}>
        <Text style={styles.headerText}>Recent Transactions</Text>
      </View>
      <Text style={{ fontSize: 14, color: secondaryColor, fontWeight: "bold" }}>
        18 Sep 2022
      </Text>
      {transactions.map((transaction) => (
        <TouchableOpacity key={transaction.id}>
          <View style={styles.transactionCard}>
            <View style={styles.transactionWrapper}>
              <View
                style={{
                  ...styles.bankWrapper,
                  backgroundColor: transaction.iconColor,
                }}
              >
                <Image source={transaction.logo} style={styles.bankIcon} />
              </View>
              <View style={styles.transactionTextWrapper}>
                <Text style={styles.transactionPurpose}>
                  {transaction.purpose}
                </Text>
                <Text style={styles.transactionDate}>{transaction.time}</Text>
              </View>
            </View>
            <View style={styles.transactionAmount}>
              <Text style={styles.time}>{transaction.amount}.00</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
