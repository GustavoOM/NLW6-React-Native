import React from 'react'
import { ScrollView } from 'react-native'

import {styles} from "./style"
import { categories } from "../../utils/categories"
import { Category } from '../Category'

interface Props{
  categorySelected: string
}

export function CategorySelect({categorySelected}:Props){

  return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingRight: 40}} style={styles.container}>
      {
        categories.map(category => (
          <Category key={category.id} title={category.title} icon={category.icon} checked={category.id === categorySelected}/>
        ))
      }
    </ScrollView>
  )
}