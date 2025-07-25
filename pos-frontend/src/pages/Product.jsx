import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import { IoBagCheckOutline } from "react-icons/io5"
import ProductContainer from '../components/product/ProductContainer'
import CustomerInfo from '../components/product/CustomerInfo'
import CartInfo from '../components/product/CartInfo'
import Bill from '../components/product/Bill'

const Product = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-6rem)] overflow-hidden flex gap-3'>
      {/* Left Div */}
      <div className="flex-[3]">
        <div className='flex items-center justify-between px-10 py-4 mt-2'>
          <div className='flex items-center gap-4'>
            <BackButton />
            <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>
              Product
            </h1>
          </div>
          <div className='flex items-center justify-around gap-4'>
            <div className="flex items-center gap-3 cursor-pointer">
              <IoBagCheckOutline className="text-[#f5f5f5] text-4xl" />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold">Customer Name</h1>
                <p className="text-xs text-[#ababab] font-medium">Total number of items: 5</p> {/* Example text, replace with actual data */}
              </div>
            </div>
          </div>
        </div>

        <ProductContainer />

      </div>
      {/* Right Div */}
      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2">
        {/* customer info */}
        <CustomerInfo />
        <hr className='border-[#2a2a2a] border-t-2' />
        {/* cart items  */}
        <CartInfo />
         <hr className='border-[#2a2a2a] border-t-2' />
        {/* bill type */}
        
        <Bill />
      </div>

      <BottomNav />
    </section>
  )
}

export default Product