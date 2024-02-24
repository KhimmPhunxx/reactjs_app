import React from 'react'
import HomeSliderPage from '../../component/slider/HomeSliderPage'
import './Home.css'
import ProductByCateGory from '../../component/productByCategory/ProductByCateGory'
import PopularPage from '../../component/popular/PopularPage'
import ProductList_4HomePage from '../../component/productList4/ProductList_4HomePage'
import ListLenghPage from '../../component/ListLenghOfWeb/ListLenghPage'
import Popular4ImagePage from '../../component/Popular4image/Popular4ImagePage'

export default function HomePageWeb() {
  return (
   <main>
         <div className='max-w-full '>
              <HomeSliderPage/>
         </div>
         <h1 className='text-4xl font-bold manrope text-gray-800 mt-10 text-center'>OUR PRODUCTS BY CATEGORY</h1>
         <p className='text-center text-gray-500 manrope max-w-[800px] mx-auto text-sm'>Certainly! I'd be happy to help you write a product description by category. 
         However, I'll need more specific information about the product and the category it falls under. Could you please provide details such as the type of product, 
         its features, target audience, and any other relevant information? This will help me create a more tailored and effective product description.</p>
         <div className='max-w-6xl mx-auto mt-5'>
              <ProductByCateGory/>
         </div>
         <div className='max-w-6xl mx-auto mt-10'>
             <PopularPage/>
         </div>
         <h1 className='text-4xl font-bold manrope text-gray-800 mt-16 text-center uppercase'>New PRODUCTS Release</h1>
         <p className='text-center text-gray-500 manrope max-w-[940px] mx-auto text-md'>Immerse yourself in the future of computing with our exciting array of new products that redefine the boundaries of technology.</p>
         <div className='max-w-6xl mx-auto mt-5'>
             <ProductList_4HomePage/>
         </div>
         <h1 className='text-4xl font-bold manrope text-gray-800 mt-10 text-center'>About our Website</h1>
         <p className='text-center text-gray-500 manrope max-w-[910px] mx-auto text-sm'>Certainly! In order to provide a more detailed and relevant description, I would need information about the specific website you're referring to.</p>
         <div className='max-w-8xl mx-auto mt-5'>
            <ListLenghPage/>
         </div>
         <div className='max-w-8xl mx-auto mt-5'>
            <Popular4ImagePage/>
         </div>
         

   </main>
  )
}
