import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import SignIn from './SignIn'
import { useMediaQuery } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { userState } from '../state'
import { useViewport } from '../utils'
function Dashboard(props:any) {
    const [user,setUser] = useRecoilState(userState);
    const isMobile = useViewport();
    return (
        <Box height='inherit' display='flex'>
            {
                !user
                ?<SignIn setUser={setUser}/>
                :<Router>
                {
                    isMobile?
                    <Switch>
                        <Route exact path='/rooms'>
                            <LeftPanel isMobile={isMobile}/>
                        </Route>
                        <Route path='/rooms/:id'>
                            <RightPanel isMobile={isMobile}/>
                        </Route>
                    </Switch>
                    :
                    <>
                    <LeftPanel/>
                    <Switch>
                        <Route path='/rooms/:id'>
                            <RightPanel/>
                        </Route>
                    </Switch>
                    </>
                }
                </Router>
            }
        </Box>
    )
}

export default Dashboard