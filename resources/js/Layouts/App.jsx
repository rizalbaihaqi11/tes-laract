import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

export default function App({children, props, title}) {
  console.log(props)
  return (
    <div className='min-h-screen bg-slate-50'>
      <Head title={title}/>
      <Navbar user={props.auth.user}/>
      {children}
    </div>
  )
}
