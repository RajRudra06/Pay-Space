'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartDataProps {
  labels: string[];      
  balances: number[];    
  bankNames: string[];   
}

function generateColors(count: number) {
    const colors = [
        '#818CF8', // indigo-400
        '#6366F1', // indigo-500
        '#4F46E5', // indigo-600
        '#4338CA', // indigo-700
        '#3730A3', // indigo-800
        '#312E81', // indigo-900
        '#5A5CD6', // custom: between 500–600
        '#3C3FAD', // custom: between 600–700
        '#2F2F94', // custom: deep indigo blend
        '#2B2E78', // custom: moody indigo
        '#4043B0', // custom: brighter than 600
        '#5557C9', // custom: softer than 700
      ];
      
      
      

  return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
}

export default function DoughNutChart({ labels, balances, bankNames }: ChartDataProps) {
  const backgroundColors = generateColors(bankNames.length);

  const data = {
    labels: bankNames,
    datasets: [
      {
        label: 'Bank Balances',
        data: balances,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // 💥 Removes the legend
      },
    },
    maintainAspectRatio: false,
  };

  return <Doughnut data={data} options={options} />;
}
