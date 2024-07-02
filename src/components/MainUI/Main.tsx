
import HomeView from './HomeView'
import AlbumView from './AlbumView'

export default function Main(props: any) {
    if (props.view === 'Home') {
        return (
            <HomeView setView={props.setView} />
        )
    } else {
        return <AlbumView />
    }
}