import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import {useHistory} from 'react-router-dom'


function Page1(){
  let x = useHistory()
  console.log(x)
return(
  <div>
 <div style={{marginLeft:'15%',marginTop:'5%' }}>
    <Button onClick={()=>{x.push('/presence') }} className='button0'>Commencer</Button>
  </div>
  <div style={{marginLeft:'38%',marginTop:'5%'}}>
  <Button variant="primary" size="lg" disabled className='button1'>present</Button>{' '}
  <Button variant="secondary" size ="lg" disabled className='button2'>excuse</Button>{' '}
  <Button variant="success" size ="lg" disabled className='button3'>abscent</Button>{' '}
</div>
</div>
) 
}

export default Page1; 