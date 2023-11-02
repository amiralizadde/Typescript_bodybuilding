import React from 'react'
import {Bars3Icon , XMarkIcon} from "@heroicons/react/24/solid"
import logo from '../../assets/Logo.png'
import Link from './Link'
import { SelectedPage } from '../../shared/types'

type NavbarProps = {
  selectedPage:SelectedPage,
  setSelectedPage:(value:SelectedPage)=>void
}

const Navbar = ({selectedPage , setSelectedPage}: NavbarProps) => {
  return (
    <nav>
      <div className='flex items-center justify-between fixed top-0 z-30 w-full py-6'>
        <div className='flex items-center justify-between gap-8 text-sm'>
            <Link page="Home" 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />
            <Link page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />  
            <Link page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            />  
            <Link page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            /> 
        </div>
        <div>
          <p>Sign in</p>
          <button>Become a Member</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar