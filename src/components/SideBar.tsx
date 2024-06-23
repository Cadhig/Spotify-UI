
import { House, Search } from 'lucide-react'

export default function SideBar() {
    return (
        <div className='bg-black w-1/6 h-full'>
            <HomeAndSearch />
            <PlaylistList />
        </div>
    )
}

export function HomeAndSearch() {
    return (
        <div className='text-gray-300 font-bold bg-zinc-900 rounded-lg h-36 flex flex-col justify-evenly pl-4 m-2'>
            <div className='flex flex-row items-center gap-3 hover:text-white cursor-pointer'>
                <House size={36} />
                <p>Home</p>
            </div>
            <div className='flex flex-row items-center gap-3 hover:text-white cursor-pointer'>
                <Search size={36} />
                <p>Search</p>
            </div>
        </div>
    )
}

export function PlaylistList() {
    return (
        <div className='text-white bg-zinc-900 rounded-lg h-4/5 flex flex-col gap-4 pl-4 pt-4 m-2 overflow-auto'>
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
        </div>
    )
}

export function Playlist() {
    return (
        <div className='flex items-center gap-3'>
            <img src="src\assets\Placeholder.jpg" alt="palceholder" className='w-14 h-14 rounded' />
            <div className='flex flex-col'>
                <p className='font-bold'>Playlist Title</p>
                <p className='text-gray-400'>User</p>
            </div>
        </div>
    )
}