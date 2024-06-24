import React from 'react'
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'
import { RecentlyPlayedItem, TopAlbum, recentlyPlayedList, topAlbums } from '../data'


export default function HomeView() {

    return (
        <div className="size-full bg-zinc-900 rounded-md flex flex-col gap-4 overflow-hidden p-4">
            <PageSwitchButtons />
            <AlbumOrPlaylistButtons />
            <RecentlyPlayed />
            <TopAlbumsCarousel />
        </div>
    )
}

function PageSwitchButtons() {

    return (
        <div className='text-white flex gap-2 items-center h-11'>
            <CircleChevronLeft size={28} />
            <CircleChevronRight size={28} />
        </div>
    )
}

function AlbumOrPlaylistButtons() {

    return (
        <div className='text-gray-200 flex gap-2'>
            <button className='rounded-full bg-white/5 w-20 hover:bg-white/10 cursor-pointer'>Albums</button>
            <button className='rounded-full bg-white/5 w-20 hover:bg-white/10 cursor-pointer'>Playlists</button>
        </div>
    )
}

function RecentlyPlayed() {

    return (
        <div className='grid grid-rows-2 grid-cols-4 gap-3'>
            {recentlyPlayedList.map(({ image, title }, index) => {
                return <RecentlyPlayedItems key={index} image={image} title={title} />
            })}
        </div>
    )
}

function RecentlyPlayedItems(props: RecentlyPlayedItem) {

    return (
        <div className='bg-white/5 rounded h-14 flex p-1 items-center gap-2 text-gray-200 hover:bg-white/10 cursor-pointer'>
            <img src={props.image} alt="placeholder" className='w-12 h-12' />
            <p>{props.title}</p>
        </div>
    )
}


function TopAlbumsCarousel() {

    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-white font-bold text-2xl'> Hot Today</h2>
            <div className='flex overflow-auto gap-4'>
                {topAlbums.map((props, index) => {
                    return <TopAlbums key={index} {...props} />
                })}
            </div>
        </div>
    )
}


function TopAlbums(props: TopAlbum) {

    return (
        <div className='bg-white/5 rounded flex flex-col min-w-52 min-h-60 items-center justify-center p-4 mb-2 hover:bg-white/10 cursor-pointer'>
            <img src={props.image} alt="placeholder" className='w-full h-full' />
            <div className='text-white w-full'>
                <p className='font-bold'>{props.album}</p>
                <p className='text-white/50'>{props.artist}</p>
            </div>
        </div>
    )
}