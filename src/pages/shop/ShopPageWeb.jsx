import React, { useEffect, useState } from 'react'
import ProductByCateGory from './../../component/productByCategory/ProductByCateGory';
import requestFront from '../../share_front/requestFront';
import { useNavigate } from 'react-router-dom';
import { ConfigFront, formateDateClient, isEmptyOrNullFront } from '../../share_front/helperFront';
import { Select } from 'antd';
import Search from 'antd/es/input/Search';
const { Option } = Select;


export default function ShopPageWeb() {
  const [listProduct, setListProduct] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  const [txtSearch, setTxtSearch] = useState('');
  const [categorySearch, setCategorySearch] = useState(null);
  const [productStatus, setProductStatus] = useState(null);
  
  useEffect(() => {
    if(txtSearch == "" && categorySearch == null && productStatus == null){
      getList();
    }
    // getList();
  }, [txtSearch, categorySearch, productStatus])

  const getList = () => {
    var param = "?txtSearch="+txtSearch
    if(!isEmptyOrNullFront(categorySearch)){
      param += "&categoryId=" + categorySearch
    }
    if(!isEmptyOrNullFront(productStatus)){
      param += "&productStatus=" + productStatus
    }
    requestFront('product'+param, 'get', {}).then((res) => {
      console.log(res);
      if (res) {
        setListProduct(res.data);
        setCategoryList(res.data_category);
      }
    })

  }

  const onClear = () => {
    setTxtSearch('');
    setCategorySearch(null);
    setProductStatus(null);
    // getList();
  }

  return (
   <main>
      <section className='max-w-6xl mx-auto mt-5'>
      <h1 className='text-xl border-b pb-1 font-bold manrope text-gray-600 mt-5 uppercase'>CATEGORY</h1>
       <div className='mt-3'>
       <ProductByCateGory/>
       </div>
        <h1 className='text-4xl font-bold manrope text-gray-600 mt-10 text-center uppercase'>OUR PRODUCTS Release</h1>
         <p className='text-center text-gray-500 manrope max-w-[940px] mx-auto text-md'>Immerse yourself in the future of computing with our exciting array of new products that redefine the boundaries of technology.</p>
         <div className='mt-3 space-x-3 border-b pb-2'>
            <Search
              value={txtSearch}
              placeholder="Search..."
              allowClear
              style={{
                width: 300,
              }}
              onChange={(event) => setTxtSearch(event.target.value)}
            />

            <Select 
            value={categorySearch}
            className='w-[150px] manrope' 
            allowClear placeholder="Category"
            onChange={(value) => setCategorySearch(value)}
            > 
            {
                categoryList?.map((item, index) => {
                  return (
                    <Option className='manrope' value={item.category_id} key={index}>{item.name}</Option>
                  )
                })
            }
            </Select>

            <Select 
            value={productStatus}
            onChange={(value) => setProductStatus(value)}
            className='w-[100px] manrope' 
            allowClear 
            placeholder="Status Product"
            >
              <Option value="1">Active</Option>
              <Option value="0">Disable</Option>
            </Select>

            <button onClick={()=> getList()} className='bg-blue-400 manrope text-sm text-white px-3 py-2 rounded-md hover:bg-blue-500 hover:duration-200'>Search</button>
            <button onClick={()=> onClear()} className='bg-gray-100 manrope text-sm text-blue-600 border px-3 py-2 rounded-md hover:bg-gray-200 hover:duration-200'>Clear</button>
      
        </div>
        <div className='grid grid-cols-4 gap-4 mt-3'>
            {
                listProduct.map((item) => {
                    return(
                        <div key={item.product_id} className='border rounded shadow hover:scale-105 duration-300'>
                            <div onClick={()=> navigate(`/product/${item.product_id}`)} className='h-44' >
                                <img className='w-full h-full object-cover rounded cursor-pointer' src={ConfigFront.image_path_front+item.image} alt="" />
                            </div>
                           <div className='px-2 py-2 space-y-1 '>
                            <div className=' border-b pb-2'>
                               <div className='flex justify-between'>
                                  <h1 className='manrope text-sm font-semibold'>{item.name}</h1>
                                  <p className='manrope font-bold text-sm text-red-500 ml-2'>$ {item.price}</p>
                               </div>
                               <p className='manrope font-medium text-xs text-gray-700 mt-1'>{item.description}</p>
                            </div >
                            <p className='manrope text-xs text-gray-500'>{formateDateClient(item.create_at)}</p>
                           </div>
                        </div>
                    )
                })
            }
        </div>
      </section>
   </main>
  )
}
