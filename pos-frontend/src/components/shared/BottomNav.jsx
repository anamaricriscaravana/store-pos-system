import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { IoReorderThree } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { MdInventory } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Modal from "../shared/Modal";


const BottomNav = () => {

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-12 flex justify-around'>
            <button onClick={() => navigate("/")} className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[300px] rounded-[20px]'><FaHome className="inline mr-2" size={20} /><p>Home</p></button>
            <button onClick={() => navigate("/orders")} className='flex items-center justify-center text-[#ababab]  w-[300px]'><IoReorderThree className="inline mr-2" size={20} /><p>Orders</p></button>
            <button onClick={() => navigate("/inventory")} className='flex items-center justify-center text-[#ababab]  w-[300px]'><MdInventory className="inline mr-2" size={20} /><p>Inventory</p></button>
            <button className='flex items-center justify-center text-[#ababab]  w-[300px]'><CiCircleMore className="inline mr-2" size={20} /><p>More</p></button>

            <button
                onClick={openModal}
                className="absolute bottom-6 bg-[#F6B100] text-[#f5f5f5] rounded-full p-3 items-center"><MdFastfood size={30} /> </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
                <div>
                    <label className="block text-[#ababab] mb-2 text-sm font-medium">Customer Name</label>
                    <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
                        <input type="text" name=" " placeholder="Enter customer name" id=" " className="bg-transparent flex-1 text-white focus: outline-none" />
                    </div>
                </div>
                {/* <div>
                    <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">Guest</label>
                    <div className="flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg"></div>
                    <button className="text-yellow-50 text-2xl">&minus;</button>
                    <span className="text-white">0 Buy</span>
                    <button className="text-yellow-500 text-2xl">&#43;</button>
                </div> */}
                
                <button onClick={() => navigate("/inventory")} className="w-full bg-[#f6b100] text-[#f5f5f5] rounded-lg py-3 mt-6 hover:bg-yellow-700">Create Order</button>
            </Modal>
        </div>
    )
}


export default BottomNav