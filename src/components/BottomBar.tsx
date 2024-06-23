import React from 'react'
import { Shuffle, SkipBack, CirclePlay, SkipForward, Repeat, Volume2, CirclePause } from 'lucide-react'

export default function BottomBar() {
    return (
        <div className='bg-black w-full h-20'>
            <div className='flex m-3 items-center'>
                <CurrentSong />
                <MusicActions />
                <VolumeBar />
            </div>
        </div>
    )
}

export function PlayorPauseButton() {
    const [paused, setPaused] = React.useState(true)
    let playState;

    if (paused === true) {
        playState = <CirclePlay size={48} />
    } else {
        playState = <CirclePause size={48} />
    }
    return (
        <button onClick={() => {
            if (paused === true) {
                setPaused(false)
            } else {
                setPaused(true)
            }
        }}>{playState}</button>
    )
}

export function MusicActions() {

    return (
        <div className='w-1/2 flex flex-col justify-center items-center gap-1 h-full text-lg'>
            <div className='text-white flex gap-2 justify-center items-center h-full'>
                <Shuffle size={16} />
                <SkipBack size={32} />
                <PlayorPauseButton />
                <SkipForward size={32} />
                <Repeat size={16} />
            </div>
            <div id='MockBar' className='bg-white w-1/2 h-1'>
            </div>
        </div>
    )
}

export function CurrentSong() {

    return (
        <div className='flex justify-start items-center w-1/4'>
            <img src="src\assets\Placeholder.jpg" alt="" className='w-16 h-14' />
            <div className='ml-3 text-white'>
                <p>Song Name</p>
                <p className='text-gray-500'>Artist</p>
            </div>
        </div>
    )
}

export function VolumeBar() {

    return (
        <div className='text-white flex items-center gap-3 w-1/4 justify-end'>
            <Volume2 />
            <div id='MockVol' className='bg-white w-28 h-1'>
            </div>
        </div>
    )
}