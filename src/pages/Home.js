import React, { useState,useEffect } from 'react'
import axios from 'axios'
import RestCard from '../components/Restcard'
import { Col, Row,Container } from 'react-bootstrap'


function Home() {
    const [contacts,setContacts]=useState([])
    const  fetchData=async()=>{
        const result=await axios.get('/db.json')
        setContacts(result.data.contacts);
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(contacts);
  return (
    <div>
        <Container>

        <Row className='ms-2'>
        {
            contacts.map(i=>(
                <Col className='ps-3 mt-5 p-2' lg={3} md={4} sm={6}>
                <RestCard item={i}></RestCard>
                </Col> ))
        }
        </Row>

        </Container>
    </div>

  )
}

export default Home