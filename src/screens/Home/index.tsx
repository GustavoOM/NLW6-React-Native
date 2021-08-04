import React from "react"

import {View} from "react-native"
import { ButtonAdd } from "../../ButtonAdd"
import { CategorySelect } from "../../components/CategorySelect"
import { Profile } from "../../components/Profile"
import { styles } from "./style"

export function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile></Profile>
                <ButtonAdd/>
            </View>
            <View>
                <CategorySelect/>

            </View>
        </View>
    )
}