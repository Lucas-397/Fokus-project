import TimerSelectButton from "@/Components/timerSelectButton";
import { useState } from "react";
import { Text, View, StyleSheet,Image, Pressable } from "react-native";

export default function Index() {
  
  const timerOptions = [
    {
      id: 1,
      timer: 25,
      title:'Foco'
    },
    {
      id: 2,
      timer: 5,
      title:'Pausa Curta'
    },
    {
      id: 3,
      timer: 15,
      title:'Pausa Longa'
    },
  ]
  const [currentTimer, setCurrentTimer] = useState(timerOptions[0]);
  const [timeRuning, setTimeRuning] = useState(false);

  function changeTimerTOption(idTimer:number){
    setCurrentTimer(timerOptions[idTimer-1]);
    setTimeRuning(false);
  }

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.imageContainer}
      >
      <Image 
      source={require('../assets/Imagens/Imagem foco.png')}
      style={styles.image}
      />
      </View>

      <View
        style={styles.modalContainer}
      >
        <View
          style={{display: 'flex', flexDirection:'row', gap:'10px'}}
        >
          {timerOptions.map((timer)=>{
            return (
              <>
                <TimerSelectButton
                  id={timer.id}
                  title={timer.title}
                  onPress={() => changeTimerTOption(timer.id)}
                  currentTimer={currentTimer.id === timer.id}
                />
              </>
            )
          })}
        </View>
        <View>
          <Text
            style={styles.timerText}
          >
            {currentTimer.timer}
          </Text>
        </View>
        <View>
          <Pressable
            style={styles.actionButton}
            onPress={() => console.log('pressed')} 
          >
            <Text
              style={styles.actionButtonText}
            >
              {timeRuning? 'Pausar':'Continuar'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#021123',
    alignItems:'center',
    justifyContent:'center',
    gap:'15px',
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
  image:{
    width: '100%',
    height: '100%',
    boxSizing:'border-box',
  },
  modalContainer:{
    borderColor: '#144480',
    borderWidth:2,
    borderRadius:'25px',
    padding: 10,
    alignItems:'center',
    boxSizing:'border-box',
    backgroundColor:'#14448080',
  },
  timerText:{
    color:'#FFF', 
    fontSize:42,
    fontWeight:'500',
    margin:10,
  },
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

})