import React from 'react'
import { Box, makeStyles, Theme, createStyles } from '@material-ui/core'
import WhatsAppBackground from '../images/whatsapp_bg.png'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      chatWindowBox:{
          backgroundImage: `url(${require("../images/whatsapp_bg.png")})`
      }
  }),
);
function ChatWindow() {
    const classes = useStyles();
    return (
        <Box flex={1} overflow='auto' className={classes.chatWindowBox}>
            
        </Box>
    )
}

export default ChatWindow
