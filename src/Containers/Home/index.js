import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { Container, Row, Spinner, Col, Button } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import { request } from '../../Utils'
import Navbar from '../../Components/Navbar'
import Searchbar from '../../Components/Search'
import Card from '../../Components/Card'
import Footer from '../../Components/Footer'
const HomeContainers = () => {
  const [listStory, setListStory] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const [totalPage, setTotalPage] = useState(476)
  const [loading, setLoading] = useState(true)
  const [type, setType] = useState('top')

  const getListData = () => {
    const url = `/${type}stories.json?print=pretty`
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

  const handleLooping = async (arr) => {
    const more = totalPage - (page * perPage)
    for (var i = more; i < arr.length - ((page - 1) * perPage); i++) {
      await getDetailStory(arr[i]).then(async (data) => {
        if (data) {
          await setListStory((oldData) => [...oldData, data])
        }
      })
    }
    setLoading(false)
  }

  const onNextScroll = () => {
    setLoading(true)
    setPage((oldState) => oldState + 1)
  }

  const setTypeNews = (type) => {
    setListStory([])
    setType(type)
  }

  useEffect(() => {
    getListData()
  }, [])

  useEffect(() => {
    getListData()
  }, [page])

  useEffect(() => {
    getListData()
  }, [type])

  return (
    <>
      <Navbar />
      <Searchbar />
      <Container>
        <Row className='m-top10'>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} >
            <Button onClick={() => setTypeNews('new')} variant={type === 'new' ? 'warning' : 'secondary'} className='full-width' >New stories</Button>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6} >
            <Button onClick={() => setTypeNews('top')} variant={type === 'top' ? 'warning' : 'secondary'} className='full-width' >Top stories</Button>
          </Col>
          <InfiniteScroll
            dataLength={listStory.length}
            next={onNextScroll}
            hasMore
            loader={
              <>
                {listStory.length < totalPage && (
                  <p>Fetching data...</p>
                )}
              </>
            }
          >
            {listStory && listStory.length > 0 && listStory.map((x, index) => (
              <div key={index}>
                <Card data={x} />
              </div>
            ))}
          </InfiniteScroll>
        </Row>
      </Container>
      <Footer loading={loading} />
    </>
  )
}

export default HomeContainers
