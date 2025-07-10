import { Text, StyleSheet } from "react-native";

interface TimerProps{
    totalSeconds:number
}

export const Timer:React.FC<TimerProps> = ({totalSeconds}) =>{

    const date = new Date(totalSeconds*1000);
    const options = { minute:'2-digit', second:'2-digit'} as const;



    return ( 
        <>
            <Text
            style={styles.timerText}
            >
                {date.toLocaleTimeString('pt-BR', options)}
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    timerText:{
        color:'#FFF', 
        fontSize:42,
        fontWeight:'500',
        margin:10,
    },
})
