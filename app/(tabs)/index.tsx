import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from "@/components/header";
import { Ionicons } from '@expo/vector-icons';
import useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";

export default function user() {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        {/* ICONE */}
        <View> 
         <Ionicons style={styles.container} name='person' size={100} color={"#ffffff"}/>
        </View>

        {/* Texto */}
        <Text style={styles.Text}>Usuário</Text>

        {/* Senha */}
        <label style={homeStyles.title} htmlFor="senha">Digite sua senha: </label>
        <input style={homeStyles.input} required id="senha" placeholder="Ex: 1234"  type="password" />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#ffffff"
  }, 
  main: {
    width: '50%',
    height: '50%',
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    borderRadius: 15,
    padding: 80,
    backgroundColor: '#2b3b80'
  },
  Text: {
    textAlign: "center",
    padding: 50,
    fontSize: 35,
    color: "#ffffff"
  },

})