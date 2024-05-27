import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
          {children}
      </main>
      <Footer/>
    </>
  )
}