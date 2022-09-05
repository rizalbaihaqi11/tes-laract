import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Navbar() {
  return (
    // <div className='flex p-2 mb-5 bg-slate-600 text-white'>
    //   <Link className='m-3' href='/'>Home</Link>
    //   <Link className='m-3' href='/dashboard'>Dashboard</Link>
    //   <Link className='m-3 hover:font-extrabold' href='/news'>News</Link>
    // </div>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link href={route('dashboard')} className="justify-between" as='button'>
                Dashboard
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link href={route('logout')} method='post' as='button'>Logout</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
