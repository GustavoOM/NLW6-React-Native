import React from 'react'
import { Image } from 'react-native'

import {styles} from "./style"

interface Props{
  urlIcon: string
}

export function GuildIcon({urlIcon}:Props){
  return(
    <Image style={styles.image} resizeMode="cover" source={{uri:urlIcon}}/>
  )
}