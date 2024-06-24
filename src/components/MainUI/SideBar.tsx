
import React from 'react'
import { House, Search, Library, Plus } from 'lucide-react'
import { playlists, Playlists } from '../../data'
import HomeView from './HomeView'

export default function SideBar(props: any) {
    return (
        <div className='bg-black w-1/6 h-full flex flex-col gap-2'>
            <HomeAndSearch setView={props.setView} />
            <PlaylistList setView={props.setView} />
        </div>
    )
}

function HomeAndSearch(props: any) {
    return (
        <div className='text-white/90 font-bold bg-zinc-900 rounded-lg h-36 flex flex-col justify-evenly pl-4'>
            <div className='flex flex-row items-center gap-3 hover:text-white cursor-pointer'>
                <House size={36} />
                <button onClick={() => props.setView('Home')}>Home</button>
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
            <div className='flex gap-2 w-1/2'>
                <Library />
                <p>Your Library</p>
            </div>
            <div className='flex justify-end w-1/2'>
                <Plus />
            </div>
        </div>
    )
}

function PlaylistList(props: any) {
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
            <div className='flex flex-col'>
                <p className='font-bold'>{props.title}</p>
                <p className='text-white/50'>{props.user}</p>
            </div>
        </div>
    )
}