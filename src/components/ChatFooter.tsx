import React from 'react'
import { Box, IconButton, InputBase, createStyles, makeStyles, Theme } from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Colors } from '../constants';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: '3px 0px 3px 16px',
    },
  }),
);
function ChatFooter() {
    const classes = useStyles();
    return (
        <Box bgcolor='#f6f6f6' p={1} display='flex' alignItems='center'>
            <IconButton >
                <InsertEmoticonIcon style={{fontSize:'26px'}}/>
            </IconButton>
            <Box flex={1} mx={1} bgcolor='white' borderRadius='20px' height='35px' border={`1px solid ${Colors.DIVIDER}`}>
                <InputBase
                    className={classes.margin}
                    placeholder='Search or start new chat'
                    inputProps={{ 'aria-label': 'naked' }}
                />
            </Box>
            <IconButton >
                <MicIcon style={{fontSize:'26px'}}/>
            </IconButton>
        </Box>
    )
}

export default ChatFooter
