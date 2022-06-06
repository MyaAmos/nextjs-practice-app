import { Typography } from '@mui/material'
import React, { Children } from 'react'
import Navbar from '../Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout