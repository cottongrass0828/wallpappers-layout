import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom'
import axios from 'axios';
import PhotoList from '../components/PhotoList';
import Loading from "../components/Loading";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

const api = 'https://api.unsplash.com/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function WallpapperPhoto() {
    const [list, currentPage, ratelimitRemaining, isLoading, handlePhotoChange, setRateliimitRemaining] = useOutletContext();
    const [image, setimage] = useState({})
    const { id } = useParams()

    const handlePhotoDetailChange = async (id) => {
        const response = await axios.get(`${api}/${id}/?client_id=${accessId}`)
        setimage(response.data);
        setRateliimitRemaining(response.headers['x-ratelimit-remaining'])
    }

    useEffect(() => {
        handlePhotoDetailChange(id)
    }, [id])


    return (
        <div className="h-full flex flex-col md:flex-row justify-between md:justify-normal flex-auto">
            < Loading isLoading={isLoading} />
            <div className="flex-auto relative md:h-screen">
                <img className="md:min-w-[581px] h-full object-cover" src={image?.urls?.regular} alt={image?.alt_description} />
                <div className="absolute bottom-0 left-0 bg-white w-full md:w-[414px] border-l-[1px] border-[#F5F5F5] p-[12px] md:px-[53px]">
                    <p className="leading-4 md:pt-[45px] mb-[7px] text-[12px] font-['Manrope'] tracking-[3.42px] text-[#D8D8D8]">AUTHOR BY</p>
                    <h2 className="mb-[2px] text-[52px] font-['Abhaya_Libre'] leading-[61px]">{image?.user?.name}</h2>
                    <h3 className="md:pb-[39px] text-[18px] font-['Abhaya_Libre'] leading-8">
                        <a target="_blank" rel="noreferrer" href={image?.user?.links?.html}><span className="link link-underline link-underline-black">Unsplash</span></a>
                        {(image?.user?.social?.instagram_username === null ? '' : <><span> / </span><a target="_blank" rel="noreferrer" href={`http://www.instagram.com/${image?.user?.social?.instagram_username}`}><span className="link link-underline link-underline-black">Instagram</span></a></>)}
                        {(image?.user?.social?.twitter_username === null ? '' : <><span> / </span><a target="_blank" rel="noreferrer" href={`https://twitter.com//${image?.user?.social?.twitter_username}`}><span className="link link-underline link-underline-black">Twitter</span></a></>)}
                    </h3>
                </div>
            </div>
            <div className='flex-none max-w-[750px] md:h-screen bg-white flex flex-col justify-between'>
                <div>
                    <p className="hidden md:block font-['Manrope'] text-[12px] tracking-[4.80px] leading-4 font-medium mt-[80px] ml-[91px] mb-[22px] text-[#D8D8D8]">WALLPAPERS UPDATE</p>
                    <div className="hidden md:flex items-center">
                        <div className="border-t-[1px] border-black w-[58px] h-0 mr-[32px]"></div>
                        <h1 className="text-[72px] font-['Abhaya_Libre'] leading-[85px] mb-[15px]">{image?.id}</h1>
                    </div>
                    <div className="hidden md:block ml-[91px] mr-[87px] mb-[32px] w-[512px] h-[209px] text-[18px] leading-8 text-ellipsis">
                        {image?.description === null ? <>(There is no description)</> : image?.description}
                    </div>
                    <button type="button" onClick={() => handlePhotoChange(currentPage)} className="mx-[12px] md:ml-[91px] bg-[#090911] text-white px-[38px] py-[16px] text-[18px]">Generate Radom Wallpapers<FontAwesomeIcon className="ml-[34px]" icon={faRightLong} /></button>
                </div>
                <div className='h-[30px] md:h-[69px] flex-initial'></div>
                <div className="mx-[12px] md:ml-[91px] md:mr-[87px] mb-[39px] flex flex-col-reverse flex-auto">
                    <h6 className='flex justify-between text-[#D8D8D8]'><span>Website layout referenced from <a className='link link-underline link-underline-black hover:text-black' href="https://dribbble.com/janlosert">@janlosert</a>'s work.</span><span className="font-['Abhaya_Libre'] text-[18px] leading-[32px] ml-[12px]">2017</span></h6>
                    <div className="border-t-[1px] md:w-[509px] mb-[30px] md:mb-[40px]"></div>
                    <PhotoList list={list} currentId={id} className={"mb-[30px] md:mb-[50px] grid grid-cols-3 gap-3"} />
                </div>
            </div>
        </div >
    )
}