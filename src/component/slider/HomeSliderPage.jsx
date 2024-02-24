import React, { useEffect, useState } from 'react'
import { Carousel } from 'antd';
import requestFront from '../../share_front/requestFront';
import { ConfigFront } from '../../share_front/helperFront';
const contentStyle = {
  height: '680px',
  color: '#fff',
  lineHeight: '680px',
  textAlign: 'center',
  background: '#364d79',
};

export default function HomeSliderPage() {

  const [list , setList] = useState([])

  useEffect(() => {
    getlist();
  }, [])

  const getlist  = async () => {
    requestFront('slider', 'get').then((res) => {
      console.log(res);
      if(!res.error){
        setList(res.data);
      }
    })
  }

  return (
    <div>
        <Carousel autoplay autoplaySpeed={2000}>
          {
            list.map((item, index) => {
              return (
                <div>
                  <img className='w-full h-full object-cover' src={ConfigFront.image_path_front+item.slider_image} style={contentStyle} alt="" />
                </div>
              )
            })
          }
        </Carousel>
    </div>
  )
}
