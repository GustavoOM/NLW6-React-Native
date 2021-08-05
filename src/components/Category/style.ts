import {StyleSheet} from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container:{
        height: 104,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8,
    },
    content:{
        width: 100,
        height: 100,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    checked:{
        width:12,
        height: 12,
        backgroundColor: theme.colors.primary,
        alignSelf: "flex-end",
        marginRight: 7,
        borderColor: theme.colors.secondary40,
        borderWidth: 2,
        borderRadius: 3,
    },
    unchecked:{
        width:12,
        height: 12,
        backgroundColor: theme.colors.secondary90,
        alignSelf: "flex-end",
        marginRight: 7,
        borderColor: theme.colors.secondary40,
        borderWidth: 2,
        borderRadius: 3,
    },
    title:{
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 15,
    },

})