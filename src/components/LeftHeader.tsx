import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Box, IconButton, makeStyles, Theme, createStyles, withStyles } from '@material-ui/core';
import { Colors } from '../constants';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  }),
);
export const StyledIconButton = withStyles({
    root: {
      padding: '8px',
      color: `${Colors.ICON}`
    }
  })(IconButton);
export const HeaderIconButton = withStyles({
root: {
    marginLeft:'7px'
}
})(StyledIconButton);
function LeftHeader() {
    const classes = useStyles();
    return (
        <Box display='flex' justifyContent='space-between' px={2} py={1.25} bgcolor={Colors.DIVIDER}>
            <StyledIconButton style={{padding:'0px'}}>
            <AccountCircleIcon style={{fontSize:'40px'}}/>
            </StyledIconButton>
            <Box>
                <HeaderIconButton>
                <DonutLargeIcon/>
                </HeaderIconButton>
                <HeaderIconButton>
                <ChatIcon/>
                </HeaderIconButton>
                <HeaderIconButton>
                <MoreVertIcon/>
                </HeaderIconButton>
            </Box>
        </Box>
    )
}

export default LeftHeader
