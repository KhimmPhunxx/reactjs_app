import React, { useEffect, useState } from 'react'
import requestFront from '../../share_front/requestFront';
import { ConfigFront, formateDateClient, getUser } from '../../share_front/helperFront';
import {  useParams } from 'react-router-dom';
import './ProductDetail.css'
import { IoStar, IoStarHalf } from "react-icons/io5";
import { Col, Input, Modal, Row, Form } from 'antd';
import ProductInDetailPage from '../../component/productShowInDetailPage/ProductInDetailPage';


export default function ProductDetailpage() {
    const [list, setList] = useState([])
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    let {id} = useParams();
    const [listCart , setListCart] = useState([])
    const [item, setItem] = useState({})
  
    

    useEffect(() => {
        getlist(id);
        getListCart();
    }, [])

    const getlist = async (id) => {
        requestFront(`product/${id}`, 'get',{}).then((res) => {
            console.log(res);
            if (res) {
                setList(res.data);
            }
        })
    }

    
    var user = getUser();
    // write function get list cart by customer id
    const getListCart = async () => {
        setItem(item);
        requestFront(`cart`, 'get' ,{
            customer_id: user.customer_id
        }).then((res) => {
            console.log(res);
            if (res) {
                setListCart(res.List);
            }
        })
    }

  
    const onCloseModal = () => {
        setVisible(false);
    }

    const onFinish = (value) => {
        console.log(value);
    }

    const onFinsh = (value) => {
        requestFront('cart', 'post', value).then((res) => {
            console.log(res);
            if (!res.error) {
                setVisible(false);
            }
        })
    }

  return (
    <main className='max-w-6xl mx-auto mt-5'>
        <h1 className='manrope text-2xl font-bold text-gray-600 uppercase'>Product Detail</h1>
        <div className='border mt-1'></div>
        {
            list.map((item) => {
            return(
                <div className='w-full grid grid-cols-2 mt-3 '>
                    <div className="img h-[470px]">
                        <img className='w-full h-full object-cover rounded-xl' src={ConfigFront.image_path_front+item.image} alt="" />
                    </div>
                    <div className='pl-4 py-2'>
                        <div className='h-[380px]'>
                            <h1 className='manrope text-7xl font-medium text-gray-700'>{item.name}</h1>
                           
                            <p className='manrope text-2xl font-medium text-gray-800 mt-2'>{item.description}</p>
                            <div className='flex space-x-3 mt-2'>
                                <IoStar className='text-[#FFD700] text-2xl' />
                                <IoStar className='text-[#FFD700] text-2xl' />
                                <IoStar className='text-[#FFD700] text-2xl' />
                                <IoStar className='text-[#FFD700] text-2xl' />
                                <IoStarHalf className='text-[#FFD700] text-2xl' />
                            </div> 
                            <p className='manrope text-3xl font-semibold text-red-500 mt-2'>$ {item.price}</p>
                          
                            <p className='manrope text-md font-medium text-blue-600 mt-2'><i class="fa-solid fa-warehouse"></i> {item.is_active ? "InStock" : "OutStock"}</p>
                            <p className='manrope text-lg font-[500] text-gray-500 mt-2'><i class="fa-solid fa-tachograph-digital"></i> {formateDateClient(item.create_at)} </p>
                            
                          
                        </div>
                        <div className='space-x-4'>
                           <button className='py-3 px-5 rounded-md hover:bg-orange-500 duration-300 bg-orange-400 mt-4 manrope text-md font-medium text-white'>More Option</button>
                           <button onClick={()=> setVisible(true)}  className='py-3 px-5 rounded-md hover:bg-blue-500 duration-300 bg-blue-400 mt-4 manrope text-md font-medium text-white'>Add to Cart <i class="fa-solid fa-cart-arrow-down"></i></button>
                        </div>
                    </div>
                    Hello {
                      listCart.length+ " " + user.firstname + " " + user.lastname + " " + user.customer_id
                    }
                </div>
                
                )
            })
        }
        <div className='border mt-5'></div>
        <Modal
          maskClosable={false}
          open={visible}
          onCancel={onCloseModal}
          footer={null}
          title={"Add to Cart Form"}
          className='manrope'
          width={800}
        >
          <Form 
            onFinish={onFinish}
            layout="Add To Cart Form" 
            form={form} 
            className='Manrope'
          >
            {
              list.map((item) => {
                return(
                 <>
                  <div className='flex'>
                    <div className='img w-[40%] h-64'>
                        <img className='w-full rounded h-full object-cover' src={ConfigFront.image_path_front+item.image} alt="" />
                    </div>
                    <div className='w-[57%] ml-[3%] h-64'>
                        <h1 className='manrope text-2xl font-bold'>{item.name}</h1>
                        <p className='manrope text-xl font-semibold text-red-500 mt-2'>$ {item.price}</p>
                        <p className='manrope text-md font-medium text-gray-800 mt-1'>{item.description}</p>
                        <div className='flex space-x-2 mt-1'>
                                <IoStar className='text-[#FFD700] text-xl' />
                                <IoStar className='text-[#FFD700] text-xl' />
                                <IoStar className='text-[#FFD700] text-xl' />
                                <IoStar className='text-[#FFD700] text-xl' />
                                <IoStarHalf className='text-[#FFD700] text-2xl' />
                            </div> 
                        <p className='manrope text-lg font-medium text-blue-500 mt-1'> {item.is_active == 1 ? "InStock" : "OutStock"}</p>
                        <p className='manrope text-md font-[500] text-gray-500 mt-1'>{formateDateClient(item.create_at)} </p>
                        <p className='manrope text-lg font-[700] text-gray-800 mt-1'>Quantity: 1 </p>
                        

                    </div>
                    
                  </div>
                  <div className='w-full border-2 rounded shadow mt-2 px-2 py-2 flex justify-between'>
                    <h1 className='manrope text-lg font-bold text-gray-500'>Total Amount</h1>
                    <p className='manrope text-lg font-semibold text-red-400 border-l-2 pl-3'>$ {item.price}</p>
                  </div>
                 </>
                )
              })
            }

           <Form.Item className='border-t mt-3'>
              <div className='space-x-3 mt-3' style={{float: "right"}}>
                
                <button type='submit' className='bg-blue-400 manrope text-sm text-white px-3 py-2 rounded-md hover:bg-blue-500 hover:duration-200 '> Add to cart </button>
              </div>
           </Form.Item>
          </Form>
        </Modal>
        <h1 className='text-4xl font-bold manrope text-gray-800 mt-10 text-center uppercase'>New PRODUCTS Release</h1>
        <p className='text-center text-gray-500 manrope max-w-[940px] mx-auto text-md'>Immerse yourself in the future of computing with our exciting array of new products that redefine the boundaries of technology.</p>
        <ProductInDetailPage/>
        
    </main>
  )
}
