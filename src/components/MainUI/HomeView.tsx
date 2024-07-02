import React from 'react'
import { RecentlyPlayedItem, recentlyPlayedList, topAlbums, artists } from '../../data'
import AlbumCarousel from '../Interactivity/AlbumCarousel'
import PageSwitchButtons from '../Buttons/PageSwitchButtons'
import ArtistCarousel from '../Interactivity/ArtistCarousel'

export default function HomeView() {

    return (
        <div className="size-full bg-zinc-900 rounded-md flex flex-col gap-4 overflow-auto p-4">
            <PageSwitchButtons />
            <AlbumOrPlaylistButtons />
            <RecentlyPlayed />
            <TopAlbumsCarousel />
            <TopArtistsCarousel />
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
            <p className='truncate'>{props.title}</p>
        </div>
    )
}


function TopAlbumsCarousel() {
    return (
        <AlbumCarousel header={'Hot Today'} contents={topAlbums} />

    )
}

function TopArtistsCarousel() {
    return (
        <ArtistCarousel header={'Top Artists in the USA'} contents={artists} />

    )
}