import { Album } from "../../data"

export default function AlbumCarousel(props: any) {

    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-white font-bold text-2xl'>{props.header}</h2>
            <div className='flex overflow-auto gap-4'>
                {props.contents.map((props: any, index: number) => {
                    return <Albums key={index} {...props} />
                })}
            </div>
        </div>
    )
}

function Albums(props: Album) {

    return (
        <div className='bg-white/5 rounded flex flex-col min-w-52 min-h-60 items-center justify-center p-4 mb-2 hover:bg-white/10 cursor-pointer'>
            <img src={props.image} alt="placeholder" className='w-full h-full' />
            <div className='text-white w-full'>
                <p className='font-bold truncate cursor-pointer'>{props.album}</p>
                <p className='text-white/50 truncate cursor-pointer hover:text-white/80'>{props.artist}</p>
            </div>
        </div>
    )
}