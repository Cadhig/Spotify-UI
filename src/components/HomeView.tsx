import React from 'react'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'


export default function HomeView() {

    return (
        <div className="size-full bg-zinc-900 rounded-md flex flex-col gap-4 overflow-hidden">
            <PageSwitchButtons />
            <AlbumOrPlaylistButtons />
            <RecentlyPlayed />
            <TopAlbumsCarousel />
        </div>
    )
}

function PageSwitchButtons() {

    return (
        <div className='text-white flex gap-2 items-center h-11 ml-4'>
            <CircleChevronLeft size={28} />
            <CircleChevronRight size={28} />
        </div>
    )
}

function AlbumOrPlaylistButtons() {

    return (
        <div className='text-gray-200 flex gap-2 ml-4'>
            <button className='rounded-full bg-zinc-800 w-20 hover:bg-zinc-700 cursor-pointer'>Albums</button>
            <button className='rounded-full bg-zinc-800 w-20 hover:bg-zinc-700 cursor-pointer'>Playlists</button>
        </div>
    )
}

function RecentlyPlayed() {

    return (
        <div className='grid grid-rows-2 grid-cols-4 gap-3 ml-4 mr-4'>
            <RecentlyPlayedItems />
            <RecentlyPlayedItems />
            <RecentlyPlayedItems />
            <RecentlyPlayedItems />
            <RecentlyPlayedItems />
            <RecentlyPlayedItems />
            <RecentlyPlayedItems />
            <RecentlyPlayedItems />
        </div>
    )
}

function RecentlyPlayedItems() {

    return (
        <div className='bg-zinc-800 rounded h-14 flex p-1 items-center gap-2 text-gray-200 hover:bg-zinc-700 cursor-pointer'>
            <img src="src\assets\Placeholder.jpg" alt="placeholder" className='w-12 h-12' />
            <p>Playlist / Album</p>
        </div>
    )
}

function TopAlbumsCarousel() {

    return (
        <div className='ml-4 mr-4 flex flex-col gap-3'>
            <h2 className='text-white font-bold text-2xl'> Hot Today</h2>
            <div className='flex overflow-auto gap-5'>
                <TopAlbums />
                <TopAlbums />
                <TopAlbums />
                <TopAlbums />
                <TopAlbums />
                <TopAlbums />
                <TopAlbums />
                <TopAlbums />
                <TopAlbums />
                <TopAlbums />
            </div>
        </div>
    )
}


function TopAlbums() {

    return (
        <div className='bg-zinc-800 rounded flex flex-col min-w-52 min-h-60 items-center justify-center p-4 mb-2 hover:bg-zinc-700 cursor-pointer'>
            <img src="src\assets\Placeholder.jpg" alt="placeholder" className='w-full h-full' />
            <div className='text-white w-full'>
                <p className='font-bold'>Album Name</p>
                <p className='text-gray-400'>Artist</p>
            </div>
        </div>
    )
}