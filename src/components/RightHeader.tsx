import React, { useMemo } from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Box, Typography } from '@material-ui/core';
import { Colors } from '../constants';
import { StyledIconButton, HeaderIconButton } from './LeftHeader';
import { withRouter  } from 'react-router-dom';
import { useViewport } from '../utils';

function RightHeader(props:any) {
    const isMobile = useViewport();
    return (
        <Box display='flex' justifyContent='space-between' px={2} py={1.25} bgcolor={Colors.DIVIDER} border={`1px solid ${Colors.BORDER}`}>
            <Box display='flex'>
                {
                    isMobile && 
                    <StyledIconButton style={{paddingLeft:'0px'}} onClick={()=>props.history.replace('/rooms')}>
                        <KeyboardBackspaceIcon/>
                    </StyledIconButton>
                }
                <StyledIconButton style={{padding:'0px',marginRight:'15px',height:'40px'}}>
                <AccountCircleIcon style={{fontSize:'40px'}}/>
                </StyledIconButton>
                <Box display='flex' flexDirection='column' justifyContent='center'>
                    <Typography variant='body1'>{props.chatRoomName}</Typography>
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

export default React.memo(withRouter(RightHeader))
