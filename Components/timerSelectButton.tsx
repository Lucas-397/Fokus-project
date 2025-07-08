import { Text, StyleSheet, Pressable } from "react-native";

interface timerSelectButtonProps{
    title:string;
    id:number;
    onPress: () => void;
    currentTimer: boolean;
}

const timerSelectButton:React.FC<timerSelectButtonProps> = ({title, id, onPress, currentTimer}) =>{
    return(
        <>
            <Pressable
                style={currentTimer? styles.currentPressable:styles.pressable}
                key={id}
                onPress={onPress}
            >
                <Text
                style={styles.buttonText}
                >
                    {title}
                </Text>
            </Pressable>
        </>
    ) 
}

const styles = StyleSheet.create({
    pressable:{
        borderRadius: 15,
        padding: 10,
    },
    currentPressable:{
        borderRadius: 15,
        backgroundColor:'#144480',
        padding: 10,
    },
    buttonText:{
        color:'#FFFF',
        fontSize:16,
        fontWeight:'500',
    },
})

export default timerSelectButton;