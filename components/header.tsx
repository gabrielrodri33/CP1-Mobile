import React from "react";
import { ScrollView, View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Header() {
    
    
    return(<ScrollView>
        <View style={styles.header}>
            <Text style={styles.txtG}>Logo</Text>
            <Text style={styles.txtG}>Carrinho</Text>
            <Text style={styles.txtG}>SearchBar</Text>
        </View>
    </ScrollView>
    )
}

const styles =  StyleSheet.create({
    header: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        width: 1000,
        height: 50
    },
    txtG: {
        fontSize: 20
    },
    logo: {
        width: 50,
        height: 50,
        
    },
    searchBar: {

    }
    
})