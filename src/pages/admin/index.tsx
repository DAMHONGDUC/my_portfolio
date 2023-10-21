// import { AdminLayout } from '@/layout'
import { Loading } from '@/components'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

const AdminPageTest = dynamic(() => import('../../layout/AdminLayout'), {
  ssr: false,
  loading: () => <Loading />,
})

const AdminPage: NextPage = () => {
  return (
    <React.Fragment>
      <AdminPageTest />
    </React.Fragment>
  )
}

export default AdminPage
