import { Link } from '@inertiajs/inertia-react'
import React from 'react'

export default function Pagination({meta}) {
  const current_page = meta.current_page
  const links = meta.links
  const prev = links[0].url
  const next = links[(links.length-1)].url
  links[0].label === '&laquo; Previous' && links.shift()
  links[(links.length-1)].label === 'Next &raquo;' && links.pop()
  // console.log(meta)
  return (
    <div className="btn-group my-2 mx-5">
      {prev && <Link href={prev} className="btn">«</Link>}
      {links.map((data, i) => {
        return (
            <Link href={data.url} key={i} className={data.active ? 'btn btn-active btn-disabled' : 'btn'}>{data.label}</Link>
          )
      })}
      {next && <Link href={next} className="btn">»</Link>}
    </div>
  )
}
