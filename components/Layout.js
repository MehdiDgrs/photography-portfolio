import Header from "./Header";
import Head from "next/head";

export default function Layout({children}) {
    return ( 
       
        <div className="sm:flex">
        
        <Header/>
        
        <main className="w-full sm:w-4/6 sm:flex-col sm:p-5 md:w-5/6 md:flex-col md:p-5" >{children}</main>
        </div>
       
    )
}