import React from 'react'
import { Link } from 'react-router-dom';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { routing_config } from '../App';

export default function Header() {
    return (
        <div className='max-w-[90%] w-[98%] mx-auto flex items-center justify-between text-white z-30'>
            <div className='flex items-center gap-16'>
                <Link to='/' className='text-3xl uppercase'>
                    <span className='text-[#E21717] font-[800]'>Movie</span>
                    {" "}
                    <span className='text-white font-[200]'>Land</span>
                </Link>
                <nav className=''>
                    <ul className='flex items-center gap-9'>
                        {routing_config.map((route) => (
                            <Link key={route.id} className="uppercase text-white text-sm font-bold" to={route.path}>{route.nav_title}</Link>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className='flex items-center gap-9'>
                <form className='flex bg-red-800/50 rounded-md'>
                    <input type="search" className='bg-transparent outline-none p-3 font-bold uppercase'/>
                    <button type='submit' className='px-2'>
                        <YoutubeSearchedForIcon className='cursor-pointer'/>
                    </button>
                </form>
                <div className='flex items-center gap-9'>
                    <NotificationsActiveIcon className='cursor-pointer'/>
                    <img className='h-[50px] w-[50px] rounded-full'
                    src="https://media.licdn.com/dms/image/C5603AQH-leGj9lP6aQ/profile-displayphoto-shrink_400_400/0/1602593856364?e=1683158400&v=beta&t=liaxD1JEgd-ATBEPELmqRQCZlNSIb2NJYaJVpojm2qk" alt="San" />
                </div>
            </div>
        </div>
    )
}
