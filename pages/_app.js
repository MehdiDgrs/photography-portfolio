import '../styles/globals.css'
import { createContext } from 'react'
import React from 'react'
import Layout from '../components/Layout'

export const HeaderContext = React.createContext(null);

function MyApp({ Component, pageProps }) {
    const [showGallerie,setShowGallerie] = React.useState(true)
  return (
    
    <HeaderContext.Provider value ={{showGallerie,setShowGallerie}}>
    <Layout>
  <Component {...pageProps} />
    </Layout>
  </HeaderContext.Provider>
  )
  

}

export default MyApp
