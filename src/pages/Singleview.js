import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import { Col, Container, Row, } from 'react-bootstrap'







function Singleview() {

const[AllData,setData]=useState([])


    const {mobile}=useParams()
    console.log(mobile);

const FetchAllDatas=async()=>{
    const result=await axios.get('/db.json')
    setData(result.data.contacts)
}
useEffect(()=>{
    FetchAllDatas()
},[])
const singleData=AllData.find(i=>i.mobile==mobile)
console.log(singleData)

  return (
    <div>
        {singleData &&
        <Container>
        <Row className="p-5">
            <Col className='p-5'>
                <img style={{height:'300px',width:'100%'}} src={singleData.profile} alt="" />
            
            </Col>
            <Col>
            <ListGroup className='fs-3 mt-3 pt-2'>
            <ListGroup.Item className='mt-3'>NAME  : <span className='text-danger'>{singleData.name}</span></ListGroup.Item>

      <ListGroup.Item className='mt-3'>PHN NO  : <span className='text-danger'>{singleData.mobile}</span></ListGroup.Item>
      <ListGroup.Item className='mt-3'>LOCATION : <span className='text-danger'>{singleData.location}</span></ListGroup.Item>
      <ListGroup.Item className='mt-3'>EMAIL <span className='text-danger'>{singleData.email}</span></ListGroup.Item>


    </ListGroup>

            </Col>

        </Row>
        </Container>
        }

    </div>


  )
}

export default Singleview