import SideBar from './components/SideBar'
import BottomBar from './components/BottomBar'
import HomeView from './components/HomeView'
import AlbumView from './components/AlbumView'
function App() {


  return (
    <div className='flex flex-col h-full bg-black'>
      <div className='flex flex-row h-full gap-2 m-2'>
        <SideBar></SideBar>
        <HomeView></HomeView>
      </div>
      <BottomBar></BottomBar>
    </div>
  )
}

export default App
