import React, { useEffect, useState } from 'react'
import requestFront from '../../share_front/requestFront'
import './ProductByCateGory.css'
import { ConfigFront } from '../../share_front/helperFront'

export default function ProductByCateGory() {
    const [list, setList] = useState([])

    useEffect(() => {
        getlist();
    }, [])

    const getlist = async () => {
        requestFront('category', 'get').then((res) => {
            console.log(res);
            if (!res.error) {
                setList(res.data_category);
            }
        })
    }


  return (
        <main className='w-full border-gray-200 border p-4 shadow-md rounded-xl' >
            <div className='grid-cols-8 flex'>
                {
                    list.slice(0,8).map((itemp, index) => {
                    return(
                        <div className='w-44'>
                            <div className='w-20 h-20 mx-auto cursor-pointer'>
                                <img src={ConfigFront.image_path_front+itemp.cate_image} className="w-full h-full object-cover border duration-300 rounded hover:scale-105" alt="" />
                            </div>
                            <h1 className='text-center text-md manrope font-bold uppercase mt-3'>{itemp.name}</h1>
                        </div>
                    )
                    })
                }
            </div>
        </main>
    )
}
