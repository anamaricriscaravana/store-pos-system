import React from 'react'
import BottomNav from '../components/shared/BottomNav';
import Greetings from '../components/home/Greetings';
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import MiniCard from '../components/home/MiniCard';
import Recent from '../components/home/Recent';
import PopularItems from '../components/home/PopularItems';

const Home = () => {
    return (
        <section className='bg-[#1f1f1f] h-[calc(100vh-6rem)] overflow-hidden flex gap-3'>
            {/* Left Div */}
            <div className="flex-[3]">
                <Greetings />
                <div className="flex items-center w-full gap-3 px-8 mt-8">
                    <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
                    <MiniCard title="Current" icon={<GrInProgress />} number={19} footerNum={3.6} />
                </div>
                <Recent />
            </div>
            {/* Right Div */}
            <div className="flex-[2]">
                { <PopularItems /> } {/* di pa ayos yung pics ng mga popular items = constants/index.js and images */}
            </div>
            <BottomNav />
        </section>
    )
}

export default Home