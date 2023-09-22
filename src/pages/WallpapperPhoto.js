import { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom'
import axios from 'axios';
import PhotoList from '../components/PhotoList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'

const api = 'https://api.unsplash.com/photos';
const accessId = process.env.REACT_APP_UNSPLASH_ACCESS;
export default function WallpapperPhoto() {
    const list = useOutletContext();
    console.log(list)
    const [image, setimage] = useState({})
    const { id } = useParams()
    useEffect(() => {
        try {
            (async () => {
                const response = await axios.get(`${api}/${id}/?client_id=${accessId}`)
                console.log(response.data);
                setimage(response.data);
            })();
        } catch (error) {
            alert('已超過使用次數，請稍後再嘗試')
            console.log(error);
        }
    }, [id])
    return (
        <div className="flex flex-auto">
            <div className="flex-auto relative h-screen">
                <img className="min-w-[581px] h-full object-cover" src={image?.urls?.regular} alt={image?.alt_description} />
                <div className="absolute bottom-0 left-0 bg-white w-[414px] border-l-[1px] border-[#F5F5F5] px-[53px]">
                    <p className="leading-4 pt-[45px] mb-[7px] text-[12px] font-['Manrope'] tracking-[3.42px] text-[#D8D8D8]">MOUNTAINS IN</p>
                    <h2 className="mb-[2px] text-[52px] font-['Abhaya_Libre'] leading-[61px]">Austria & Italy</h2>
                    <h3 className="pb-[39px] text-[18px] font-['Abhaya_Libre'] leading-8">Fascinating views of Dolomites’s massives
                        with their little churches and lakes.</h3>
                </div>
            </div>
            <div className='flex-none max-w-[750px] bg-white flex flex-col justify-between'>
                <div>
                    <p className="font-['Manrope'] text-[12px] tracking-[4.80px] leading-4 font-medium mt-[80px] ml-[91px] mb-[22px] text-[#D8D8D8]">WALLPAPERS UPDATE</p>
                    <div className="flex items-center">
                        <div className="border-t-[1px] border-black w-[58px] h-0 mr-[32px]"></div>
                        <h1 className="text-[72px] font-['Abhaya_Libre'] leading-[85px] mb-[15px]">Around France</h1>
                    </div>
                    <div className="ml-[91px] mr-[87px] mb-[32px] w-[512px] h-[209px] text-[18px] leading-8 text-ellipsis">Lorem ipsum dolor sit amet consectetur. Porttitor sem integer dignissim tristique elit sem venenatis commodo. In pharetra placerat viverra hac. Leo morbi vestibulum lorem massa dictum.Lorem ipsum dolor sit amet consectetur.
                        <br />
                        Lorem ipsum dolor sit amet consectetur. Porttitor sem integer dignissim tristique elit sem venenatis commodo.
                    </div>
                    <button type="button" className="ml-[91px] bg-[#090911] text-white px-[38px] py-[16px] text-[18px]">Generate Radom Wallpapers<FontAwesomeIcon className="ml-[34px]" icon={faRightLong} /></button>
                </div>
                <div className='h-[69px] flex-initial'></div>
                <div className="ml-[91px] mr-[87px] mb-[39px] flex flex-col-reverse flex-auto">
                    <h6 className='flex justify-between'>Lorem ipsum dolor sit amet consectetur. Porttitor se <span>2017</span></h6>
                    <div className="border-t-[1px] w-[509p] mb-[40px]"></div>
                    <PhotoList list={list} />
                </div>
            </div>
        </div >
    )
}