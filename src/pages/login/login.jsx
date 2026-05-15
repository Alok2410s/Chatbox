import React from 'react'
import './Login.css'
import assets from '../../assets/assets'
const Login = () => {

    const Login = () =>{
        const [currstate,setCurrState] = useState("Sign up");
    }
    return (
        <div className='login'>
            <img src={assets.logo_big} alt="" className="logo" />
            <form className="login-form">
                <h2>
                   {currState}
                </h2>
                {currState === "Sign up"? <input type="text" placeHolder='username' className="form-input" required />: null}
                <input type="email" placeHolder='Email address' className="form-input" required />
                <input type="password" placeHolder='password' className="form-input" required />
                <button type='summit'>{currState === "Sign up"?"Create account":"Login"}</button>
                <div className="login-term">
                    <imput type="checkbox" />
                    <p>Agree to the terms of use & privacy policy.</p>
                </div>
                <div className="login-forget">
                    {
                        currState ==="Sign up"
                        ?<p  className="login-toggle">Already have an account <span onClick={()=>setCurrState("Login")}>Login here</span></p>
                        :<p  className="login-toggle">Create an account <span onClick={()=>setCurrState("Sign up")}>click here</span></p>
                    }
                </div>
            </form>
        </div>
    )
}

export default Login;