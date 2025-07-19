import React, { useState } from 'react'
import { products } from '../../constants'
import { GrRadialSelected } from 'react-icons/gr';

const ProductContainer = () => {

    const [selected, setSelected] = useState(products[0]);
    const [ItemsCount, setItemsCount] = useState(0);
    const [itemId, setItemId] = useState();
    const increment = (id) => {
        setItemId(id);
        setItemsCount(ItemsCount + 1);
    }
    const decrement = (id) => {
        setItemId(itemId); 
        if (ItemsCount > 0) {
            setItemsCount(ItemsCount - 1);
        }
    }
 


    return (
        <>
            <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
                {
                    products.map((product) => {
                        return (
                            <div key={product.id} className='flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer'
                                style={{ backgroundColor: product.bgColor }}
                                onClick={() => {
                                    setSelected(product);
                                    setItemId(0);
                                    setItemsCount(0);
                                }}>
                                <div className='flex items-center justify-between w-full'>
                                    <h1 className='text-[#f5f5f5] text-lg font-semibold'>{product.icon} {product.name}</h1>
                                    {selected.id === product.id && <GrRadialSelected className="text-white" size={20} />}
                                </div>
                                <p className='text-[#ababab] text-sm font-semibold'> {product.items.length} Products</p>
                            </div>
                        )
                    })
                }
            </div>

            <hr className='border-[#2a2a2a] border-t-2 mt-4' />

            <div className='grid grid-cols-4 gap-4 px-10 py-4 w-[100%]'>
                {
                    selected?.items.map((product) => { //ayusin ko pa increment and decrement UI
                        return (
                            <div key={product.id} className='flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]' >
                                <div className='flex items-center justify-between w-full'>
                                    <h1 className='text-[#f5f5f5] text-lg font-semibold'> {product.name}</h1>
                                </div>
                                <p className='text-[#f5f5f5] text-xl font-bold'> ₱{product.price} </p>
                                <div className='flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg gap-6 z-20' />
                                <button
                                    onClick={() => decrement(product.id)}
                                    className='text-yellow-500 text-2xl'>
                                    &minus;
                                </button>
                                <span className='text-white'>{product.id === itemId ? ItemsCount : "0"}</span>
                                <button
                                    onClick={() => increment(product.id)}
                                    className='text-yellow-500 text-2xl'>
                                    &#43;
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductContainer