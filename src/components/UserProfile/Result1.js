import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Leadership', 'Consistency', 'Discipline', 'Hardworking', 'Smaarkworking', 'Honesty'],
  datasets: [
    {
      label: '# test1',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        ' RGB(255,255,0)',
        '#FF1E1E',
        '#FF0060',
        '#FFB84C',
        '#E8A0BF',
        '#7E1717',
      ],
      borderColor: [
        'RGB(255,255,0)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

export default function Result1() {
  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#E3CCAE',     // Change the color of the legend text
          font: {
            size: 16,         // Change the font size of the legend text
          },
        },
      },
    },
  };



  return (
    <>
    <div className=' bg-[#262A56] space-y-6 pt-10 pb-10 border  border-gray-200 '>
     <h1 className='flex flex-row items-center justify-center text-[#E3CCAE] text-2xl font-bold'>MBIT</h1> 
     <div className='h-80 flex flex-row items-center justify-center  bg-[#262A56]'>
        <Pie data={data} options={options}/>
    </div>
   </div>

    
    </>
  );
}
