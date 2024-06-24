import React from 'react'
import SideBar from './components/MainUI/SideBar'
import BottomBar from './components/MainUI/BottomBar'
import Main from './components/MainUI/Main'
function App() {
  const [view, setView] = React.useState('Home')

  return (
    <div className='flex flex-col h-full bg-black'>
      <div className='flex flex-row h-full gap-2 m-2 overflow-auto'>
        <SideBar setView={setView}></SideBar>
        <Main view={view} />
      </div>
      <BottomBar></BottomBar>
    </div>
  )
}

export default App
