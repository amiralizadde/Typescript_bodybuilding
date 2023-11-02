import { useState } from 'react'
import './App.css'
import Navbar from './components/header/Navbar.tsx'
import { SelectedPage } from './shared/types.ts'


function App() {

  const [selectedPage  , setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <>
       <div className='bg-gray-20 '>
          <Navbar 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
       </div>
    </>
  )
}

export default App
