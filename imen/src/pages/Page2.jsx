import React,{useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Tab,Table,Col,Nav,Row} from "react-bootstrap";

function Page2(){
    const tab=['Robert Julia','Kennedy John','Guetta David','Ten Ben','Cesar Alex','Pool Francis','Wilson Wade','Reacher Jack','Dunord Caroline','Franquelin Benjamin',]
    const[name,setName]=useState(tab[0]);
    const[count,setCount]=useState(0);
    const[tous,setTous]=useState([]);
    const[present,setPresent]=useState([]);
    const[abscent,setAbscent]=useState([]);
    const handleClick=() => {
      
        if(count<tab.length){
          setCount(count+1);
          setName(tab[count+1]);
  
      }
    }
return(
  <div>
    <div> 
       <h1 style={{ marginleft:'20%' , marginTop:'5%'}}>{name}</h1>
    </div>
   <div style={{marginLeft:'38%',marginTop:'5%'}}>
   
     <Button  onClick={()=> handleClick()} onclick={()=>{setPresent([...present,...[tab[count ]]]); setTous([...tous,...[{nomt:tab[count],statet:'resent'}]])}}  variant="primary" size="lg" className='button1' >present</Button>{'   '}
     <Button  onClick={()=> handleClick()}  onclick={()=>{setTous([...tous,...[{nomt:tab[count],statet:'excuse'}]])}} variant="secondary" size ="lg"  className='button2' >excuse</Button>{' '}
     <Button  onClick={()=> handleClick()}  onclick={()=>{setAbscent([...abscent,...[tab[count ]]]); setTous([...tous,...[{nomt:tab[count],statet:'abscent'}]])}}variant="success" size ="lg"  className='button3' >abscent</Button>{'   '}
     
   </div>
           <div style={{marginLeft:'38%',marginTop:'5%'}}> 
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tous</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Present</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Abscent</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <Table striped bordered hover variant="Red">
        <tbody>
            
             {tous.map(elt=><tr colSpan="2"> <td>{elt.nomt}</td><td>{elt.statet}</td></tr>)}
             
        </tbody>
        </Table>  
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                                <Table striped bordered hover variant="Red">
                                
                            <tbody>
                                
                                {present.map(elt=><tr colSpan="2"> <td>{elt}</td></tr>)}
                                
                            </tbody>
                            </Table>  
                        
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                                <Table striped bordered hover variant="Red">
                                
                            <tbody>
                                
                                {abscent.map(elt=><tr colSpan="2"> <td>{elt}</td></tr>)}
                                
                            </tbody>
                            </Table>  
                        
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>   
                </div>
    </div>
)
}
  
export default Page2;