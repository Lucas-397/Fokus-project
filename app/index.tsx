import {Timer} from "@/Components/timer";
import TimerSelectButton from "@/Components/timerSelectButton";
import React, { useRef, useState } from "react";
import { Text, View, StyleSheet,Image, Pressable } from "react-native";


export default function Index() {

  const apllicationModes = [
    {
      id: 0,
      timer: 25*60,
      title:'Foco',
    },
    {
      id: 1,
      timer: 5*60,
      title:'Pausa Curta',
    },
    {
      id: 2,
      timer: 15*60,
      title:'Pausa Longa',
    },
  ]
  const [timeRuning, setTimeRuning] = useState(false);
  const [currentTimerMode, setCurrentTimerMode] = useState(apllicationModes[0]);
  const [seconds, setSeconds] = useState(apllicationModes[0].timer);
  const timerRef = useRef(null);

  async function changeTimerOption(idTimer:number){
    const newTimerMode = apllicationModes[idTimer]
    await setCurrentTimerMode(newTimerMode);
    setSeconds(newTimerMode.timer);
    setTimeRuning(false);
    timerRef.current = null;
  }

  const toggleTimer = () => {
    console.log('hello');
    if(timerRef.current){//caso o timerRef seja diferente de null
      pauseTimer()
      return 
    }
    setTimeRuning(true);
    const id:any = setInterval(()=>{
      setSeconds((oldState) =>{
        if(oldState === 0){
          pauseTimer();
          return currentTimerMode.timer
        }
        return oldState - 1;
      })
    }, 1000)

    timerRef.current = id;
  }

  const pauseTimer = () =>{
    if(timerRef.current){
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimeRuning(false);
    }
  }

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.imageContainer}
      >
      {
        <Image
          source={currentTimerMode.id === 0? require('./img-foco.png'): currentTimerMode.id === 1? require('./img-descanso-longo.png'):require('./img-descanso-curto.png')}
          style={styles.image}
        />
      }
      </View>

      <View
        style={styles.fokusContainer}
      >
        <View
          style={{display: 'flex', flexDirection:'row', gap:'10px'}}
        >
          {apllicationModes.map((timer)=>{
            return (
              <>
                <TimerSelectButton
                  key={timer.id}
                  title={timer.title}
                  onPress={() => changeTimerOption(timer.id)}
                  currentTimer={currentTimerMode.id === timer.id}
                />
              </>
            )
          })}
        </View>

        <Timer
          totalSeconds={seconds}
        />

        <View>
          <Pressable
            style={styles.actionButton}
            onPress={toggleTimer} 
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
  fokusContainer:{
    borderColor: '#144480',
    borderWidth:2,
    borderRadius:'25px',
    padding: 10,
    alignItems:'center',
    boxSizing:'border-box',
    backgroundColor:'#14448080',
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