import Link from 'next/link'
import React, { useState, useEffect, useContext } from 'react'
import { HeaderContext } from '../pages/_app'
import { useRouter } from 'next/router'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
let Header = (props) => {
  let [toggleNav, setToggleNav] = React.useState(false)

  let [style, setStyle] = React.useState([])

  let switchToggleNav = () => {
    setToggleNav(!toggleNav)
  }
  let router = useRouter()

  let { showGallerie, setShowGallerie } = React.useContext(HeaderContext)
  console.log(showGallerie)
  let changeContext = () => {
    setShowGallerie(true)
    console.log(showGallerie)
  }

  let [windowY, setWindowY] = React.useState(0)
  let [scrolling, setScrolling] = React.useState(false)
  let [screen, setScreen] = React.useState([])
  let [offSetY, setOffSetY] = React.useState(0)
  
  useEffect(() => {
    setScreen(window.screen.width)
    console.log(screen)
    console.log(offSetY)
    if (window.screen.width <= 800) {
      let onScroll = () => {
        
        let currentPosition = window.pageYOffset
        if (currentPosition > windowY) {
          setScrolling(true)
        } else {
          setScrolling(false)
        }

        setWindowY(currentPosition <= 0 ? 0 : currentPosition)
        console.log(currentPosition)
      }

     (router.pathname === '/about'||router.pathname ==="/contact" ) ?'':window.addEventListener('scroll', onScroll)
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [windowY, screen,router])

  return (
    <header
      id='mobileMenu'
      className={`${
        windowY > 300 ? (scrolling ? 'hidden' : 'z-50 fixed bg-[#ededed]') : ''
      } w-full sm:flex  p-3 sm:h-screen sm:flex-col  gap-5 font-semibold sm:w-2/6 md:w-1/6 sm:py-8 sm:pl-8 sm:sticky top-0`}
    >
      <div className='flex'>
        <div className='flex w-5/6'>
          <div className='  uppercase text-xl sm:text-2xl sm:mb-5'>
            <Link href='/'>
              <h2
                onClick={changeContext}
                className=' sm:text-left font-bold text-slate-900 hover:cursor-pointer '
              >
                Degryse Mehdi{' '}
              </h2>
            </Link>
            <div className='flex flex-col '>
              <h1 className=' font-medium text-lg text-slate-900 opacity-60 hover:opacity-90  sm:text-left'>
                Photographe |
              </h1>

              <h1 className=' font-medium text-lg text-slate-900 opacity-60 hover:opacity-90  sm:text-left'>
                {' '}
                Developpeur Web
              </h1>
            </div>
          </div>
        </div>
        <div>
          <p
            onClick={switchToggleNav}
            className=' flex-row-reverse sm:hidden hover:text-slate-900 cursor-pointer animate-bounce'
          >
            Menu
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleNav
            ? 'visible  transition-all ease-in-out duration-150 h-44'
            : '  invisible transition-all ease-in-out duration-150 h-0'
        }   sm:block sm:visible`}
      >
        <div
          id='gallerie'
          className='py-5'
          onClick={function () {
            changeContext()
          }}
        >
          <Link href='/'>
            <a
              id='link-1'
              className={`hover:opacity-100 opacity-50 text-slate-900 uppercase ${
                router.pathname == '/' &&
                showGallerie === true &&
                'opacity-100 text-slate-900 uppercase '
              }`}onClick={()=>setToggleNav(false)}
            >
              Gallerie
            </a>
          </Link>
        </div>

        <div className='py-5'>
          {' '}
          <Link href='/about'>
            <a
              id='link-2'
              className={`hover:opacity-100 opacity-50 text-slate-900 uppercase ${
                router.pathname === '/about' &&
                'opacity-100 text-slate-900 uppercase '
              }`}onClick={()=>setToggleNav(false)}
            >
              A propos{' '}
            </a>
          </Link>
        </div>
        <div className='py-5'>
          <Link href='/contact'>
            <a
              id='link-3'
              className={`hover:opacity-100 opacity-50 text-slate-900 uppercase ${
                router.pathname === '/contact' &&
                'opacity-100 text-slate-900 uppercase '
              }`}onClick={()=>setToggleNav(false)}
            >
              Contact{' '}
            </a>
          </Link>
        </div>
        {!showGallerie && screen>800 ?
        <div className='py-5'>
          <div className="flex space-x-7 justify-start px-2 animate-bounce hover:animate-none">
          <AiOutlineArrowLeft  id='arrowLeft'
          className="font-medium text-lg hover:text-xl cursor-pointer text-slate-900 " /> 
          <AiOutlineArrowRight id='arrowRight'  
          className=" font-medium text-lg hover:text-xl cursor-pointer text-slate-900 " /> 
            </div>

          </div>
          : null} 
      </div>
    </header>
  )
}
export default Header
