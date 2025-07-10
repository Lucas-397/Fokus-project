import { Text, StyleSheet, Pressable } from "react-native";

interface timerSelectButtonProps{
    title:string;
    onPress: () => void;
    currentTimer: boolean;
}

const timerTypeButton:React.FC<timerSelectButtonProps> = ({title, onPress, currentTimer}) =>{
    return(
        <>
            <Pressable
                style={currentTimer? styles.currentPressable:styles.pressable}
                disabled={currentTimer}
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

export default timerTypeButton;