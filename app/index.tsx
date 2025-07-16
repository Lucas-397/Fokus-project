import { Image, View, Text, StyleSheet } from "react-native";
import { ActionButton } from "@/Components/actionButton";
import { router } from "expo-router";

export default function Index(){
    return(
        <View style={styles.container}>
            <Image 
                style={styles.logo} 
                source={require('../assets/Images/Fokus -  logo-02 1.png')}
            />
            <View>
                <Text
                style={styles.title}>
                    Otimize sua produtividade,{'\n'}
                    <Text style={styles.titleEmphasis}>mergulhe no que importa</Text>
                </Text>
            </View>

            <Image source={require('../assets/Images/Imagem tela inicial.png')}/>

            <ActionButton 
                text={"Quero iniciar!"} 
                onPress={()=> router.replace('/pomodoro')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#021123',
        alignItems:'center',
        gap:'45px',
    },
    logo:{
        marginTop:50
    },
    title:{
        maxWidth:300,
        color:'#FFF',
        fontSize:26,
        textAlign:'center',
    },
    titleEmphasis:{
        fontWeight:'bold',
    },
    image:{
    width: '100%',
    height: '100%',
    boxSizing:'border-box',
    },
})