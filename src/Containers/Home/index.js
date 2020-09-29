import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { Container, Row } from 'react-bootstrap'
import { request } from '../../Utils'
import Navbar from '../../Components/Navbar'
import Searchbar from '../../Components/Search'
import Card from '../../Components/Card'
const HomeContainers = () => {
  const [listStory, setListStory] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(30)
  const [loading, setLoading] = useState(true)
  
  const getListData = () => {
    const url = '/topstories.json?print=pretty'
    request(url, 'GET', {}, (response) => {
      handleLooping(response.data)
    }, (e) => {
      console.log(e, 'kuku')
    })
  }

  const getDetailStory = (id) => {
    const url = `/item/${id}.json?print=pretty`
    return new Promise((resolve, reject) => {
      request(url, 'GET', {}, (response) => {
        resolve(response.data)
      }, (e) => {
        reject(e)
      })
    })
  }

  useEffect(() => {
    getListData()
  }, [])

  const handleLooping = (arr) => {
    const more = page * perPage
    console.log(more, 'mana')
    for (var i = 0; i < arr.length; i++) {
      getDetailStory(arr[i]).then((data) => {
        setListStory((oldData) => [...oldData, data])
      })
    }
  }

  return (
    <>
      <Navbar />
      <Searchbar />
      <Container>
        <Row className='m-top10'>
          {listStory && listStory.length > 0 && listStory.map((x, index) => (
            <div key={index}>
              <Card data={x} />
            </div>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default HomeContainers
