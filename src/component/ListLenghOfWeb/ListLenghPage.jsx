import React, { useEffect, useState } from 'react'
import requestFront from '../../share_front/requestFront';
import './ListLenghPage.css'

export default function ListLenghPage() {
    const [listProd, setListProd] = useState([])
    const [listCate, setListCate] = useState([])
    const [listOrder, setListOrder] = useState([])
    const [listCust, setListCust] = useState([])

    useEffect(() => {
        getlist();
    }, [])

    const getlist = async () => {
        requestFront('product', 'get').then((res) => {
            console.log(res);
            if (!res.error) {
                setListProd(res.data);
            }
        })
        requestFront('category', 'get').then((res) => {
            console.log(res);
            if (!res.error) {
                setListCate(res.data_category);
            }
        })
        requestFront('order', 'get').then((res) => {
            console.log(res);
            if (!res.error) {
                setListOrder(res.data);
            }
        })
        requestFront('customer', 'get').then((res) => {
            console.log(res);
            if (!res.error) {
                setListCust(res.data);
            }
        })

    }
  return (
    <main>
        <div className='border w-full grid grid-cols-4 shadow rounded-lg py-5 px-10 gap-20'>
            <button className='border hover:scale-105 duration-300 text-5xl px-8 py-4 font-bold text-gray-100 rounded-lg manrope bg-blue-400'>
                {listProd.length} <i class="fa-solid fa-dolly"></i>
            </button>
            <button className='border hover:scale-105 duration-300 text-5xl px-8 py-4 font-bold text-gray-100 rounded-lg manrope bg-red-400'>
                {listCate.length} <i class="fa-solid fa-cart-flatbed-suitcase"></i>
            </button>
            <button className='border hover:scale-105 duration-300 text-5xl px-8 py-4 font-bold text-gray-100 rounded-lg manrope bg-green-400'>
                {listOrder.length} <i class="fa-solid fa-check-to-slot"></i>
            </button>
            <button className='border hover:scale-105 duration-300 text-5xl px-8 py-4 font-bold text-gray-100 rounded-lg manrope bg-teal-400'>
                {listCust.length} <i class="fa-solid fa-user"></i>
            </button>
            
        </div>
    </main>
  )
}
