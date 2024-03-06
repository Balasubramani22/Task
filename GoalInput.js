import { View, TextInput, Button, StyleSheet, Modal, Image} from "react-native"
import { useState } from "react"
function GoalInput (props){
    const [goalText, setGoalText] =useState("")
    function goalInputHandler(text){
        setGoalText(text)
      }

      function addGoalHandler(){
        props.onAddGoal(goalText)
        props.onClose();
      }
    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image  style={styles.image} source={require('./assets/Goal.png')} />
        <TextInput 
        onChangeText={goalInputHandler}
        style={styles.textInput} placeholder='Enter Your Goals' />
    <View style={styles.buttonContainer}>
    <View style={styles.button}>
    <Button color={"#5e0acc"}
        onPress={addGoalHandler}
        title='Add Goals'/>
        </View>
        <View style={styles.button}>
        <Button color={"#f31282"} title="Cancel" onPress={props.onClose}/>
        </View>
    </View>
        </View>
        </Modal>
    )
}

const styles =StyleSheet.create({
    inputContainer:{
        borderBottomWidth:1,
        paddingBottom:24,
        borderBottomColor:'#cccccc',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        padding:16,
        backgroundColor:'#1A0037',
      },
      textInput :{
        borderWidth:1,
        borderColor:'#cccccc',
        width:'100%',
        padding:8,
        borderRadius:9,
        backgroundColor:'#e4d0ff'
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:15,
        columnGap:18,
      },
      button:{
        width:100,
      },
      image:{
        width:100,
        height:100,
        margin:20,
      }
})

module.exports = GoalInput