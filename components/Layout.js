import Header from "./Header";
import Head from "next/head";

export default function Layout({children}) {
    return ( 
       
        < >
        
        <Header/>
        
        <main className="w-5/6 flex-col p-5" >{children}</main>
        </>
       
    )
}