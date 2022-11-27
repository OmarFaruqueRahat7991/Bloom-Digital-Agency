import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SocialLogin from './SocialLogin';

const Login = () => {
  const {logInUser} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error(error);
          });
    }

    return (
        <div className="relative text-black">
        <img
          src="https://i.ibb.co/d7Tnxbb/social-media-5187243-960-720.png"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Sign In <br className="hidden md:block" />
                  And Enjoy{' '}
                  <span className="text-teal-accent-400">Special Offers</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7 at a low cost. From startups to medium-sized enterprises to multiple-location companies, a digital marketing company helps you expand your niche market reach to offer goods and services to your target customers, irrespective of time differences or location.
                </p>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Sign In
                  </h3>
                  <form onSubmit={handleLogin}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                      >
                        Email
                      </label>
                      <input
                        placeholder="Enter Your Email"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        placeholder="Enter Your Password"
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                      />
                    </div>
                    
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none text-black bg-cyan-200"
                      >
                        <input type="submit" value="Submit" />
                      </button>
                    </div>
                    
                  </form>
                  <p className='text-center font-bold'>New To Bloom? <Link className='text-blue-600' to='/register'>Register</Link> </p>
                <SocialLogin></SocialLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;