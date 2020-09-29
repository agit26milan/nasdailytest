import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import { Container, Row, Spinner } from 'react-bootstrap'
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

  useEffect(() => {
    getListData()
  }, [])

  useEffect(() => {
    getListData()
  }, [page])

  return (
    <>
      <Navbar id='navbar' />
      <Searchbar />
      <Container>
        <Row className='m-top10'>

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
