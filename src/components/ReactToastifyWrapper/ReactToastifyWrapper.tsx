"use client"

import "react-toastify/dist/ReactToastify.css"
import { FC, ReactNode } from "react"
import { ToastContainer } from "react-toastify"

interface ReactToastifyWrapperProps {
  children: ReactNode
}

export const ReactToastifyWrapper: FC<ReactToastifyWrapperProps> = ({
  children
}) => {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  )
}
