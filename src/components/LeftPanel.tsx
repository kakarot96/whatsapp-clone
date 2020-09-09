import React from 'react'
import { Box } from '@material-ui/core'
import LeftHeader from './LeftHeader'
import SearchBand from './SearchBand'
import ChatList from './ChatList'
import { Colors } from '../constants'

function LeftPanel() {
    return (
        <Box flex={0.3} display='flex' flexDirection='column' borderRight={`1px solid ${Colors.DIVIDER}`}>
            <LeftHeader/>
            <SearchBand/>
            <ChatList/>
        </Box>
    )
}

export default LeftPanel
