import TheTorturedPoetsDepartment from '../assets/TheTorturedPoetsDepartment.jpg'
import WeDontTrustYou from '../assets/WeDontTrustYou.jpg'
import Guts from '../assets/Guts.jpg'
import HardstonePsycho from '../assets/HardstonePsycho.jpg'
import NewWorldDepression from '../assets/NewWorldDepression.jpg'
import Nostalgia from '../assets/Nostalgia.jpg'
import OneThingAtATime from '../assets/OneThingAtATime.jpg'
import PostMalone from '../assets/PostMalone.jpg'
import SabrinaCarpenter from '../assets/SabrinaCarpenter.jpg'
import Sza from '../assets/Sza.jpg'
import TaylorSwift from '../assets/TaylorSwift.jpg'
import TheNewAbnormal from '../assets/TheNewAbnormal.jpg'
import ThePlaceIFeelSafest from '../assets/ThePlaceIFeelSafest.jpg'
import ZachBryan from '../assets/ZachBryan.jpg'
import ZachBryanP from '../assets/ZachBryanP.jpg'
import HitMeHardAndSoft from '../assets/HitMeHardAndSoft.jpg'
import HowToSurviveAFuneral from '../assets/HowToSurviveAFuneral.jpg'
import DemonDays from '../assets/DemonDays.jpg'
import Jaded from '../assets/Jaded.jpg'
import Anya from '../assets/Anya.jpg'
import Metal from '../assets/MetalPlaylist.jpg'
import Acoustic from '../assets/Acoustic.jpg'
import Lofi from '../assets/Lofi.jpg'
import Got from '../assets/Got.jpg'
import Bmth from '../assets/Bmth.jpg'
import LukeCombs from '../assets/LukeCombs.jpg'
import MorganWallen from '../assets/MorganWallen.jpg'
import JellyRoll from '../assets/JellyRoll.jpg'
import KendrickLamar from '../assets/KendrickLamar.jpg'
import BillieEilish from '../assets/BillieEilish.jpg'
import IHadSomeHelp from '../assets/IHadSomeHelp.jpg'
import ABarSong from '../assets/ABarSong.jpg'
import NotLikeUs from '../assets/NotLikeUs.jpg'
import Espresso from '../assets/Espresso.jpg'
import Please from '../assets/PleasePleasePlease.jpg'
import MillionDollarBaby from '../assets/MillionDollarBaby.jpg'
import TooSweet from '../assets/TooSweet.jpg'
import BeautifulThings from '../assets/BeautifulThings.jpg'
import LoseControl from '../assets/LoseControl.jpg'
import BirdsOfAFeather from '../assets/BirdsOfAFeather.jpg'

export interface Album {
    image: string,
    album: string,
    artist: string,
}
export const topAlbums: Album[] = [
    {
        image: TheTorturedPoetsDepartment,
        album: "The Tortured Poets Department",
        artist: "Taylor Swift"
    },
    {
        image: WeDontTrustYou,
        album: "We Dont Trust You",
        artist: "Future & Metro Boomin"
    },
    {
        image: Guts,
        album: 'Guts',
        artist: "Olivia Rodrigo"
    },
    {
        image: HardstonePsycho,
        album: "Hardstone Psycho",
        artist: "Don Toliver"
    },
    {
        image: HitMeHardAndSoft,
        album: "Hit Me Hard and Soft",
        artist: "Billie Eilish"
    },
    {
        image: NewWorldDepression,
        album: 'New World Depression',
        artist: '$uicideboy$'
    },
    {
        image: OneThingAtATime,
        album: "One Thing at a Time",
        artist: "Morgan Wallen"
    },
    {
        image: ZachBryan,
        album: "Zach Bryan",
        artist: "Zach Bryan"
    }
]

export const topSongs: Album[] = [
    {
        image: IHadSomeHelp,
        album: "I Had Some Help",
        artist: "Post Malone feat. Morgan Wallen"
    },
    {
        image: ABarSong,
        album: "A Bar Song (Tipsy)",
        artist: "Shaboozey"
    },
    {
        image: NotLikeUs,
        album: 'Not Like Us',
        artist: "Kendrick Lamar"
    },
    {
        image: Espresso,
        album: "Espresso",
        artist: "Sabrina Carpenter"
    },
    {
        image: Please,
        album: "Please Please Please",
        artist: "Sabrina Carpenter"
    },
    {
        image: MillionDollarBaby,
        album: 'Million Dollar Baby',
        artist: 'Tommy Richman'
    },
    {
        image: TooSweet,
        album: "Too Sweet",
        artist: "Hozier"
    },
    {
        image: BeautifulThings,
        album: "Beautiful Things",
        artist: "Benson Boone"
    },
    {
        image: LoseControl,
        album: "Lose Control",
        artist: "Teddy Swims"
    },
    {
        image: BirdsOfAFeather,
        album: "Birds Of A Feather",
        artist: "Billie Eilish"
    }
]

export interface RecentlyPlayedItem {
    image: string,
    title: string
}

export const recentlyPlayedList: RecentlyPlayedItem[] = [{
    image: WeDontTrustYou,
    title: 'We Dont Trust You'
},
{
    image: TheNewAbnormal,
    title: 'The New Abnormal'
},
{
    image: DemonDays,
    title: 'Demon Days'
},
{
    image: Jaded,
    title: 'Jaded'
},
{
    image: Anya,
    title: 'Anime Openings'
},
{
    image: Metal,
    title: 'Only Metal'
},
{
    image: HowToSurviveAFuneral,
    title: 'How To Survive a Funeral'
},
{
    image: ThePlaceIFeelSafest,
    title: 'The Place I Feel Safest'
},
]

export interface Playlists {
    image: string,
    title: string,
    user: string,
}

export const playlists: Playlists[] = [{
    image: Anya,
    title: 'Anime Openings',
    user: 'cadhig'
},
{
    image: Acoustic,
    title: 'Acoustic Chill',
    user: 'guitarguy'
},
{
    image: Metal,
    title: 'Only Metal',
    user: 'cadhig'
},
{
    image: Lofi,
    title: 'Lofi Beats',
    user: 'lofigirl'
},
{
    image: Nostalgia,
    title: '2000s Nostalgia',
    user: 'cadhig'
},
{
    image: Got,
    title: 'GOT Soundtrack',
    user: 'jonsnow'
},
{
    image: Bmth,
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
        image: TaylorSwift,
        name: 'Taylor Swift'
    },
    {
        image: LukeCombs,
        name: 'Luke Combs'
    },
    {
        image: MorganWallen,
        name: 'Morgan Wallen'
    },
    {
        image: BillieEilish,
        name: 'Billie Eilish'
    },
    {
        image: SabrinaCarpenter,
        name: 'Sabrina Carpenter'
    },
    {
        image: KendrickLamar,
        name: 'Kendrick Lamar'
    },
    {
        image: ZachBryanP,
        name: 'Zach Bryan'
    },
    {
        image: PostMalone,
        name: 'Post Malone'
    },
    {
        image: Sza,
        name: 'Sza'
    },
    {
        image: JellyRoll,
        name: 'Jelly Roll'
    },
]