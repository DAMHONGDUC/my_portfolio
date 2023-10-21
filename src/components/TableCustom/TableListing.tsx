/* eslint-disable @typescript-eslint/no-explicit-any */
import { theme } from '@/styles/theme/theme'
import { Empty, Table } from 'antd'
import {
  ColumnsType,
  TablePaginationConfig,
  TableRowSelection,
} from 'antd/es/table/interface'
import { useEffect, useState } from 'react'
import { TableWrapperStyled } from './TableCustom.style'

type P_Props<T extends Record<string, any>> = {
  columns: ColumnsType<T>
  data: T[]
  rowSelection?: TableRowSelection<T>
  pagination: TablePaginationConfig
  emptyDescription?: string
}

function TableListing<T extends Record<string, any>>({
  columns,
  data = [],
  rowSelection,
  pagination,
  emptyDescription,
}: P_Props<T>) {
  const [tableHeight, setTableHeight] = useState<number>(0)

  useEffect(() => {
    const outSideTableHeight = theme.adminHeaderHeight + 65 + 55 + 32 * 2.5

    if (typeof window !== 'undefined') {
      setTableHeight(window.innerHeight - outSideTableHeight)

      window.addEventListener('resize', () => {
        setTableHeight(window.innerHeight - outSideTableHeight)
      })
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', () => {})
      }
    }
  }, [])

  return (
    <TableWrapperStyled>
      <Table
        columns={columns}
        dataSource={data}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        scroll={{
          y: tableHeight,
        }}
        pagination={pagination}
        locale={{
          emptyText: (
            <Empty
              description={emptyDescription ?? 'Chưa có dữ liệu'}
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
      />
    </TableWrapperStyled>
  )
}

export default TableListing
