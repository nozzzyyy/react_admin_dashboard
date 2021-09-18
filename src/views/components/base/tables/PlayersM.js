import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from './Table'
const PlayersM = () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_PLAYERS_END_POINT,
  })

  const title = 'Listado Players'

  const columns = [
    {
      title: 'Id',
      field: 'id',
    },
    {
      title: 'Name',
      field: 'name',
    },
    {
      title: 'Nick',
      field: 'nick',
    },
  ]

  useEffect(() => {
    api
      .get('/players')
      .then((res) => {
        setData(res.data.players)
      })
      .catch((error) => {
        console.log('Error:', error.message)
      })
  }, [])

  const [data, setData] = useState([])
  return <Table columns={columns} data={data} title={title}></Table>
}

export default PlayersM
