import React from 'react'
import { Box, makeStyles, Theme, createStyles, Typography, withStyles } from '@material-ui/core'
import WhatsAppBackground from '../images/whatsapp_bg.png'
import { Colors } from '../constants';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      chatWindowBox:{
          backgroundImage: `url(${require("../images/whatsapp_bg.png")})`
      },
      chatMessageTime:{
        marginLeft:'10px',
        position: "absolute",
        bottom: "4px",
        lineHeight: 1,
        right: "4px",
        fontSize:'10px'
      },
      chatMessageText:{
        marginRight:'10px'
      },
      sentMessage:{
          backgroundColor: `${Colors.SENTMESSAGE}`,
          marginLeft:'auto'
      }
  }),
);
const ChatMessageText = withStyles({
    root: {
        fontFamily:'Segoe UI',
    }
  })(Typography);


function ChatWindow() {
    const classes = useStyles();
    return (
        <Box flex={1} overflow='auto' className={classes.chatWindowBox} p={4}>
            <ChatMessage message='Hi, Kunal here.' type='sent'/>
            <ChatMessage message="Hi Kunal, how are you. How's the COVID situation in your city" type='received'/>
        </Box>
    )
}

function ChatMessage(props:any){
    const classes = useStyles();
    return (
        <Box className={props.type==='sent' ? classes.sentMessage:""} position='relative' bgcolor='white' width='fit-content' p={1} pr={5} borderRadius='6px' my={0.25}>
            <ChatMessageText variant='caption' className={classes.chatMessageText}>{props.message}</ChatMessageText>
            <ChatMessageText variant='overline' className={classes.chatMessageTime}>02:41</ChatMessageText>
        </Box>
    )
}
export default ChatWindow
