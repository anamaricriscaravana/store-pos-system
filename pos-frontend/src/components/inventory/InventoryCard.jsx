import React from 'react'
import { getRandomBG } from '../../utils';
import { useNavigate } from 'react-router-dom';
 

const InventoryCard = ({key, name, status, initials}) => {

    const navigate = useNavigate();
    const handleClick = () => {
        if(status === "Unavailable") return;
        navigate(`/product`);
    };

    return (
        <div onClick={handleClick} key={key} className='w-[300px] hover:bg-[#2c2c2c] bg-[#262626] p-4 rounded-lg cursor-pointer'>
            <div className='flex items-center justify-between px-1'>
                <h1 className='text-[#f5f5f5] text-xl font-semibold'>{name}</h1>
                <p className={`${status === "High" ? "text-green-600 bg-[#2e4a40]" : "bg-[#f6b100] text-white"} px-2 py-1 rounded-lg`}>
                    {status} 
                    </p> {/* Ready P2 20:08. change ko pa kung low in stock nakalagay */}
            </div>
            <div className='flex items-center justify-center mt-5 mb-9'> 
            {/* <h1 className={${getRandomBG()}text-white rounded-full p-5 text-xl}> */}
            <h1 style={getRandomBG()} className="text-white rounded-full p-5 text-xl">
                {initials}</h1>
            </div> 
        </div>
    );
};

export default InventoryCard