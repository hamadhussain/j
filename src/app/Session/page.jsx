'use client'
import React from 'react'
import { SessionProvider } from "next-auth/react"

const page = ({children}) => {
  return (
<SessionProvider>{children}</SessionProvider>
  )
}

export default page