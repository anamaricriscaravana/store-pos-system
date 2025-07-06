import React from 'react'
import { FaHome } from 'react-icons/fa'
import { IoReorderThree } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { MdInventory } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {

    const navigate = useNavigate();


    return (
        <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-12 flex justify-around'>
            <button onClick={() => navigate("/")}className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[300px] rounded-[20px]'><FaHome className="inline mr-2" size={20} /><p>Home</p></button>
            <button onClick={() => navigate("/orders")} className='flex items-center justify-center text-[#ababab]  w-[300px]'><IoReorderThree className="inline mr-2" size={20} /><p>Orders</p></button>
            <button onClick={() => navigate("/inventory")}className='flex items-center justify-center text-[#ababab]  w-[300px]'><MdInventory className="inline mr-2" size={20} /><p>Inventory</p></button>
            <button className='flex items-center justify-center text-[#ababab]  w-[300px]'><CiCircleMore className="inline mr-2" size={20} /><p>More</p></button>

            <button className="absolute bottom-1 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center"><MdFastfood size={30} /> </button>
        </div>
    )
}




export default BottomNav