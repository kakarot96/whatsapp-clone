import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import RightHeader from './RightHeader'
import ChatWindow from './ChatWindow'
import ChatFooter from './ChatFooter'
import { useParams } from 'react-router-dom'
import db from '../firebase'

function RightPanel() {
    const params:any = useParams();
    const [chatRoomName,setChatRoomName]:any = useState();

    useEffect(() => {
        if(params){
            db.collection('chatrooms').doc(`${params.id}`).onSnapshot((snapshot:any)=>{
                setChatRoomName(snapshot.data().name);
            })
        }
        }, [params])
    return (
        <Box flex={0.7} display='flex' flexDirection='column'>
            <RightHeader chatRoomName={chatRoomName}/>
            <ChatWindow/>
            <ChatFooter/>
        </Box>
    )
}

export default RightPanel
