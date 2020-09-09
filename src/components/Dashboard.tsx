import React from 'react'
import Box from '@material-ui/core/Box'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
function Dashboard(props:any) {
    return (
        <Box height='inherit' display='flex'>
            <LeftPanel/>
            <RightPanel/>
        </Box>
    )
}

export default Dashboard