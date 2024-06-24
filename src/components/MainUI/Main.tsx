import React from 'react'
import HomeView from './HomeView'
import AlbumView from './AlbumView'

export default function Main(props: any) {
    if (props.view === 'Home') {
        return (
            <HomeView />
        )
    } else {
        return <AlbumView />
    }
}