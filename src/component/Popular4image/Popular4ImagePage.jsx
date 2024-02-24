import React, { useEffect, useState } from 'react'
import requestFront from '../../share_front/requestFront';
import { ConfigFront } from '../../share_front/helperFront';

export default function Popular4ImagePage() {
    const [list, setList] = useState([])

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
    <>
      <div className='grid grid-cols-2 flex gap-1'>
        {
            list?.map((item, index) => {
                return (
                
                    <div>
                        <img className='relative w-full duration-300 h-[500px] object-cover rounded-md cursor-pointer' src={ConfigFront.image_path_front+item.blog_image} alt="" />
                    </div>
                
                )
            })
        }
     </div>
    </>
  )
}
