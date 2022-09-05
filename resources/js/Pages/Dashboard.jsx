import React, { useEffect, useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    const [judul, setJudul] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [kategori, setKategori] = useState("")
    const [isNotif, setIsNotif] = useState(false)
    const [lblSubmit, setLblSubmit] = useState("SUBMIT")
    const [idNews, setIdNews] = useState(0)

    const handleReset = () => {
        setJudul('')
        setDeskripsi('')
        setKategori('')
        setLblSubmit('SUBMIT')
    }

    const handleSubmit = () => {
        const data = {
            judul, deskripsi, kategori
        }
        Inertia.post("/news", data)
        setIsNotif(true)
        handleReset()
    }

    const handleEdit = (editId, editJudul, editDeskripsi, editKategori) => {
        setLblSubmit('UPDATE')
        setIdNews(editId)
        setJudul(editJudul)
        setDeskripsi(editDeskripsi)
        setKategori(editKategori)
    }

    const handleUpdate = () => {
        const data = {
            judul, deskripsi, kategori
        }
        Inertia.put("/news/" + idNews, data)
        setIsNotif(true)
        handleReset()
    }

    const handleDelete = (id) => {
        Inertia.delete("/news/" + id)
        setIsNotif(true)
    }

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get('/news/' + props.auth.user.email)
        }
        return;
    }, [])
    // console.log(props)

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200"> 
                            {isNotif && (<div className="alert alert-success shadow-lg mb-2">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{props.flash.message}</span>
                            </div>
                            </div> )}
                            <input type="text" placeholder="Judul" className="my-2 input input-bordered w-full" onChange={(judul) => setJudul(judul.target.value)} value={judul}/>
                            <input type="text" placeholder="Deskripsi" className="my-2 input input-bordered w-full" onChange={(deskripsi) => setDeskripsi(deskripsi.target.value)} value={deskripsi}/>
                            <input type="text" placeholder="Kategori" className="my-2 input input-bordered w-full" onChange={(kategori) => setKategori(kategori.target.value)} value={kategori}/>
                            <button className='m-2 btn btn-primary btn-sm' onClick={() => lblSubmit === 'SUBMIT' ? handleSubmit() : handleUpdate()}>{lblSubmit}</button>
                            {judul !== '' && deskripsi !== '' && kategori !== '' && (<button className='m-2 btn btn-ghost btn-sm' onClick={() => handleReset()}>Reset</button> )}
                        </div>
                    </div>
                    <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-5 p-4'>
                        {props.myNews && props.myNews.length > 0 ? props.myNews.map((data, i) => {
                            return (
                                <div className="card w-full lg:w-96 bg-base-100 shadow-xl" key={i}>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {data.judul}
                                            {/* <div className="badge badge-secondary badge-sm">NEW</div> */}
                                        </h2>
                                        <p>{data.deskripsi}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">{data.kategori}</div> 
                                            <div className="badge badge-info text-white" onClick={() => handleEdit(data.id, data.judul, data.deskripsi, data.kategori)}><button>Edit</button></div>
                                            <div className="badge badge-error text-white" onClick={() => {if(window.confirm('Are you sure to delete this record?')){ handleDelete(data.id);}}}><button>Delete</button></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <p>nope</p>}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
