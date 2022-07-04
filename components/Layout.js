import Header from "./Header";
import Head from "next/head";
import React from 'react'
import { createContext } from "react";

export default function Layout({children}) {

 
  
    return ( 
       
        <div className="sm:flex">
        <Head>
    <title>Mehdi Degryse  Photographe Developpeur Web Front End Portfolio Lille</title>
    <meta name="description" content="Portfolio photographe developpeur web front end haut de france Lille " />
    <link rel="icon" href="/favicon.ico" />
  </Head>
        <Header/>
        
        <main id="main" className="w-full sm:w-4/6  sm:flex-col sm:p-5 md:w-5/6 md:flex-col md:p-5" >{children}</main>
        </div>
       
       
    )
}