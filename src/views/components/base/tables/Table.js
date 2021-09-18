import React from 'react'
import MaterialTable from 'material-table'
import PropTypes from 'prop-types'

export const Table = ({ data, columns, title }) => {
  Table.propTypes = {
    data: PropTypes.object,
    columns: PropTypes.array,
    title: PropTypes.string,
  }

  const empty = [
    {
      title: 'No se encontro información',
      field: 'empty',
    },
  ]

  return (
    <MaterialTable
      title={title}
      data={data ? data : ''}
      columns={data ? columns : empty}
      localization={{
        pagination: {
          labelRowsPerPage: 30,
        },
      }}
      options={{
        search: true,
        paging: true,
        filtering: true,
        exportButton: true,
        sorting: true,
        toolbar: true,
        pageSize: 30,
        pageSizeOptions: [30, 50, 100],
        /*  rowStyle: x => {
                        if ( x.index % 2 ) {
                        return { backgroundColor: '#EEE', }
                        }*/
        headerStyle: {
          backgroundColor: '#FF4500',
          color: '#FFF',
        },
      }}
    />
  )
}

export default Table
