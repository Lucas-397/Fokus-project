import { View, Button, StyleSheet } from "react-native";

interface timerSelectButtonProps{
    title:string,
    id:number,
    onPress: () => void
}

const timerSelectButton:React.FC<timerSelectButtonProps> = ({title, id, onPress}) =>{
    return(
        <View
            style={styles.buttonContainer}
        >
            <Button 
                key={id}
                onPress={onPress}
                title={title}
                
            />
        </View>
    ) 
}

const styles = StyleSheet.create({
    buttonContainer:{
        color:'#FFF',
        backgroundColor:'#144480',
        borderWidth: 1,
        borderRadius: 15,
    }
})

export default timerSelectButton;