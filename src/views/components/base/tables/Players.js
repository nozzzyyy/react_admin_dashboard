import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const Players = () => {
  const api = axios.create({
    baseURL: process.env.REACT_APP_PLAYERS_END_POINT,
  })

  useEffect(() => {
    console.log(process.env.REACT_APP_PLAYERS_END_POINT + '/players')
    api
      .get('/players')
      .then((res) => {
        setData(res.data.players)
        console.log(data)
      })
      .catch((error) => {
        console.log('Error:', error.message)
      })
  }, [])

  const [data, setData] = useState([])
  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout name="Table" href="components/table" />
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Table</strong> <small>Basic example</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Using the most basic table CoreUI, here&#39;s how <code>&lt;CTable&gt;</code>-based
              tables look in CoreUI.
            </p>
            <DocsExample href="components/table">
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data.map((consola) => (
                    <CTableRow key={consola.id}>
                      <CTableHeaderCell scope="row">{consola.id}</CTableHeaderCell>
                      <CTableDataCell colSpan="2">{consola.name}</CTableDataCell>
                      <CTableDataCell>{consola.nick}</CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Players
