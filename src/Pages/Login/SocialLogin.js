import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleLogIn} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleLogIn()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(err => console.error(err))
    }
    return (
        <div>
            <p className="text-center"><small>Social Login</small></p>
            <p className="text-center">
                <button  onClick={handleGoogleSignIn} className='btn btn-primary'>Sign In With Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;