import React from 'react'
import { Box } from '@material-ui/core'
import RightHeader from './RightHeader'
import ChatWindow from './ChatWindow'
import ChatFooter from './ChatFooter'

function RightPanel() {
    return (
        <Box flex={0.7} display='flex' flexDirection='column'>
            <RightHeader/>
            <ChatWindow/>
            <ChatFooter/>
        </Box>
    )
}

export default RightPanel
