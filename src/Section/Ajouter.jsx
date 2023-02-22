
import { useState, useEffect } from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button, 
  Image,
  View,
  Text,
  placeholder,
  Pressable,
  FlatList
  
} from "react-native";
import Constants from "expo-constants";
import * as SQLite from "expo-sqlite";
import * as ImagePicker from 'expo-image-picker';
import {List} from "react-native-paper";
import { HomePage } from "./HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("db.db");
  return db;
}

const db = openDatabase();



export function Ajouter() {
  const [text, setText] = useState(null);
  const [forceUpdate, forceUpdateId] = useForceUpdate();

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
     setImage(result.assets[0].uri);
    }
  };
  
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists mood (id integer primary key not null, done int, value text, value image);"
      );
    });
  }, []);

  
  return (
    <View style={styles.container}>

      
          <ScrollView style={styles.listArea}> 
          {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, alignItems: 'center', justifyContent: 'center', marginLeft: 100, marginBottom: 15 }} />}    
          <TextInput style={styles.input} 
            placeholder='Titre'
            placeholderTextColor={'black'}
            />    
            <TextInput style={styles.input} 
            placeholder='Ingrédients'
            placeholderTextColor={'black'}
            onSubmitEditing={(value) => setName(value.nativeEvent.text)}
            />     
            <TextInput style={styles.input} 
            placeholder='Etapes'
            placeholderTextColor={'black'}
            />     

            <Pressable style={styles.button} onPress={pickImage} >
            <Text style={{ color: 'black',fontSize: 16,fontWeight: 'bold',textAlign: 'center' }} >Ajouter une photo</Text>
            </Pressable>

             <Pressable style={styles.button}>
             <Text style={{ color: 'black',fontSize: 16,fontWeight: 'bold',textAlign: 'center' }} >Ajouter la recette</Text>
             </Pressable>
             
          </ScrollView>
                <View style={{ flex: -1, alignItems: 'center', justifyContent: 'center' }}> 
    </View>
    </View>
  );
}


function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
}

/**function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
**/
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
    flex: 1,

  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
    color : 'red',
  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 45,
    margin: 16,
    padding: 8,
    color : 'black',
    backgroundColor: '#FDF8FD',
    marginTop : 1
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    paddingTop: 16,
  },
  sectionContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color : 'red',
    marginTop : -10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    height: 40,
    margin: 16,
    padding: 8,
    color : 'black',
    backgroundColor : '#F4CBC6',
    marginTop : 1
  },
  ajoutRecette:{

  }
});
