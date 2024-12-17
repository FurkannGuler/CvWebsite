import React from 'react'
import Logo from './logo/Logo'
import Navigation from './navigation/Navigation'
import Panel from './panel/Panel'
import Menu from './dropdown-menu/menu'


const Navbar = () => {
  return (
    <nav className='sticky w-full bg-white z-20  h-28 flex justify-between items-center text-xl px-[2%]'>
        <Logo/>
        <Navigation/>
        <Panel/>
        <Menu/>

    </nav>
  )
}

export default Navbar