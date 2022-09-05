import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import App from '@/Layouts/App';
import NewsLists from '@/Components/News/NewsLists';
import Pagination from '@/Components/News/Pagination';

export default function News(props) {
    return (
        <App title="News" props={props}>
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-5 p-4'>
                <NewsLists news={props.news.data}/>
            </div>
            <div className='flex justify-center'>
                <Pagination meta={props.news.meta}/>
            </div>
        </App>
    )
}