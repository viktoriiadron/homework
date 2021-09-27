import { LoginContext } from '../context/loginContext';
import React, { useContext } from 'react';


export default function Login() {
    const { isUserLogin, setIsUserLogin } = useContext(LoginContext);
    
    const changeLoginStaus = () => isUserLogin ? null : setIsUserLogin(!isUserLogin);
    
    return (
        <form>
            <input
                type='email'
                name='login'
                placeholder='Enter e-mail'
                required
            />
            <input
                type='password'
                name='password'
                placeholder='Enter password'
                required
            />
            <input
                type="submit"
                value='Login'
                onClick={changeLoginStaus}
            />
        </form> );
}
