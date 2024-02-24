import React, { useEffect, useState } from 'react'
import { ConfigFront, formateDateClient } from '../../share_front/helperFront'
import { useNavigate } from 'react-router-dom';
import requestFront from '../../share_front/requestFront';

export default function ProductInDetailPage() {
    const [listProduct, setListProduct] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getLsit();
    }, [])

   const getLsit = async () => {
    requestFront('product', 'get').then((res) => {
        console.log(res);
        if (!res.error) {
            setListProduct(res.data);
        }
    })
   }


  return (
    <main>
        <div className='grid grid-cols-4 gap-4 mt-5'>
            {
                listProduct.slice(0,8).map((item) => {
                    return(
                        <div key={item.product_id} className='border rounded shadow hover:scale-105 duration-300'>
                            <div onClick={()=> navigate(`/product/${item.product_id}`)} className='h-44' >
                                <img className='w-full h-full object-cover rounded cursor-pointer' src={ConfigFront.image_path_front+item.image} alt="" />
                            </div>
                           <div className='px-2 py-2 space-y-1 '>
                            <div className='flex justify-between'>
                                <h1 className='manrope text-sm font-medium'>{item.name}</h1>
                                <p className='manrope text-sm text-red-500 ml-2'>$ {item.price}</p>
                            </div>
                            <p className='manrope text-xs text-gray-500'>{formateDateClient(item.create_at)}</p>
                           </div>
                        </div>
                    )
                })
            }
        </div>
    </main>
  )
}
