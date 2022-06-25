import Link from 'next/link'
import  React,{ useState,useEffect } from 'react';
let Header = () => {
    let [toggleNav,setToggleNav] = React.useState(false)
    let [selected,setSelected] = React.useState([]);
    let [isSelected,setIsSelected] = React.useState([]);
    let [style,setStyle] = React.useState([])
    let select = (e) => { setSelected(e.target.id);
    }
    useEffect(() => {
        setSelected(prev => prev)
         
    }, [])
    
    let switchToggleNav = () => {
        setToggleNav(!toggleNav) ;
    }
      
    
        let [windowY ,setWindowY] = React.useState(0)
        let [scrolling,setScrolling] = React.useState(false);
        let [screen,setScreen] = React.useState([])
    useEffect(()=> {

        setScreen(window.screen.width);
        console.log(screen)

        if (window.screen.width <=800) { 
        
        
        let onScroll = () => {
            let currentPosition = window.pageYOffset;
            if (currentPosition > windowY) {
                setScrolling(true)
            }
            else {
                setScrolling(false)
            }
            setWindowY(currentPosition<=0 ? 0 : currentPosition)

            
        }
        window.addEventListener('scroll',onScroll);
        return () => window.removeEventListener("scroll", onScroll);
        
         
    }
      
    },[windowY,screen])

    console.log(scrolling)
   

    
    
return (
<header id="mobileMenu" className={ `${ windowY !== 0 ?scrolling ? 'hidden' :'z-50 fixed bg-[#ededed]' : ''} w-full sm:flex  p-3 sm:h-screen sm:flex-col  gap-5 font-semibold sm:w-2/6 md:w-1/6 sm:py-8 sm:pl-8 sm:sticky top-0` }>
    <div className="flex">
<div className="flex w-5/6">
<a className ="  uppercase text-xl sm:text-2xl sm:mb-5" href='/'><h2 className=" sm:text-left font-bold text-slate-900 ">Degryse Mehdi </h2><div className="flex flex-col "><span className=" font-medium text-lg text-slate-900 opacity-60 hover:opacity-90  sm:text-left">Photographe |</span>

<span className=" font-medium text-lg text-slate-900 opacity-60 hover:opacity-90  sm:text-left"> Developpeur Web</span></div>

</a>


</div>
<div><p onClick={switchToggleNav}className=" flex-row-reverse sm:hidden hover:text-slate-900 cursor-pointer animate-bounce" >Menu</p></div>
</div> 
<div className={`${toggleNav ? 'visible  transition-all ease-in-out duration-150 h-44' : '  invisible transition-all ease-in-out duration-150 h-0'}   sm:block sm:visible`}>
<div className="py-5"onClick={ select}><Link href ="/"><a   id = "link-1"className={`hover:opacity-100 opacity-50 text-slate-900 uppercase ${selected ==='link-1' && 'opacity-100 text-slate-900 uppercase '}`}>Gallerie</a></Link></div> 

<div className="py-5"onClick={ select}> <Link href ="/about"><a id = "link-2" className={`hover:opacity-100 opacity-50 text-slate-900 uppercase ${selected ==='link-2' && 'opacity-100 text-slate-900 uppercase '}`}>A propos </a></Link></div>
<div className="py-5" onClick ={select }><Link href ="/contact"><a id = "link-3" className="hover:opacity-100 opacity-50 text-slate-900 uppercase">Contact </a></Link></div>
</div>

</header>
)}
export default Header;
