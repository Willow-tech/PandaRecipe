import * as React from 'react';
import { useEffect, useReducer, useRef, useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList, ScrollView } from "react-native";
import { Button } from "../Component/Button";
import { useCounterSetter, useCounterValue } from "../Provider/GameProvider";
import {Card, List, MD3Colors} from "react-native-paper";
import { useNavigation } from '@react-navigation/native'
// import Navigator from './AppContainer'


export function HomePage() {

  
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Card style={styles.card}>
            <Card.Title title="Gâteau au chocolat magique"/>
            <Card.Content>
              <Text>Difficultés : facile</Text>
            </Card.Content> 
            <Card.Cover style={{margin:12}} source={require('../img/gateauMagique.png')} />
            <Card.Content>
              <Button title="En savoir plus" />
              <List.Section>
                <List.Accordion
                  title="Ingrédients"
                  left={props => <List.Icon {...props} icon={require('../img/iconIngredient.png')} />}>
                  <Text>
                    - 4 oeufs {"\n"}
                    - 125g de farine {"\n"}
                    - 125g de sucre en poudre {"\n"}
                    - 1 gousse de vanille {"\n"}
                    - 1c à soupe de cacao en poudre {"\n"}
                    - 125g de beurre {"\n"}
                    - 50cl de lait {"\n"}
                    - 1 pincée de sel
                  </Text>
                </List.Accordion>
                <List.Accordion
                  title="Etapes"
                  left={props => <List.Icon {...props} icon={require('../img/iconEtapes.png')} />}>
                  <Text>
                    1.Cassez les oeufs en séparant les blancs des jaunes,  puis fouettez les jaunes avec le sucre et les graines de la gousse de vanille. {"\n"}
                    2.Faites fondre le beurre coupé en morceaux dans un bol au four à micro-ondes, et ajoutez-le à la préparation précédente avec 1 cuillère à soupe d'eau. {"\n"}
                    3.Ajoutez alors la farine et le cacao en les tamisant, mélangez avec une spatule, puis versez progressivement le lait à peine tiédi : vous obtenez une texture de pâte à crêpes. {"\n"}
                    4.Préchauffez le four à 160°C (th. 5-6). {"\n"}
                    5.Battez les blancs d'oeufs en neige bien ferme avec le sel. {"\n"}
                    6.Puis incorporez-les à la pâte sans trop les casser : des petits morceaux peuvent flotter en surface. {"\n"}
                    7.Versez dans un moule à gâteau beurré et fariné et enfournez pour 1 heure. Laissez ensuite refroidir une nuit au frais avant de déguster.
                  </Text>
                </List.Accordion>
              </List.Section>
            </Card.Content>
          </Card>
          <Card style={styles.card}>
            <Card.Title title="Crumble aux pommes"/>
            <Card.Content>
              <Text>Difficultés : facile</Text>
            </Card.Content> 
            <Card.Cover style={{margin:12}} source={require('../img/crumbleP.png')} />
            <Card.Content>
              <List.Section>
                <List.Accordion
                  title="Ingrédients"
                  left={props => <List.Icon {...props} icon={require('../img/iconIngredient.png')} />}>
                  <Text>
                    - 150g de farine {"\n"}
                    - 250g de sucre semoule {"\n"}
                    - 1kg de pomme {"\n"}
                    - 1c.à.c rase de canelle en poudre {"\n"}
                    - 75g de beurre + une noisette pour beurrer le plat {"\n"}
                    - 1 boule de glace vanille
                  </Text>
                </List.Accordion>
                <List.Accordion
                  title="Etapes"
                  left={props => <List.Icon {...props} icon={require('../img/iconEtapes.png')} />}>
                  <Text>
                    1.Préchauffer votre four à thermostat 8. {"\n"}
                    2.Eplucher, épépiner et couper les pommes en gros morceaux. Les faire réduire à feu fort 2 mn avec une cuillerée à soupe d'eau puis maintenir la cuisson à feu doux pendant 7 à 8 mn.{"\n"}
                    3.Ecraser les derniers gros morceaux de pommes à la fourchette. Mélanger les pommes avec 125 g de sucre et 1/2 cuillère à café de cannelle. Verser ce mélange dans un plat à gratin beurré.{"\n"}
                    4.Travailler énergiquement le beurre. Incorporer le reste du sucre et de le cannelle, ainsi que les 150 g de farine, puis travailler le tout avec les doigts afin d'obtenir un sable grossier.{"\n"}
                    5.Répartir sur la compote et cuire au four 25 mn (grille centrale).
                  </Text>
                </List.Accordion>
              </List.Section>
            </Card.Content>
          </Card>
          <View style={{flexDirection:'row'}}>
            <Card style={styles.card2}>
              <Card.Title title="Gateau"/>
              <Card.Content>
                <Text>Difficultés</Text>
              </Card.Content> 
              <Card.Cover style={{margin:8, marginBottom:0, maxHeight:86, maxWidth:146}} source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Content>
                <List.Section>
                  <List.Subheader>Ingrédients</List.Subheader>
                  <Text>
                    - Ingrédients 1
                  </Text>
                </List.Section>
                <Text variant="bodyMedium">Etapes... </Text>
              </Card.Content>
            </Card>
            <Card style={styles.card2}>
              <Card.Title title="Gateau"/>
              <Card.Content>
                <Text>Difficultés</Text>
              </Card.Content> 
              <Card.Cover style={{margin:8, marginBottom:0, maxHeight:86, maxWidth:146}} source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Content>
                <List.Section>
                  <List.Subheader>Ingrédients</List.Subheader>
                  <Text>
                    - Ingrédients 1
                  </Text>
                </List.Section>
                <Text variant="bodyMedium">Etapes... </Text>
              </Card.Content>
            </Card>
          </View>
        </View>
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
  },
  card2: {
    minWidth:114,
    maxWidth:184,
    minHeight:214,
    maxHeight:284,
    margin:8,
    marginTop:25,
  }
});
