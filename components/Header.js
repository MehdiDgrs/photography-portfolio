import Link from 'next/link'
import  React,{ useState } from 'react';
let Header = () => {

    let [selected,setSelected] = React.useState([])

    let select = (e) => {setSelected(e.target.text)}
    console.log(selected)
return (
<header className='  flex  p-3 h-screen flex-col  gap-5 font-semibold w-1/6 py-8 pl-8 sticky top-0' >
<a className =" uppercase text-2xl mb-5" href='/'><h2 className="font-bold text-slate-900 ">Degryse Mehdi </h2><span className="font-medium">Photographe | Developpeur Web</span></a>
<div onClick={select}><Link href ="/"><a  className={`hover:opacity-100 opacity-50 text-slate-900 uppercase  `}>Gallerie</a></Link></div> 
<Link href ="/about"><a  className="hover:opacity-100 opacity-50 text-slate-900 uppercase">A propos de moi</a></Link>
<Link href ="/contact"><a  className="hover:opacity-100 opacity-50 text-slate-900 uppercase">Contact </a></Link>


</header>
)}
export default Header;
