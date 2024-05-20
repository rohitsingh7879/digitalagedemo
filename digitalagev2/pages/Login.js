import React, { use, useContext, useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link'

import { userContext } from './_app'
function Login() {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const { logout } = useAuth0();
    const { userdata, setuserdata } = useContext(userContext)

    useEffect(() => {
        // console.log(isAuthenticated, user)
        if (isAuthenticated && user) {
            setuserdata(user)

        }
    }, [isAuthenticated, user])

    useEffect(() => {

    }, []);



    return (
        <>
            {/* <ToastContainer /> */}

            {!userdata
                ? <Link href={""} style={{padding:0}} className=" btn  mx-1 btn-outline " type="submit" onClick={() => loginWithRedirect()}>Login</Link>
                :
                <>
                    <Link href={""} className=" btn  mx-1 btn-outline" type="submit" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Link>

                </>
            }
        </>
    )
}

export default Login
