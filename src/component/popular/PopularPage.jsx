import React, { useEffect, useState } from 'react'
import requestFront from '../../share_front/requestFront';
import './PopularPage.css'
import { ConfigFront } from '../../share_front/helperFront';
import { useNavigate } from 'react-router-dom';

export default function PopularPage() {
    const [list, setList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getlist();
    }, [])

    const getlist = async () => {
        requestFront('blog_home', 'get').then((res) => {
            console.log(res);
            if (!res.error) {
                setList(res.data);
            }
        })
    }
  return (
    <main>
            {
                list?.slice(0,1).map((item, index) => {
                    return (
                        <div className='grid grid-cols-2 space-x-[4%]'>
                            <div className='w-98% h-96'>
                                <img className='w-full h-full object-cover rounded-md cursor-pointer' src={ConfigFront.image_path_front+item.blog_image} alt="" />
                            </div>
                            <div className=' w-[98%]'>
                                <h1 className='text-4xl manrope font-semibold text-gray-800'>{item.name} <i class="fa-solid fa-laptop"></i></h1>
                                <p className='manrope mt-2 text-xl text-gray-600'> {item.desc} </p>
                                <div className='space-x-4 mt-8'>
                                    <button onClick={()=> navigate('/shop')} className='bg-[#30A0CF] hover:bg-[#3e93b8] duration-300 rounded-md px-8 py-3 manrope font-bold text-white'>Shop Now</button>
                                    <button className='border border-[#30A0CF] rounded-md px-8 py-3 manrope font-bold text-[#30A0CF]'>Service</button>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
       
    </main>
  )
}
