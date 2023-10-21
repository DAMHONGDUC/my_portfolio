// import { TableCustom } from '@/components'
import TableListing from '@/components/TableCustom/TableListing'
import { theme } from '@/styles/theme/theme'
import { UserOutlined } from '@ant-design/icons'
import { Layout } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Image from 'next/image'
import {
  ContentCustomStyled,
  HeaderCustomStyled,
  LogoWrapperStyled,
  MenuCustomStyled,
  PageTitleStyled,
  SiderCustomStyled,
} from './AdminLayout.style'
import { DEFAULT_ALT_IMG } from '@/constants'
import CustomDatePicker from '@/components/CustomDatePicker'

interface DataType {
  key: React.Key
  name: string
  age: number
  address: string
}

const AdminLayout = () => {
  const router = useRouter()

  const [windowHeight, setWindowHeight] = React.useState<number>(0)

  // const menuItems = []

  const onClickMenu = () => {}

  useEffect(() => {
    if (router.pathname === '/admin') {
      router.push('/admin')
      return
    }

    // const activeMenu = []
  }, [router.pathname])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowHeight(window.innerHeight)

      window.addEventListener('resize', () => {
        setWindowHeight(window.innerHeight)
      })
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', () => {
          setWindowHeight(window.innerHeight)
        })
      }
    }
  }, [])

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sydney No. 1 Lake Park',
    },
  ]

  return (
    <Layout>
      <SiderCustomStyled breakpoint='lg' collapsedWidth='0'>
        <LogoWrapperStyled>
          <Image
            alt={DEFAULT_ALT_IMG}
            width={172}
            height={40}
            src={'/images/logo-1.jpg'}
          />
        </LogoWrapperStyled>
        <MenuCustomStyled
          onClick={onClickMenu}
          theme='light'
          mode='inline'
          style={{ height: '100%' }}
          defaultSelectedKeys={['4']}
          items={[UserOutlined, UserOutlined].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `nav ${index + 1}`,
          }))}
        />
      </SiderCustomStyled>
      <Layout
        style={{
          background: theme.colors.adminBackground,
          height: windowHeight,
        }}
      >
        <HeaderCustomStyled>
          <PageTitleStyled>This is title</PageTitleStyled>
        </HeaderCustomStyled>
        <ContentCustomStyled>
          <div style={{ padding: '0 1.2rem', backgroundColor: 'white' }}>
            {/* <TableCustom totalPage={10} /> */}
            <div style={{ width: 200 }}>
              <CustomDatePicker title={'helo'} name={'startTime'} />
            </div>
            <TableListing
              data={data}
              columns={columns}
              pagination={{
                // hideOnSinglePage: true,
                total: 10,
                pageSize: 10,
                current: 1,
                onChange: (page) => {
                  console.log('page ====>', page)
                },
                showSizeChanger: false,
              }}
            />
          </div>
        </ContentCustomStyled>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
