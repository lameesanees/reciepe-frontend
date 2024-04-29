import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import ReciepeCard from './ReciepeCard'
function Home() {
  //api fetching

  const base_url='http://localhost:8002/recipes'
//to hold array of restaurant data
  const[alldata,setAllata]=useState([])

  const fetchData=async()=>{
    const result=await axios.get(base_url)
    console.log(result.data); //array(10)
    setAllata(result.data)
  }
  console.log(alldata);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
      <Row>
        
        {alldata.map(item => (
          <Col className='p-5' sm={12} md={6} lg={4} xl={3}>
          <ReciepeCard restaurant={item}/>
          </Col>
        ))}
        
      </Row>
    </div>
  )
}

export default Home