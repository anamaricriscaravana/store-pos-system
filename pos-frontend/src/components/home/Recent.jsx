import React from 'react'
import { FaSearch } from 'react-icons/fa';
import List from './List';

const Recent = () => {
    return (
        <div className='px-8 mt-6'>
            <div className='bg-[#1a1a1a] w-full h-[450px] rounded-lg'>
                <div className='flex justify-between items-center px-6 py-4'>
                    <h1 className='text-[#f5f5f5] text-lg font-semibold -tracking-wide'>Recent</h1>
                    <a href="" className='text-[#025cca] text-sm font-semibold'>View all</a>
                </div>

                <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-4 mx-6">
                    <FaSearch className="text-[#f5f5f5]" />
                    <input
                        type='text'
                        placeholder='Search recent'
                        className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
                    />
                </div>

                {/* List */}
                <div className="mt-4 px-6 overflow-y-scroll h-[300px] scrollbar-hide"> {/* scrollbar-hide not working. aayusin pa. check tailwind.config.js */}
                    <List />
                    <List />
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Recent