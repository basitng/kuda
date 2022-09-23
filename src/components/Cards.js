import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import styles from "../Global/style";
import { Surface } from "react-native-paper";

export default function Cards() {
  return (
    <React.Fragment>
      <Surface style={styles.cardSurface} elevation={2}>
        <TouchableOpacity>
          <View style={styles.validityCard}>
            <View style={styles.icon}>
              <View style={styles.iconWrapper} />
            </View>
            <View style={styles.validityTextWrapper}>
              <Text style={styles.validityTitle}>Increase your...</Text>
              <Text style={styles.validityText}>
                Add a valid ID to increase your transaction limit
              </Text>
            </View>
            <View style={styles.validityAction}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Declined</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
      <Surface style={styles.cardSurface} elevation={2}>
        <TouchableOpacity>
          <View style={styles.validityCard}>
            <View style={styles.icon2}>
              <View style={styles.iconWrapper2} />
            </View>
            <View style={styles.validityTextWrapper2}>
              <Text style={styles.validityTitle2}>Create your @Userna...</Text>
              <Text style={styles.validityText}>
                Receive money from kuda users with your unique username
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Surface>
    </React.Fragment>
  );
}
