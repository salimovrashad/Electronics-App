import React, { useState } from "react";
import * as Components from './Components';
import { useNavigate } from "react-router-dom";


const user = {
    email: "rashad@mail.ru",
    password: 'rashad123'
}



function Login() {
    const [signIn, toggle] = React.useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [msg, setMsg] = useState({
        text: "",
        color: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMsg({
                text: "Please, fill input",
                color: "light"
            })
        } else {
            if (email === user.email && password === user.password) {
                setMsg({
                    text: "Login successfully",
                    color: "success"
                })
                navigate('/shop');
                localStorage.setItem('active','true');
                window.location.reload();
            } else {
                setMsg({
                    text: "email or password is wrong!",
                    color: "warning"
                })
            }
        }
    }

    
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form onSubmit={handleSubmit}>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' />
                      <Components.Input onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
                      <p className={alert}>{msg.text}</p>
                      <Components.Button >Sign In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         To keep connected with us please login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default Login;