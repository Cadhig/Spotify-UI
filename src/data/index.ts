export interface Album {
    image: string,
    album: string,
    artist: string,
}
export const topAlbums: Album[] = [
    {
        image: 'src\\assets\\TheTorturedPoetsDepartment.jpg',
        album: "The Tortured Poets ...",
        artist: "Taylor Swift"
    },
    {
        image: 'src\\assets\\WeDontTrustYou.jpg',
        album: "We Dont Trust You",
        artist: "Future & Metro Boomin"
    },
    {
        image: 'src\\assets\\Guts.jpg',
        album: 'Guts',
        artist: "Olivia Rodrigo"
    },
    {
        image: 'src\\assets\\HardstonePsycho.jpg',
        album: "Hardstone Psycho",
        artist: "Don Toliver"
    },
    {
        image: 'src\\assets\\HitMeHardAndSoft.jpg',
        album: "Hit Me Hard and Soft",
        artist: "Billie Eilish"
    },
    {
        image: 'src\\assets\\NewWorldDepression.jpg',
        album: 'New World Depression',
        artist: '$uicideboy$'
    },
    {
        image: 'src\\assets\\OneThingAtATime.jpg',
        album: "One Thing at a Time",
        artist: "Morgan Wallen"
    },
    {
        image: 'src\\assets\\ZachBryan.jpg',
        album: "Zach Bryan",
        artist: "Zach Bryan"
    }
]

export interface RecentlyPlayedItem {
    image: string,
    title: string
}

export const recentlyPlayedList: RecentlyPlayedItem[] = [{
    image: `src\\assets\\WeDontTrustYou.jpg`,
    title: 'We Dont Trust You'
},
{
    image: `src\\assets\\TheNewAbnormal.jpg`,
    title: 'The New Abnormal'
},
{
    image: `src\\assets\\DemonDays.jpg`,
    title: 'Demon Days'
},
{
    image: `src\\assets\\Jaded.jpg`,
    title: 'Jaded'
},
{
    image: `src\\assets\\Anya.jpg`,
    title: 'Anime Openings'
},
{
    image: `src\\assets\\MetalPlaylist.jpg`,
    title: 'Only Metal'
},
{
    image: `src\\assets\\HowToSurviveAFuneral.jpg`,
    title: 'How To Survive a Funeral'
},
{
    image: `src\\assets\\ThePlaceIFeelSafest.jpg`,
    title: 'The Place I Feel Safest'
},
]

export interface Playlists {
    image: string,
    title: string,
    user: string,
}

export const playlists: Playlists[] = [{
    image: `src\\assets\\Anya.jpg`,
    title: 'Anime Openings',
    user: 'cadhig'
},
{
    image: `src\\assets\\Acoustic.jpg`,
    title: 'Acoustic Chill',
    user: 'guitarguy'
},
{
    image: `src\\assets\\MetalPlaylist.jpg`,
    title: 'Only Metal',
    user: 'cadhig'
},
{
    image: `src\\assets\\Lofi.jpg`,
    title: 'Lofi Beats',
    user: 'lofigirl'
},
{
    image: `src\\assets\\Nostalgia.jpg`,
    title: '2000s Nostalgia',
    user: 'cadhig'
},
{
    image: `src\\assets\\Got.jpg`,
    title: 'GOT Soundtrack',
    user: 'jonsnow'
},
{
    image: `src\\assets\\Bmth.jpg`,
    title: 'BMTH ONLY!',
    user: 'cadhig'
},
]

export interface Artist {
    image: string,
    name: string,
}

export const artists: Artist[] = [
    {
        image: `src\\assets\\TaylorSwift.jpg`,
        name: 'Taylor Swift'
    },
    {
        image: `src\\assets\\LukeCombs.jpg`,
        name: 'Luke Combs'
    },
    {
        image: `src\\assets\\MorganWallen.jpg`,
        name: 'Morgan Wallen'
    },
    {
        image: `src\\assets\\BillieEilish.jpg`,
        name: 'Billie Eilish'
    },
    {
        image: `src\\assets\\SabrinaCarpenter.jpg`,
        name: 'Sabrina Carpenter'
    },
    {
        image: `src\\assets\\KendrickLamar.jpg`,
        name: 'Kendrick Lamar'
    },
    {
        image: `src\\assets\\ZachBryanP.jpg`,
        name: 'Zach Bryan'
    },
    {
        image: `src\\assets\\PostMalone.jpg`,
        name: 'Post Malone'
    },
    {
        image: `src\\assets\\Sza.jpg`,
        name: 'Sza'
    },
    {
        image: `src\\assets\\JellyRoll.jpg`,
        name: 'Jelly Roll'
    },
]