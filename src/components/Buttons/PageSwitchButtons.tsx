import { CircleChevronLeft, CircleChevronRight } from 'lucide-react'
export default function PageSwitchButtons() {

    return (
        <div className='text-white flex gap-2 items-center h-11'>
            <CircleChevronLeft size={28} />
            <CircleChevronRight size={28} />
        </div>
    )
}