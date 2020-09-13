import { Button } from '@material-ui/core'
import React from 'react'
import { useRecoilState } from 'recoil';
import { auth,provider } from '../firebase'
import { userState } from '../state';

function SignIn(props:any) {
    const [user, setUser]:any = useRecoilState(userState);
    const signIn = () =>{
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result)
            setTimeout(()=>{
                setUser(JSON.stringify(result.user))
            },2000)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default SignIn
