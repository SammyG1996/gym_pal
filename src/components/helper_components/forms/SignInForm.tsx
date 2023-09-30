import React, {useContext, useState} from 'react'
import { IsLoggedInContext } from '../../../App';
import { useNavigate } from 'react-router';
// import {BiLoader} from 'react-icons/bi'
// import { IconContext } from 'react-icons';
import { GoogleLogin } from '@react-oauth/google';
import { Colors } from '../../../assets/colors';
import PrimaryButton from '../buttons/PrimaryButton';
import { GymPalAPI } from '../../../helpers/GymPalAPI';
import { ContextType } from '../../../config/ContextType';
import Spinner from '../Alerts/Spinner';
import { CredentialResponse } from '@react-oauth/google';

/**This is a login form. It is used when a user is logging into the application. */
const SignInForm = () => {
    const baseFormInfo = {username : '', password : ''};
    const [loading, setLoading] = useState(false);
    const [inputData, updateInputData] = useState(baseFormInfo)
    const {updatedIsLoggedIn, updateToken, updateAlert, updateUsername, updateUser} = useContext(IsLoggedInContext) as ContextType
    const navigate = useNavigate();
  
    /**Handles the control of the input data into state */
    const handleUpdate = (e:React.ChangeEvent<HTMLInputElement>) => {
      updateInputData({...inputData, [e.target.name] : e.target.value})
    }
    // Handles submission of data. If everything is submitted then a user is redirected to the companies route
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            setLoading(true)
            const {token, user} =  await GymPalAPI.login(inputData)
            if(token){
                console.log(token);
                console.log(user);
                updateToken(token);
                updatedIsLoggedIn();
                updateUsername(user.username);
                updateUser(user);
                const localStorageObject = JSON.stringify({token: token, username: user.username, user: user})
                localStorage.setItem("gym_pal", localStorageObject)

                setLoading(false)
                navigate('/')
            }
        } catch(err){
            setLoading(false)
            updateAlert('Invalid Username or Password Please Try Again')
            updateInputData(baseFormInfo)
        }
    }

    /**
     * This function handles the submission of the google oauth JWT to the server. 
     * If successful by the user will be redirected to the counter page 
     * if not the user will be redirected to the signup page to create an account
     */
    const handleOAuthSubmit = async (credentialResponse:CredentialResponse) => {
        try {
            setLoading(true);
            const {token, user}:{token:string, user:{username: string}} = await GymPalAPI.loginOAuth(credentialResponse);
            if(token){
                console.log(token);
                console.log(user);
                updateToken(token);
                updatedIsLoggedIn();
                updateUsername(user.username)
                updateUser(user);
                const localStorageObject = JSON.stringify({token: token, username: user.username, user: user})
                localStorage.setItem("gym_pal", localStorageObject)
                setLoading(false)
                navigate('/')
            }
        } catch(err){
            // If the user doesnt exist an alert happens and a user is redirected to the signup page
            setLoading(false)
            updateAlert('User does not exist, please sign up')
            navigate('/signup')
        }
    }

    return (
        <div>
            {loading && <Spinner />}

            {!loading && <form  onSubmit={handleSubmit}>
                <div className={`bg-[${Colors.dark}] bg-opacity-50 backdrop-blur-xl backdrop-filter backdrop-saturate-200 rounded-lg p-5 mt-10 w-[80vw] md:w-[60vw] lg:w-[30vw] shadow-lg flex flex-col items-center`}>
                    <h1 className='text-2xl text-center my-5 text-white font-black'>Sign In</h1>
                    <div className='mb-2'>
                        <input value={inputData.username} onChange={handleUpdate} className='w-[250px] py-2 px-2' type='text' name='username' id='username' placeholder='Username' />
                    </div>
                    <div className='mb-2'>
                        <input value={inputData.password} onChange={handleUpdate} className='w-[250px] py-2 px-2' type='password' name='password' id='password' placeholder='Password' />
                    </div>
                    
                    <GoogleLogin
                            size='large'
                            width='250px'
                            onSuccess={ (credentialResponse) => handleOAuthSubmit(credentialResponse)}
                            onError={ () => {
                                updateAlert('Login Failed')
                            }}
                        />
                    <div className='my-2'>
                        <PrimaryButton text='Submit'/>
                    </div>
        
                    <a className="hover:cursor-pointer text-white hover:text-[#98C1D9] underline text-xs" onClick={() => (navigate('/signup'))}>Or Sign Up Instead</a>

                </div>
            </form>}
        </div>
    )
}

export default SignInForm