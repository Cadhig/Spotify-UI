import React from 'react'
import { Shuffle, SkipBack, CirclePlay, SkipForward, Repeat, Volume2, CirclePause } from 'lucide-react'
import TheDeathOfPeaceOfMind from '../../assets/TheDeathOfPeaceOfMind.jpg'

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
    return (
        <button onClick={() => setPaused(!paused)}>{paused === true ? <CirclePlay size={48} className='text-white/70 cursor-pointer hover:text-white/80' /> : <CirclePause size={48} className='text-white/70 cursor-pointer hover:text-white/80' />}</button>
    )
}

function MusicActions() {

    return (
        <div className='w-1/2 flex flex-col justify-center items-center gap-1 h-full text-lg'>
            <div className='text-white flex gap-2 justify-center items-center h-full'>
                <Shuffle size={16} className='text-white/50 cursor-pointer hover:text-white/80' />
                <SkipBack size={32} className='text-white/50 cursor-pointer hover:text-white/80' />
                <PlayorPauseButton />
                <SkipForward size={32} className='text-white/50 cursor-pointer hover:text-white/80' />
                <Repeat size={16} className='text-white/50 cursor-pointer hover:text-white/80' />
            </div>
            <div id='MockBar' className='bg-white/50 w-1/2 h-1 rounded-full'>
            </div>
        </div>
    )
}

function CurrentSong() {

    return (
        <div className='flex justify-start items-center w-1/4'>
            <img src={TheDeathOfPeaceOfMind} alt="" className='w-16 h-14' />
            <div className='ml-3 text-white'>
                <p>Like a Villain</p>
                <p className='text-white/50'>Bad Omens</p>
            </div>
        </div>
    )
}

function VolumeBar() {

    return (
        <div className='text-white flex items-center gap-3 w-1/4 justify-end'>
            <Volume2 />
            <div id='MockVol' className='bg-white/50 w-28 h-1 rounded-full'>
            </div>
        </div>
    )
}