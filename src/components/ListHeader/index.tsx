import React from 'react'
import { Text, View } from 'react-native'

import {styles} from "./style"

interface Props{
  title: string
  subtitle: string
}

export function ListHeader({subtitle,title}:Props){

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}