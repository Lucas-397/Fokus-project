import { StyleSheet, View, Pressable, Text } from "react-native";

interface ActionButtonProps{
    text: string;
    onPress: () => void;

}

export const ActionButton:React.FC<ActionButtonProps> = ({text, onPress}) => {
    return (
        <View>
            <Pressable
            style={styles.actionButton}
            onPress={onPress} 
            >
                <Text
                    style={styles.actionButtonText}
                >
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    actionButton:{
    backgroundColor:'#B872FF',
    color:'#041832',
    width: 265,
    alignItems:'center',
    padding:5,
    borderRadius:'30px'
    },
    actionButtonText:{
    fontSize:20,
    fontWeight:'500',
    }
});