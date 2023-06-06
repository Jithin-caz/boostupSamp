import React from 'react';
import { Form ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login=()=>{
  
  
    return(
        <div className='form-container'>
           
      <Form className='form-login' >
      <Form.Group className='frm-grp' >Login credentials</Form.Group>
      <Form.Label >email</Form.Label>
        <Form.Control className='login-email' type='email' placeholder='example@gmail.com' variant='secondary'></Form.Control>
        <Form.Label className='login-pass-label'>password</Form.Label>
        <Form.Control className='login-password' type='password'placeholder='enter a strong password'></Form.Control>
      
      <Button className='login-button' variant='success' >Login</Button>
      <Button className='pass-for-button' variant='primary'>forgot password</Button>
      </Form>
        </div>
    );
}
export default Login;