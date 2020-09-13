import React from 'react'
import { Box, IconButton, Typography, createStyles, makeStyles, Theme, ButtonBase } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { StyledIconButton } from './LeftHeader';
import { Colors } from '../constants';
import { Link, useParams } from 'react-router-dom';
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
            <ChatListItem title={chatRoom.data.name} subtitle='This is the last message'/>
            </Link>
            ))}
        </Box>
    )
}

function ChatListItem(props:any) {
    const classes = useStyles();
    return (
        <Box display='flex' className={classes.chatListItemBox}>
            <Box>
                <AccountCircleIcon style={{fontSize:'49px',padding:'8px',color:`${Colors.ICON}`}}/>
            </Box>
            <Box borderBottom='1px solid #efefef' flex={1} display='flex' alignItems='center'>
                <Box display='flex' flexDirection='column'>
                    <Typography variant='body1'>{props.title}</Typography>
                    <Typography variant='body2'>{props.subtitle}</Typography>
                </Box>
                <Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ChatList
