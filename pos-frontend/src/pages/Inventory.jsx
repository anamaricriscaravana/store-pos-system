import React, { useState } from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import InventoryCard from '../components/inventory/InventoryCard'
import { inventory } from '../constants'
import { MdTableChart } from 'react-icons/md'

const Inventory = () => {

    const [status, setStatus] = useState("all");

    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-6rem)] overflow-hidden'>
            <div className='flex items-center justify-between px-10 py-4 mt-2'>
                <div className='flex items-center gap-4'>
                    <BackButton />
                    <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wider'>
                        Inventory
                    </h1>
                </div>
                <div className='flex items-center justify-around gap-4'>
                    <button onClick={() => setStatus("all")} className={`text-[#ababab] text-lg ${status === "all" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>All</button>
                    {/* <button onClick={() => setStatus("stock")} className={`text-[#ababab] text-lg ${status ==="stock" && "bg-[#383838] rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>On Stock</button> */}
                </div>
            </div>
            <div className='flex flex-wrap gap-5 p-10'>
                {
                    inventory.map((inventory) => {
                        return (
                            <InventoryCard key={inventory.id} id={inventory.id} name={inventory.name} status={inventory.status} initials={inventory.initial} />
                        )
                    })
                }
            </div>
            <BottomNav />
        </section>
    )
}

export default Inventory                    