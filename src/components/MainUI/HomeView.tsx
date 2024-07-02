
import { RecentlyPlayedItem, recentlyPlayedList, topAlbums, artists, topSongs } from '../../data'
import PageSwitchButtons from '../Buttons/PageSwitchButtons'
import ArtistCarousel from '../Interactivity/ArtistCarousel'
import AlbumCarousel from '../Interactivity/AlbumCarousel'
import { ViewChangable } from '../../App'

export default function HomeView(props: ViewChangable) {

    return (
        <div className="size-full bg-zinc-900 rounded-md flex flex-col gap-4 overflow-auto p-4">
            <PageSwitchButtons setView={props.setView} />
            <AlbumOrPlaylistButtons />
            <RecentlyPlayed setView={props.setView} />
            <TopAlbumsCarousel setView={props.setView} />
            <TopArtistsCarousel setView={props.setView} />
            <TopSongsCarousel setView={props.setView} />
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

function RecentlyPlayed(props: ViewChangable) {

    return (
        <div className='grid grid-rows-2 grid-cols-4 gap-3'>
            {recentlyPlayedList.map(({ image, title }, index) => {
                return <RecentlyPlayedItems setView={props.setView} key={index} image={image} title={title} />
            })}
        </div>
    )
}

function RecentlyPlayedItems(props: RecentlyPlayedItem & ViewChangable) {

    return (
        <div className='bg-white/5 rounded h-14 flex p-1 items-center gap-2 text-gray-200 hover:bg-white/10 cursor-pointer' onClick={() => props.setView('Album')}>
            <img src={props.image} alt="placeholder" className='w-12 h-12' />
            <p className='truncate cursor-pointer hover:text-white'>{props.title}</p>
        </div>
    )
}


function TopAlbumsCarousel(props: ViewChangable) {
    return (
        <AlbumCarousel header={'Hot Today'} contents={topAlbums} setView={props.setView} />

    )
}

function TopSongsCarousel(props: ViewChangable) {

    return (
        <AlbumCarousel header={'Top Songs in the USA'} contents={topSongs} setView={props.setView} />
    )
}

function TopArtistsCarousel(props: ViewChangable) {
    return (
        <ArtistCarousel header={'Top Artists in the USA'} contents={artists} setView={props.setView} />

    )
}