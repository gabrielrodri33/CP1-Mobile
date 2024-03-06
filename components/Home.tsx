import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View id='2'>
        <Image
            source={require('../img/produto (1).png')}
        ></Image>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque maiores, fugit accusamus illum pariatur nemo reiciendis sapiente! Laboriosam nisi asperiores enim atque repudiandae debitis iste minima veniam a deleniti.</Text>
      <Text>R$2.000,00</Text>
    </View>
  )
}