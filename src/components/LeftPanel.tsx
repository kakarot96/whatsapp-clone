import React, { useEffect, useState } from 'react'
import { Box } from '@material-ui/core'
import LeftHeader from './LeftHeader'
import SearchBand from './SearchBand'
import ChatList from './ChatList'
import { Colors } from '../constants'
import db from '../firebase'

function LeftPanel() {
    const [chatRooms,setChatRooms]:any = useState()
    useEffect(() => {
        db.collection('chatrooms').onSnapshot((snapshot)=>{
            let chatRooms=snapshot.docs.map((doc)=>{
                return {id: doc.id,data:doc.data()}
            })
            setChatRooms(chatRooms);
        })      
    }, [])
    return (
        <Box flex={0.3} display='flex' flexDirection='column' borderRight={`1px solid ${Colors.DIVIDER}`}>
            <LeftHeader/>
            <SearchBand/>
            <ChatList chatRooms={chatRooms}/>
        </Box>
    )
}

export default LeftPanel
