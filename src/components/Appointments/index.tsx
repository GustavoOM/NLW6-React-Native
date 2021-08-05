import React from 'react'
import {RectButton, RectButtonProps} from "react-native-gesture-handler"
import { View, Text, Image } from 'react-native'

import {styles} from "./style"
import { GuildIcon } from '../GuildIcon'
import { categories } from '../../utils/categories'
import PlayerSvg from "../../assets/player.svg"
import CalendarSvg from "../../assets/calendar.svg"
import { theme } from '../../global/styles/theme'

export interface IGuildProps{
  id: string
  name: string
  icon: string
  owner: boolean
}

export interface IAppointments{
  id: string
  guild: IGuildProps
  category: string
  date: string
  description: string
}

interface Props extends RectButtonProps{
    data: IAppointments
}

export function Appointments({data, ...rest} : Props){
  const [category] = categories.filter(item => item.id === data.category)
  const {owner,name} = data.guild
  const {primary, on} = theme.colors
  return(
    <RectButton {...rest}> 
      <View style = {styles.container}>
        <GuildIcon urlIcon={data.guild.icon}/>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>
            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg/>
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? primary : on}/>
              <Text style={[styles.player, {color: owner ? primary : on}]} >{owner ? "Anfitrião" : "Visitante"}</Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}