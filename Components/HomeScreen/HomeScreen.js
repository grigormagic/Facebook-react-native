import React, {useContext} from 'react';
<<<<<<< HEAD
import { Text, View, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
=======
import { Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
>>>>>>> d85d50d43f95944433ec38c0bd16b096c901f439
import { AntDesign } from '@expo/vector-icons';

import {useCollection} from "react-firebase-hooks/firestore";
import {Context} from "../../App";
<<<<<<< HEAD
import {useAuthState} from "react-firebase-hooks/auth";
=======
>>>>>>> d85d50d43f95944433ec38c0bd16b096c901f439

import PostEdit from "../PostEdit/PostEdit";
import Loader from "../Loader/Loader";
import Comments from '../Comments/Comments'
<<<<<<< HEAD
=======
import {useAuthState} from "react-firebase-hooks/auth";
>>>>>>> d85d50d43f95944433ec38c0bd16b096c901f439

export default function HomeScreen() {
    const {firestore, auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const [messages,loading] = useCollection(
        firestore.collection('posts').orderBy('createAt')
    )
    const Liking = (m)=>{
        if(!m.data().likeSendUsersId.includes(user.uid)){
            firestore.doc(m.ref.path).update({'likeCount':m.data().likeCount+1})
            firestore.doc(m.ref.path).update({'likeSendUsersId':[...m.data().likeSendUsersId,user.uid]})
        }
        else{
            firestore.doc(m.ref.path).update({'likeCount':m.data().likeCount-1})
            let a =m.data().likeSendUsersId;
            a.pop(a.indexOf(user.uid))
            firestore.doc(m.ref.path).update({'likeSendUsersId':[...a]})
        }
    }
    if(loading){
        return <Loader />
    }
    return (
<<<<<<< HEAD
        <ScrollView>
            <PostEdit/>
                {
                    messages.docs.map(message =>
                    <View style={{borderSize:"30px",margin:20}} key = {message.id}>
                        <View style = {style.view}></View>
                        <View style = {style.info}>
                            <Image style = {style.img}source={{
=======
        <ScrollView >
            <PostEdit />
                {
                    messages.docs.map(message =>
                    <View style={{borderSize:"30px",margin:20}} key = {message.id}>

                        <View>
                            <Image source={{
>>>>>>> d85d50d43f95944433ec38c0bd16b096c901f439
                                    uri: message.data().photoURL,
                                    width: 60,
                                    height: 60,
                                    resizeMode:"contain"
                            }} />
<<<<<<< HEAD
                            <Text style = {style.textDesign}>{message.data().displayName}</Text>
                        </View>
                        <View >
                            <Text style = {{margin:10}}>{message.data().text}</Text>
                            {(message.data().img)? <Image style  = {{marginTop: 10, marginBottom: 10}}source={{
=======
                            <Text>{message.data().displayName}</Text>
                        </View>
                        <View>
                            <Text>{message.data().text}</Text>
                            {(message.data().img)? <Image source={{
>>>>>>> d85d50d43f95944433ec38c0bd16b096c901f439
                                uri: message.data().img,
                                width: 350,
                                height: 350,
                                defaultSource : 'http://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg',
                                resizeMode:"contain"
                            }} /> : <></>}
                        </View>
                        <View>
<<<<<<< HEAD
                            <View style = {style.comments}>
                                <View style = {style.like}> 
                                <Text>Likes {message.data().likeCount}</Text>
                                <TouchableOpacity onPress={()=> Liking(message)} ><AntDesign  name={(message.data().likeSendUsersId.includes(user.uid))?'like1': 'like2'} size={24} color="black" /></TouchableOpacity>
                                </View>
                                 <View>
                                    <Text>Comment {message.data().commentCount}</Text>
                                    
                                </View>
                                
                            </View>
                            <View>
                                    <Comments message ={message} />
                                </View>
=======
                            <View>
                                <Text>Likes {message.data().likeCount}</Text>
                                <Text>Comment {message.data().commentCount}</Text>
                            </View>
                            <View >
                                <TouchableOpacity onPress={()=> Liking(message)} ><AntDesign  name={(message.data().likeSendUsersId.includes(user.uid))?'like1': 'like2'} size={24} color="black" /></TouchableOpacity>
                                <Comments message ={message} />

                            </View>
>>>>>>> d85d50d43f95944433ec38c0bd16b096c901f439
                        </View>
                    </View>
                )}
        </ScrollView>
    );
}

const style = StyleSheet.create({
    info: {
        width:'35%',
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    img: {
        borderRadius:50,
        //alignItems:'flex-start',
    },
    view: {
        width:'100%',
        height:4,
        backgroundColor:'black',
        marginBottom:10,
    },
    textDesign: {
        fontSize:18,
    },
    like: {
        width: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    comments: {
        width: "100%",
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
});