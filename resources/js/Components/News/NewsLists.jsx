import React from 'react'

const isNews = (news) => {
  return news.map((data, i) => {
    return (
      <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.judul}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{data.deskripsi}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-inline">{data.kategori}</div> 
            <div className="badge badge-outline">{data.author}</div>
          </div>
        </div>
      </div>
    )
  })
}

const noNews = () => {
  return (
    "No News"
  )
}

export default function NewsLists({news}) {
  return !news ? noNews() : isNews(news)
}
