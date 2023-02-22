import { useCounterValue } from "../Provider/GameProvider";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import {Card, List} from "react-native-paper";

export function SecondTab() {
  
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title title="Cake saumon"/>
          <Card.Cover style={{margin:12}} source={require('../img/cake.png')} />
          <Card.Content>
            <List.Section>
              <List.Accordion
                title="Ingrédients"
                left={props => <List.Icon {...props} icon={require('../img/iconIngredient.png')} />}>
                <Text>
                  - 3 oeufs {"\n"}
                  - 150g de farine {"\n"}
                  - 1 sachet de levure chimique {"\n"}
                  - 10cl d'huile {"\n"}
                  - 12cl de crème liquide {"\n"}
                  - 100g de gruyère râpé {"\n"}
                  - 200g de saumon fumé {"\n"}
                  - 10 brins de ciboulette {"\n"}
                  - 1 pincée de sel {"\n"}
                  - 2 pincées de poivre
                </Text>
              </List.Accordion>
              <List.Accordion
                title="Etapes"
                left={props => <List.Icon {...props} icon={require('../img/iconEtapes.png')} />}>
                <Text>
                  1. Dans un saladier, battez les oeufs. Ajoutez la farine, la levure, le sel et le poivre.{"\n"}
                  2. Incorporez l'huile puis la crème (tièdie). Mélangez bien. Ajoutez le gruyère.{"\n"}
                  3. Coupez le saumon en lamelles. Ciselez les brins de ciboulette et mettez le tout dans la pâte. Mélangez.
                </Text>
              </List.Accordion>
            </List.Section>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    minWidth:314,
    maxWidth:343,
    marginTop:25,
  }
});
