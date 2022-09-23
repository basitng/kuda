import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../Global/style";

export default function AccountBalanceCard() {
  return (
    <React.Fragment>
      {/* Account Balance */}
      <View style={styles.accountContainer}>
        <View style={styles.accountCard}>
          <View style={styles.accountText}>
            <Text style={styles.accountTitle}>Account Balance</Text>
            <Text style={styles.accountBalance}>₦65,000</Text>
          </View>
          <View style={styles.tabs}>
            <TouchableOpacity>
              <View style={styles.tabBox}>
                <View style={styles.tab} />
                <Text style={{ ...styles.tabText, opacity: 1 }}>Spend</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.tabBox}>
                <View style={styles.tab} />
                <Text style={styles.tabText}>Save</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.tabBox}>
                <View style={styles.tab} />
                <Text style={styles.tabText}>Borrow</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}
