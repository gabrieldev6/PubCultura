
import Header from './components/header'

import { Outlet } from 'react-router-dom'


function App() {

  return (
    <div className='w-4/5 min-w-[1200px] max-w-[1200px] h-full bg-white flex justify-center'>
      <ul className='w-full'>
        <li><Header></Header></li>
        <li className='w-full flex justify-center'><Outlet/></li>
      </ul>
      
      
      
      

      
    </div>
  )
}

export default App
