import React, {useState} from "react"

import {FlatList, View} from "react-native"
import { Appointments } from "../../components/Appointments"
import { ButtonAdd } from "../../components/ButtonAdd"
import { CategorySelect } from "../../components/CategorySelect"
import { ListDivider } from "../../components/ListDivider"
import { ListHeader } from "../../components/ListHeader"
import { Profile } from "../../components/Profile"
import { styles } from "./style"

export function Home(){
    const [category, setCategory] = useState("");

    const appointments = [
        {
            id: "1",
            guild: {
                id: "1",
                name: "Lendários",
                icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png",
                owner: true,
            },
            category: "1",
            date: "22/06 às 20:40h",
            description: "É hoje que vamos chegar ao challenger sem perder uma da md10"
        },
        {
            id: "2",
            guild: {
                id: "2",
                name: "Lendários",
                icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png",
                owner: false,
            },
            category: "2",
            date: "22/06 às 20:40h",
            description: "É hoje que vamos chegar ao challenger sem perder uma da md10"
        },
        {
            id: "3",
            guild: {
                id: "1",
                name: "Lendários",
                icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png",
                owner: false,
            },
            category: "2",
            date: "22/06 às 20:40h",
            description: "É hoje que vamos chegar ao challenger sem perder uma da md10"
        },
        {
            id: "4",
            guild: {
                id: "4",
                name: "Lendários",
                icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png",
                owner: true,
            },
            category: "4",
            date: "22/06 às 20:40h",
            description: "É hoje que vamos chegar ao challenger sem perder uma da md10"
        },

    ]

    function handleCategorySelect(categoryId:string){
        categoryId === category ? setCategory("") : setCategory(categoryId)
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Profile></Profile>
                <ButtonAdd/>
            </View>
            <View>
                <CategorySelect categorySelected={category} setCategory={handleCategorySelect}/>
            </View>
            <View style={styles.content}>
                <ListHeader title="Partidas Agendadas" subtitle="Total 4"/>
            </View>
            <FlatList
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                data={appointments}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider/>}
                renderItem={({item}) => (
                    <Appointments data={item}/>
                )}
            />
        </View>
    )
}