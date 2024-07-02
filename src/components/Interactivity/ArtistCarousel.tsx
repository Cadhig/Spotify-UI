import { Artist } from "../../data"

export default function ArtistCarousel(props: any) {

    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-white font-bold text-2xl'>{props.header}</h2>
            <div className='flex overflow-auto gap-4'>
                {props.contents.map((props: any, index: number) => {
                    return <Artists key={index} {...props} />
                })}
            </div>
        </div>
    )
}

function Artists(props: Artist) {

    return (
        <div className="mb-2">
            <div className='bg-white/5 rounded-full flex flex-col min-w-52 h-52 items-center justify-center p-4 hover:bg-white/10 cursor-pointer'>
                <img src={props.image} alt="placeholder" className='w-full h-full rounded-full' />
            </div>
            <div className='text-white/90 w-full'>
                <p className='font-bold truncate cursor-pointer hover:text-white'>{props.name}</p>
            </div>
        </div>
    )
}