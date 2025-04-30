import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';


const Login = () => {
    const [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider


    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result?.user);

                setUser(result?.user)
            })
            .catch((error) => {
                console.log(error);

            })

    }

    return (
        <div className='h-[90vh] bg-amber-900 text-white'>
            <h1>Please Login</h1>

            <button onClick={handleGoogleSignIn} className='border-[2px] border-white py-[10px] px-[30px] cursor-pointer'>Sign in with google</button>

            <div>
                {
                    user && (
                        <div>
                            <h3>{user.displayName}</h3>
                            <h3>{user.email}</h3>
                            <img src={user?.photoURL} alt="image" />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Login;