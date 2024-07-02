import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'

export default function PageSwitchButtons() {

    return (
        <div className='text-white flex gap-2 items-center h-11'>
            <CircleChevronLeft size={28} className='text-white/50 hover:text-white/80 cursor-pointer' />
            <CircleChevronRight size={28} className='text-white/50 hover:text-white/80 cursor-pointer' />
        </div>
    )
}