import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Box, IconButton, makeStyles, Theme, createStyles, withStyles } from '@material-ui/core';
import { Colors } from '../constants';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
  }),
);
const StyledIconButton = withStyles({
    root: {
      padding: '8px'
    }
  })(IconButton);
function LeftHeader() {
    const classes = useStyles();
    return (
        <Box display='flex' justifyContent='space-between' px={2} py={1.25} bgcolor={Colors.DIVIDER}>
            <StyledIconButton style={{padding:'0px'}}>
            <AccountCircleIcon style={{fontSize:'40px'}}/>
            </StyledIconButton>
            <Box>
                <StyledIconButton>
                <DonutLargeIcon/>
                </StyledIconButton>
                <StyledIconButton>
                <ChatIcon/>
                </StyledIconButton>
                <StyledIconButton>
                <MoreVertIcon/>
                </StyledIconButton>
            </Box>
        </Box>
    )
}

export default LeftHeader
