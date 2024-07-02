import { ViewChangable } from "../../App"
import type { Artist } from "../../data"


interface ArtistCarouselProps { header: string, contents: any[], setView: (view: string) => void }

export default function ArtistCarousel(props: ArtistCarouselProps) {

    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-white font-bold text-2xl'>{props.header}</h2>
            <div className='flex overflow-auto gap-4'>
                {props.contents.map((artistData: any, index: number) => {
                    return <Artist key={index} {...artistData} setView={props.setView} />
                })}
            </div>
        </div>
    )
}

function Artist(props: Artist & ViewChangable) {

    return (
        <div className="mb-2">
            <div className='bg-white/5 rounded-full flex flex-col min-w-52 h-52 items-center justify-center p-4 hover:bg-white/10 cursor-pointer' onClick={() => props.setView('Album')}>
                <img src={props.image} alt="placeholder" className='w-full h-full rounded-full' />
            </div>
            <div className='text-white/90 w-full'>
                <p className='font-bold truncate cursor-pointer hover:text-white'>{props.name}</p>
            </div>
        </div>
    )
}