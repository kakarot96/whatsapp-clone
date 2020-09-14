import React, { useEffect, useState } from 'react'
import { Box, IconButton, Typography, createStyles, makeStyles, Theme, ButtonBase } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { StyledIconButton } from './LeftHeader';
import { Colors } from '../constants';
import { Link, useParams } from 'react-router-dom';
import db from '../firebase';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatListBox: {
        '&::-webkit-scrollbar':{
            width:'5px !important',
            height:'5px !important'
        },
        '&::-webkit-scrollbar-thumb':{
            backgroundColor: `${Colors.BORDER}`,
            height:'5px !important'
        }
    },
    chatListItemBox: {
        '&:hover':{
            backgroundColor:'#ededed'
        },
        '&:active':{
            backgroundColor:'#ebebeb'
        },
        cursor:'pointer'
    }
  }),
);

function ChatList(props:any) {
    const classes = useStyles();
    return (
        <Box flex={1} overflow='auto' className={classes.chatListBox}>
            {props.chatRooms && props.chatRooms.map((chatRoom:any,index:number)=>(
            <Link to={`/rooms/${chatRoom.id}`} style={{textDecoration:'none',color:'unset'}}>
            <ChatListItem id={chatRoom.id} title={chatRoom.data.name}/>
            </Link>
            ))}
        </Box>
    )
}

function ChatListItem(props:any) {
    const [lastMessage,setLastMessage]:any = useState();

    useEffect(() => {
        if(props.id){
            db.collection('chatrooms').doc(`${props.id}`).collection('messages').orderBy('timestamp','desc')
            .onSnapshot((snapshot:any)=>{
                let messages = snapshot.docs.map((doc:any)=>{
                    return doc.data()
                })
                setLastMessage(messages[0])
            })
        }
    }, [props.id])
    const classes = useStyles();
    return (
        <Box display='flex' className={classes.chatListItemBox}>
            <Box>
                <AccountCircleIcon style={{fontSize:'49px',padding:'8px',color:`${Colors.ICON}`}}/>
            </Box>
            <Box borderBottom='1px solid #efefef' flex={1} display='flex' alignItems='center'>
                <Box display='flex' flexDirection='column'>
                    <Typography variant='body1'>{props.title}</Typography>
                    <Typography variant='body2'>{lastMessage && lastMessage.message}</Typography>
                </Box>
                <Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ChatList
