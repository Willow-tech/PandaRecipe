// import * as React from 'react';
// import { useEffect, useReducer, useRef, useState } from "react";
// import { StyleSheet, Text, View, TextInput, FlatList, ScrollView } from "react-native";
// import { Button } from "../Component/Button";
// import { useCounterSetter, useCounterValue } from "../Provider/GameProvider";

// export function Description() {
      
//         return (
//             <View style={styles.container}>
//       <ScrollView>
//         <View>
//           <Card style={styles.card}>
//             <Card.Title title="Gâteau au chocolat magique"/>
//             <Card.Content>
//               <Text>Difficultés : facile</Text>
//             </Card.Content> 
//             <Card.Cover style={{margin:12}} source={require('../img/gateauMagique.png')} />
//             <Card.Content>
//             <Button title="En savoir plus" onPress={onPress}/>
//               <List.Section>
//               <List.Accordion
//                 title="Ingrédients"
//                 left={props => <List.Icon {...props} icon={require('../img/iconIngredient.png')} />}>
//                 <FlatList
//                   data={[
//                     {key: "- 4 oeufs"},
//                     {key: "- 125g de farine"},
//                     {key: "- 125g de sucre en poudre"},
//                     {key: "- 1 gousse de vanille"},
//                     {key: "- 1c à soupe de cacao en poudre"},
//                     {key: "- 125g de beurre"},
//                     {key: "- 50cl de lait"},
//                     {key: "- 1 pincée de sel"},
//                   ]}
//                   renderItem={({item}) => <Text>{item.key}</Text>}
//                 />
//               </List.Accordion>
//               <List.Accordion
//                 title="Etapes"
//                 left={props => <List.Icon {...props} icon={require('../img/iconEtapes.png')} />}>
//                 <FlatList 
//                   data={[
//                     {key: "1.Cassez les oeufs en séparant les blancs des jaunes,  puis fouettez les jaunes avec le sucre et les graines de la gousse de vanille."},
//                     {key: "2.Faites fondre le beurre coupé en morceaux dans un bol au four à micro-ondes, et ajoutez-le à la préparation précédente avec 1 cuillère à soupe d'eau."},
//                     {key: "3.Ajoutez alors la farine et le cacao en les tamisant, mélangez avec une spatule, puis versez progressivement le lait à peine tiédi : vous obtenez une texture de pâte à crêpes."},
//                     {key: "4.Préchauffez le four à 160°C (th. 5-6)."},
//                     {key: "5.Battez les blancs d'oeufs en neige bien ferme avec le sel."},
//                     {key: "6.Puis incorporez-les à la pâte sans trop les casser : des petits morceaux peuvent flotter en surface."},
//                     {key: "7.Versez dans un moule à gâteau beurré et fariné et enfournez pour 1 heure. Laissez ensuite refroidir une nuit au frais avant de déguster."},
//                   ]}
//                   renderItem={({item}) => <Text>{item.key}</Text>}
//                 />
//               </List.Accordion>
//               </List.Section>
//             </Card.Content>
//           </Card>
//         </View>
//       </ScrollView>
//     </View>
//   )
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   card: {
//     minWidth:314,
//     maxWidth:343,
//     marginTop:25,
//   },
//   card2: {
//     minWidth:114,
//     maxWidth:184,
//     minHeight:214,
//     maxHeight:284,
//     margin:8,
//     marginTop:25,
//   }
// });
