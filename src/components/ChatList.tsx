import React from 'react'
import { Box, IconButton, Typography, createStyles, makeStyles, Theme } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chatListBox: {
        '&::-webkit-scrollbar':{
            width:'5px !important',
            height:'5px !important'
        },
        '&::-webkit-scrollbar-thumb':{
            backgroundColor:'rgba(0,0,0,.2)',
            height:'5px !important'
        }
    }
  }),
);
function ChatListItem(props:any) {
    return (
        <Box display='flex'>
            <Box>
                <IconButton>
                <AccountCircleIcon style={{fontSize:'49px'}}/>
                </IconButton>
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

function ChatList(props:any) {
    const classes = useStyles();
    return (
        <Box flex={1} overflow='auto' className={classes.chatListBox}>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
            <ChatListItem title='Kunal Aggarwal' subtitle='This is the last message'/>
        </Box>
    )
}

export default ChatList