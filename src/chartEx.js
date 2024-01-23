import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [...Array(24).keys()].map((n)=> `Mes ${n}`);
const values = {
  "0": "45.6",
  "1": "50",
  "2": "53.2",
  "3": "55.8",
  "4": "58",
  "5": "59.9",
  "6": "61.5",
  "7": "62.9",
  "8": "64.3",
  "9": "65.6",
  "10": "66.8",
  "11": "68",
  "12": "69.2",
  "13": "70.3",
  "14": "71.3",
  "15": "72.4",
  "16": "73.3",
  "17": "74.3",
  "18": "75.2",
  "19": "76.2",
  "20": "77",
  "21": "77.9",
  "22": "78.7",
  "23": "79.6",
  "24": "80.3",
}
const valuesP15 = {
  "0": "47.2",
  "1": "51.7",
  "2": "55",
  "3": "57.6",
  "4": "59.8",
  "5": "61.7",
  "6": "63.4",
  "7": "64.9",
  "8": "66.3",
  "9": "67.6",
  "10": "68.9",
  "11": "70.2",
  "12": "71.3",
  "13": "72.5",
  "14": "73.6",
  "15": "74.7",
  "16": "75.7",
  "17": "76.7",
  "18": "77.7",
  "19": "78.7",
  "20": "79.6",
  "21": "80.5",
  "22": "81.4",
  "23": "82.2",
  "24": "83.1"
}
const valuesP20 = {
  "0": "49.1",
  "1": "53.7",
  "2": "57.1",
  "3": "59.8",
  "4": "62.1",
  "5": "64",
  "6": "65.7",
  "7": "67.3",
  "8": "68.7",
  "9": "70.1",
  "10": "71.5",
  "11": "72.8",
  "12": "74",
  "13": "75.2",
  "14": "76.4",
  "15": "77.5",
  "16": "78.6",
  "17": "79.7",
  "18": "80.7",
  "19": "81.7",
  "20": "82.7",
  "21": "83.7",
  "22": "84.6",
  "23": "85.5",
  "24": "86.4"
}
const valuesP80 = {
  "0": "51.1",
  "1": "55.7",
  "2": "59.2",
  "3": "62",
  "4": "64.3",
  "5": "66.3",
  "6": "68.1",
  "7": "69.7",
  "8": "71.2",
  "9": "72.6",
  "10": "74",
  "11": "75.4",
  "12": "76.7",
  "13": "77.9",
  "14": "79.2",
  "15": "80.3",
  "16": "81.5",
  "17": "82.6",
  "18": "83.7",
  "19": "84.8",
  "20": "85.8",
  "21": "86.8",
  "22": "87.8",
  "23": "88.8",
  "24": "89.8"
}
let options =  {
  elements: {
      point:{
          radius: 0
      }
  },
  scales: {
    y: {
      min: 45,
      max: 95
    }
  }
}

const image = new Image();
image.src = "logo.svg"

const imageBackground = {
  id: "chartImgBg",
  beforeDatasetsDraw(chart, args, plugins) {
    const { ctx, chartArea: {top, bottom, left, right, width, height } } = chart;
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(left, top, width, height);
    ctx.drawImage(image, left, top, width, height)
  }
}

const data = {
  labels,
  datasets: [
    {
      label: 'Percentil 3',
      data: [...Array(24).keys()].map((n) => values[n]),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Percentil 15',
      data: [...Array(24).keys()].map((n) => valuesP15[n]),
      borderColor: 'rgb(255, 49, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Percentil 20',
      data: [...Array(24).keys()].map((n) => valuesP20[n]),
      borderColor: 'rgb(55, 49, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Percentil 80',
      data: [...Array(24).keys()].map((n) => valuesP80[n]),
      borderColor: 'rgb(55, 139, 132)',
      backgroundColor: 'rgba(55, 99, 32, 0.5)',
    },
  ],
};
const Example = () => {
  return <div className='mx-10 mt-20'>
    <Line options={options} data={data} />
  </div>
}

export default Example;