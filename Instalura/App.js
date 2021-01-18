/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react';
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";

const informacoes = [
  {usuario: "Hugo"},
  {usuario: "Marina"},
  {usuario: "Ricardo"},
]

const largura = Dimensions.get("screen").width;
const App = () => {
  return (
    <ScrollView>
      {informacoes.map(foto =>
        <Fragment>
          <Text>{foto.usuario}</Text>
          <Image
            souce={require("./res/img/alura.jpg")}
            style={estilo.imagem}
          />
        </Fragment>
      )}
    </ScrollView>
  )
};

const estilo = StyleSheet.creat({
  imagem: {
    widht: largura,
    height: largura
  }
})

export default App;
