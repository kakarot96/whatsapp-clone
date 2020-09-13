import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import db from '../firebase'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import SignIn from './SignIn'
import { useRecoilState } from 'recoil'
import { userState } from '../state'

function Dashboard(props:any) {
     const [user,setUser] = useRecoilState(userState);
    return (
        <Box height='inherit' display='flex'>
            {
                !user
                ?<SignIn setUser={setUser}/>
                :<Router>
                <LeftPanel/>
                    <Switch>
                        <Route path='/rooms/:id'>
                            <RightPanel/>
                        </Route>
                    </Switch>
                </Router>
            }
        </Box>
    )
}

export default Dashboard