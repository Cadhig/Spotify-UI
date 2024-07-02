
import { House, Search, Library, Plus } from 'lucide-react'
import { playlists, Playlists } from '../../data'
import { ViewChangable } from '../../App'

export default function SideBar(props: ViewChangable) {
    return (
        <div className='bg-black w-1/6 h-full flex flex-col gap-2'>
            <HomeAndSearch setView={props.setView} />
            <PlaylistList setView={props.setView} />
        </div>
    )
}

function HomeAndSearch(props: ViewChangable) {
    return (
        <div className='text-white/50 font-bold bg-zinc-900 rounded-lg h-36 flex flex-col justify-evenly pl-4'>
            <div className='flex flex-row items-center gap-3 hover:text-white cursor-pointer' onClick={() => props.setView('Home')}>
                <House size={36} />
                <button>Home</button>
            </div>
            <div className='flex flex-row items-center gap-3 hover:text-white cursor-pointer'>
                <Search size={36} />
                <p>Search</p>
            </div>
        </div>
    )
}

function LibraryBar() {

    return (
        <div className='flex text-white/50'>
            <div className='flex gap-2 w-full'>
                <Library className='cursor-pointer' />
                <p className=' cursor-pointer'>Your Library</p>
            </div>
            <div className='flex justify-end w-1/2 cursor-pointer'>
                <Plus />
            </div>
        </div>
    )
}

function PlaylistList(props: ViewChangable) {
    return (
        <div className='text-white bg-zinc-900 rounded-lg h-full flex flex-col gap-1 p-4 overflow-auto'>
            <LibraryBar />
            {playlists.map((playlistItem, index) => {
                return <Playlist onClick={() => props.setView('Album')} key={index} image={playlistItem.image} title={playlistItem.title} user={playlistItem.user} />
            })}
        </div>
    )
}

function Playlist(props: Playlists & { onClick: () => any }) {
    return (
        <div className='flex items-center gap-3 hover:bg-white/10 rounded p-2 cursor-pointer' onClick={props.onClick}>
            <img src={props.image} alt="palceholder" className='w-14 h-14 rounded' />
            <div className='flex flex-col w-1/2'>
                <p className='font-bold truncate cursor-pointer'>{props.title}</p>
                <p className='text-white/50 truncate cursor-pointer hover:text-white/80'>{props.user}</p>
            </div>
        </div>
    )
}