import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { openMenu } from '../utils/appSlice';
import { useSearchParams, Link } from 'react-router-dom';
import {  YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API } from '../utils/constants';

const SearchResultContainer = () => {

    const [searchParams] = useSearchParams();
    const [searchedVideos, setSearchedVideos] = useState([]);

    let searchQuery = searchParams.get('search_query');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(openMenu());
        getSearchedVideosList();
    }, [searchQuery]);

    const getSearchedVideosList = async () => {
        const data = await fetch(YOUTUBE_SEARCH_VIDEO_WITH_QUERY_API + searchQuery  );
        const searchedVideosJson = await data.json();
        setSearchedVideos(searchedVideosJson?.items);
        //console.log(searchedVideosJson?.items?.id)
        console.log("Hi" +searchedVideosJson[0])
    }

    return (
        <div className='px-3 col-span-11 mt-[110px] ml-[280px]'>
            <div className='flex flex-col px-3 '>
                <div className=''>
                    {searchedVideos?.map(video =>
                        <Link key={video?.id?.videoId} to={'/watch?v=' + video?.id?.videoId} >
                            <div className='px-3 my-5 flex w-[100%]'>
                                <img className='rounded-lg  w-[630px] h-[330px] ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} 
                                loading='lazy'/>
                                <ul className='flex flex-col justify-start ml-5 w-[50%]'>
                                    <li className=' py-2 text-xl font-semibold'>{video?.snippet?.title}</li>
                                    <li className='text-gray-500 text-[20px]'>{video?.snippet?.channelTitle}</li>
                                    <li className='text-gray-500 text-[18px]'>1M views  {(Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)} days ago</li>
                                    <li className='text-gray-500 mt-2 text-[15px]'>{video?.snippet?.description}</li>
                                </ul>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchResultContainer;