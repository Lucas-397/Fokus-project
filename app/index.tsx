import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { styles } from "./pomodoro";

export default function index(){
    return(
        <View>
            <Pressable style={styles.actionButton}>
                <Link href={{pathname:'/pomodoro'}} style={styles.actionButtonText}>
                    Quero iniciar!
                </Link>
            </Pressable>
        </View>
    )
}