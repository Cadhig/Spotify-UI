import PageSwitchButtons from "../Buttons/PageSwitchButtons"
import placeHolder from '../../assets/Placeholder.jpg'
import { PlayorPauseButton } from "./BottomBar"
import { Shuffle } from "lucide-react"
import { Songs, topSongs } from "../../data"
export default function AlbumView() {
    return (
        <div className="size-full bg-zinc-900 rounded-md flex flex-col gap-4 overflow-auto p-4">
            <PageSwitchButtons />
            <PlaylistHeader />
            <PlaylistSongs />
        </div>
    )
}

function PlaylistHeader() {

    return (
        <div className="text-white flex flex-row items-center gap-4">
            <img src={placeHolder} alt="placeholder" className="h-52 w-52" />
            <div className="flex flex-col gap-12">
                <p className="text-white/50">Playlist</p>
                <h2 className='text-white font-bold text-5xl cursor-pointer'>Playlist</h2>
                <div className="flex flex-row gap-4">
                    <p className="cursor-pointer hover:underline">Username</p>
                    <p className="text-white/50">123 songs</p>
                </div>
            </div>
        </div>
    )
}

function PlaylistSongs() {

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-white/5 h-[1px] w-full">
            </div>
            <div className="flex items-center gap-4">
                <PlayorPauseButton />
                <Shuffle size={32} className='text-white/50 cursor-pointer hover:text-white/80' />
            </div>
            <div className="flex text-white/50 gap-4">
                <div className="flex gap-4 w-1/3">
                    <p>#</p>
                    <p>Title</p>
                </div>
                <p className="w-1/3">Album</p>
                <p>Date added</p>
            </div>
            <div className="bg-white/5 h-[1px] w-full"></div>
            {topSongs.map((props: any, index: number) => {
                return <PlaylistSongsList key={index} {...props} />
            })}

        </div>
    )
}

function PlaylistSongsList(props: Songs) {

    return (
        <div className="text-white flex gap-4 items-center hover:bg-white/10 cursor-pointer p-2 rounded">
            <div className="w-1/3 flex gap-4 items-center">
                <div>
                    <p>{props.number}</p>
                </div>
                <div className="flex gap-4" >
                    <img src={props.image} alt="" className="w-12 h-12" />
                    <div>
                        <p>{props.album}</p>
                        <p className="text-white/50 hover:text-white hover:underline">{props.artist}</p>
                    </div>
                </div>
            </div>
            <div className="w-1/3">
                <p className="text-white/50 hover:text-white hover:underline">{props.album}</p>
            </div>
            <div>
                <p className="text-white/50">{props.dateAdded}</p>
            </div>
        </div>
    )
}