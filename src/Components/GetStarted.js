import React from 'react';
import { Button } from 'react-bootstrap';
import { BsGoogle, BsKeyboard } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import { SiFastly } from 'react-icons/si';
import { getDatabase, set, push, ref, get } from 'firebase/database'
import { authentication } from '../Firebase/fireBase'
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import '../css/index.css'

const GetStarted = () => {
    const auth=getAuth()

    const SignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((re) => {
                console.log(re);                
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <>
            <div className="gs-head" id='chatList-head'>
                <h2> <span className='outerSpan'><BsKeyboard /> Typo</span>&#123;<span className='innerSpan'>Testor <SiFastly /></span>&#125;</h2>
                {/* <img src={cc} alt="" /> */}
            </div>

            <br />
            
            <div className="gosignin">
                <Button id='gs' onClick={SignIn}> <FcGoogle id='google-icon' /> &nbsp;<span>Sign in with Google</span>  </Button>
            </div>

        </>
    )
}

export default GetStarted