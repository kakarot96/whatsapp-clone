import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import RightHeader from './RightHeader'
import ChatWindow from './ChatWindow'
import ChatFooter from './ChatFooter'
import { useParams } from 'react-router-dom'
import db from '../firebase'
import firebase from 'firebase'
import { useRecoilState } from 'recoil'
import { userState } from '../state'

function RightPanel(props:any) {
    const params:any = useParams();
    const [chatRoomName,setChatRoomName]:any = useState();
    const [messages,setMessages]:any = useState();
    const [user,setUser]:any = useRecoilState(userState);
    useEffect(() => {
        if(params){
            db.collection('chatrooms').doc(`${params.id}`).onSnapshot((snapshot:any)=>{
                setChatRoomName(snapshot.data().name);
            })
            db.collection('chatrooms').doc(`${params.id}`).collection('messages').orderBy('timestamp','asc')
            .onSnapshot((snapshot:any)=>{
                setMessages(snapshot.docs.map((doc:any)=>{
                    return doc.data()
                }))
            })
        }
    }, [params])
    const sendMessage = (message:string)=>{
        if(user){
            let userData = JSON.parse(user)
            db.collection('chatrooms').doc(`${params.id}`).collection('messages').add({
                message:message,
                name: userData.displayName,
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            })
        }
    }
    return (
        <Box flex={props.isMobile?1:0.7} display='flex' flexDirection='column'>
            <RightHeader chatRoomName={chatRoomName}/>
            <ChatWindow userName={JSON.parse(user).displayName} messages={messages}/>
            <ChatFooter sendMessage={sendMessage}/>
        </Box>
    )
}

export default RightPanel
