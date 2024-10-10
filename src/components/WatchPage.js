import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams,Link } from 'react-router-dom'
import { formatCompactNumber } from '../utils/helper'
import CommentsContainer from './CommentsContainer'
import likeIcon from '../assets/like.svg';
import disLikeIcon from '../assets/dislike.svg';
import shareIcon from '../assets/share.svg';
import downloadIcon from '../assets/download.svg';
import moreIcon from '../assets/more.svg';
import { YOUTUBE_API, YOUTUBE_VIDEOS_API } from '../utils/constants'
//import LiveChat from './LiveChat';
const WatchPage = () => {

  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
    getVideosDetails();
  },[])

  useEffect(() => {
    window.scrollTo(0, 0);
}, [])

  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);
 const [searchParams]=useSearchParams()
 let videoId = searchParams.get('v');
 console.log(videoId); // give video id 

 const getVideosDetails = async ()=>{
  //console.log(YOUTUBE_VIDEOS_API +"/watch?v="+ videoId)
  //console.log("Hi"+YOUTUBE_VIDEOS_API +"&id="+ videoId)
  console.log("YOUTUBE_API+ videoId  " + YOUTUBE_API+ videoId)
  console.log("YOUTUBE_VIDEOS_API  "+ YOUTUBE_VIDEOS_API)
  const data = await Promise.all([fetch(YOUTUBE_API+ videoId) , fetch(YOUTUBE_VIDEOS_API)])
  const watchVideoJson = await data[0].json();
  console.log( watchVideoJson)
  const recVideoJson = await data[1].json();
  console.log("Hi " +recVideoJson)
  setVideo(watchVideoJson?.items[0]);
  setRelatedVideos(recVideoJson?.items);
  console.log(relatedVideos);

 }

  return (
    <div className='flex flex-row gap-1'>
    <div className='mt-24 px-4'>
      <div>
        <iframe 
        width="1260"
         height="610" 
        src={"https://www.youtube.com/embed/"+ videoId} 
        title="YouTube video player" 
        frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
          </iframe>

          <div className='p-2 m-2'>
                        <div>
                            <div className='font-medium text-[18px]'>{video?.snippet?.title}</div>
                            <div className='mt-2 flex justify-between'>
                                <div className='flex'>
                                    <div className='flex'>
                                        <img className='rounded-full w-10 h-10' alt='thumbnail' src={video?.snippet?.thumbnails?.default?.url} />
                                        <div className='flex flex-col justify-center ml-2'>
                                            <div className='font-bold text-[16px]'>{video?.snippet?.channelTitle}</div>
                                            <div className='text-gray-500 text-[12px]'>{formatCompactNumber(video?.statistics?.viewCount)} Subscriber</div>
                                        </div>
                                    </div>
                                    <button className='bg-black rounded-full px-4 ml-2 text-white'>Subscribe</button>
                                </div>
                                <div className='flex'>
                                    <button className='bg-gray-100 rounded-l-full px-4 hover:bg-gray-200'><img alt='likeBtn' className='inline-block' src={likeIcon} /> 65K</button>
                                    <button className='bg-gray-100 rounded-r-full px-4 border-l-2 border-gray-300 hover:bg-gray-200'><img alt='dislikeBtn' className='inline-block' src={disLikeIcon} /></button>
                                    <button className='bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200'><img alt='shareBtn' className='inline-block' src={shareIcon} /> Share</button>
                                    <button className='bg-gray-100 rounded-full px-4 ml-2 hover:bg-gray-200'><img alt='downloadBtn' className='inline-block' src={downloadIcon} /> Download</button>
                                    <button className='bg-gray-100 rounded-full w-10 h-10 ml-2 hover:bg-gray-200'><img alt='moreBtn' className='inline-block' src={moreIcon} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
          </div>
          <CommentsContainer/>
          </div>
          <div className='mt-20 px-10'>
                <div className='flex flex-col w-full'>
                    {/* <div className='px-3 m-1 flex  w-full '>
                        <LiveChat />
                    </div> */}
                    {relatedVideos?.map(video =>
                        <Link key={video?.id} to={'/watch?v=' + video?.id} onClick={() => window.scroll(0,0)}>
                            <div className='px-3 m-2 mt-[20px] flex'>
                                <img className='rounded-xl w-[168px] h-[94px] ' alt='thumbnail' src={video?.snippet?.thumbnails?.medium?.url} />
                                <ul className='flex flex-col justify-start ml-2 w-60'>
                                    <li className='font-medium py-2 text-[14px] line-clamp-2 max-h-[50px] leading-5'>{video?.snippet?.title}</li>
                                    <li className='text-gray-500 text-[12px]'>{video?.snippet?.channelTitle}</li>
                                    <li className='text-gray-500 text-[12px]'>{formatCompactNumber(video?.statistics.viewCount)}  {(Math.abs(new Date(video?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(1)} days ago</li>
                                </ul>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
          </div>

          
  )
}

export default WatchPage