import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/header/Navbar.tsx'
import { SelectedPage } from './shared/types.ts'


function App() {

  const [selectedPage  , setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage , setIsTopOfPage] = useState<boolean>(false)

  const handelScroll = ()=>{
    window.scrollY === 0 && (
      setIsTopOfPage(true),
      setSelectedPage(SelectedPage.Home)
    )
    window.scrollY !== 0 && setIsTopOfPage(false)
  }

  useEffect(()=>{

window.addEventListener('scroll' , handelScroll)
return ()=>window.removeEventListener('scroll' , handelScroll)

  },[])

  return (
    <>
       <div className='bg-gray-20 '>
          <Navbar 
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
       </div>
    </>
  )
}

export default App
