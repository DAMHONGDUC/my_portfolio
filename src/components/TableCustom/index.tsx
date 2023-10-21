import { Empty, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { TableWrapperStyled } from './TableCustom.style'
import { theme } from '@/styles/theme/theme'
import { ColumnsType } from 'antd/es/table'

type P_Props = {
  totalPage: number
  columns?: ColumnsType
  data: []
}

const TableCustom: React.FC<P_Props> = (props) => {
  const [tableHeight, setTableHeight] = useState(0)

  // const showDrawer = () => {}

  const rowSelection = {
    onChange: () => {},
    selectedRowKeys: ['0'],
  }

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
        {...props}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        // size='middle'
        columns={[]}
        dataSource={props.data}
        pagination={{
          // hideOnSinglePage: true,
          total: props.totalPage,
          pageSize: 10,
          current: 1,
          onChange: (page) => {
            console.log('page ====>', page)
          },
          showSizeChanger: false,
        }}
        scroll={{
          y: tableHeight,
        }}
        style={{ border: '1px solid #eee', borderRadius: 6 }}
        locale={{
          emptyText: (
            <Empty
              description='Chưa có dữ liệu'
              image={Empty.PRESENTED_IMAGE_SIMPLE}
            />
          ),
        }}
      />
    </TableWrapperStyled>
  )
}

export default TableCustom
