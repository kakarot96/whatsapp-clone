import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { Box, Typography } from '@material-ui/core';
import { Colors } from '../constants';
import { StyledIconButton, HeaderIconButton } from './LeftHeader';
function RightHeader() {
    return (
        <Box display='flex' justifyContent='space-between' px={2} py={1.25} bgcolor={Colors.DIVIDER} border={`1px solid ${Colors.BORDER}`}>
            <Box display='flex'>
                <StyledIconButton style={{padding:'0px 15px 0px 0px'}}>
                <AccountCircleIcon style={{fontSize:'40px'}}/>
                </StyledIconButton>
                <Box display='flex' flexDirection='column' justifyContent='center'>
                    <Typography variant='body1'>Hemant Mangla</Typography>
                </Box>
            </Box>
            <Box display='flex'>
                <HeaderIconButton>
                <SearchIcon/>
                </HeaderIconButton>
                <HeaderIconButton>
                <AttachFileIcon/>
                </HeaderIconButton>
                <HeaderIconButton>
                <MoreVertIcon/>
                </HeaderIconButton>
            </Box>
        </Box>
    )
}

export default RightHeader
