import React from 'react';
import { Link } from 'react-router-dom'

export default function Nav () { {
        return (
            <div>
                <Link to='/dashboard'>
                    <button className=''>Home</button>
                </Link>
                <Link to='/post'>
                    <button className=''>New Post</button>
                </Link>
                <Link to='/'>
                    <button className=''>Logout</button>
                </Link>
            </div>
        )
    }
}

