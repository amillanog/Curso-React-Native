/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.SafeAreaView}>

      <View style={styles.mainViewAvatar}>
        <View style={styles.viewtextContentAvatar}>
          <Image style={styles.avatar}
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
          />
          <Text style={styles.textName}>
              Alexander Millano
          </Text>
        </View>
        <View style={styles.viewtextDatos}>  
          <Text style={styles.textContent}>
            Edad: 37
          </Text>
          <Text style={styles.textContent}>
            Nacionalidad: Venezolano
          </Text>          
        </View>
      
      </View>

      <View style={styles.mainView2}>
        <Text style={styles.textContent}>
          Profesión - Diseñador front End
        </Text>      
      </View>

      <View style={styles.mainView3}>
       <Text style={styles.textTilte}>
         Descripción:
        </Text>
      <View style={styles.viewtextContent3}>  
          <Text style={styles.textContent1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam ex dignissimos optio, impedit natus illum architecto id sit quasi aliquid totam quam aliquam assumenda facere in porro vero earum?
          </Text>
          <Text style={styles.textContent2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quibusdam ex dignissimos optio, impedit natus illum architecto id sit quasi aliquid totam quam aliquam assumenda facere in porro vero earum?
          </Text>
      </View>
      
      </View>
       
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

  SafeAreaView: {   
    flex:1, 
    backgroundColor:'#F2F2F2',
    padding:20,
  },
  mainViewAvatar:{
    backgroundColor:'#97BF41',    
    padding:20,
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:5, 
    borderRadius: 5,
    
  },
  viewtextDatos:{
    flex:1, 
  },
  mainView2:{
    backgroundColor:'#27538C',    
    padding:20,    
    marginBottom:5,   
    borderRadius: 5,
  },
  mainView3:{
    backgroundColor:'#3671BF',    
    padding:20,
    marginBottom:20, 
    borderRadius: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius:100,
  },
  textName:{
    color:'#F2F2F2',
    fontWeight:'bold',
    fontSize:20,
  },
  viewtextContentAvatar:{    
    justifyContent:'center',    
    alignItems:'center',
    marginRight:20,
  },
 
  viewtextContent:{
    flex:1, 
  },
  
  textTilte:{    
    color:'#F2F2F2',  
    fontSize:20,
    fontWeight:'bold'
  },
  textContent:{    
    color:'#F2F2F2',  
    fontSize:20,
  },
  viewtextContent3:{
    flexDirection:'row',
  },
  textContent1:{    
    color:'#F2F2F2',  
    fontSize:20,
    flex:1,
    marginRight:20,
    textAlign:"justify",
    
  },
  textContent2:{    
    color:'#F2F2F2',  
    fontSize:20,
    flex:1,
    textAlign:"justify",
  },
});


export default App;
