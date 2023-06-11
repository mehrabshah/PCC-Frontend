import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const data = {
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
        {
            label: '# of Votes',
            data: [2, 9, 3, 5, 2, 3],
            backgroundColor: '#E3CCAE',
        
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
        },
    ],
};


export default function Personality() {

    return (
        <>
            <div className="h-screen w-screen bg-black overflow-x-hidden box-border m-0 p-0 ">
                <div className="lg:max-w-xl  lg:mx-auto  h-full">
                    {/* container-inner */}
                    <div className="p-4 flex flex-row h-full items-center justify-center ">
                        <div className=" flex flex-col w-[80%] bg-white pl-8 pr-8 pt-16 pb-16 / space-y-12 border  border-gray-200   ">
                            <Radar data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
