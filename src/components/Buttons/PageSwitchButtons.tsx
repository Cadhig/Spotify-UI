import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'
import { ViewChangable } from '../../App'

export default function PageSwitchButtons(props: ViewChangable) {

    return (
        <div className='text-white flex gap-2 items-center h-11'>
            <CircleChevronLeft size={28} className='text-white/50 hover:text-white/80 cursor-pointer' onClick={() => props.setView('Home')} />
            <CircleChevronRight size={28} className='text-white/50 hover:text-white/80 cursor-pointer' />
        </div>
    )
}