import React, { useEffect, useState } from 'react'
import { request } from '../../Utils'

const HomeContainers = () => {
  const [listStory, setListStory] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(30)
  const [loading, setLoading] = useState(true)
  const getListData = () => {
    const url = '/topstories.json?print=pretty'
    request(url, 'GET', {}, (response) => {
      console.log(response)
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
    for (var i = 0; i < arr.length; i++) {
      getDetailStory(arr[i]).then((data) => {
        setListStory((oldData) => [...oldData, data])
      })
    }
  }

  return (
    <div>
     
    </div>
  )
}

export default HomeContainers
