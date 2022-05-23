import { Chart } from 'react-chartjs-2';



import Data from '../../data/Purchase/index';



const options = {
    title: {
      display: true,
      text: 'Oversikt'
    },

    interaction: {
        intersect: false,
      },

    toolTip: {
        shared: true,
        reversed: true
    },

    scales: {
        x: {
        stacked: true,
        barPercentage: 0.4,
        categoryPercentage: 0.5,
        
        },
        y: {
        stacked: true,
        },
    },
    legend: {
      display: true
    },
    responsive: true,
    maintainAspectRatio: false,
    animationEnabled: true,
  }


function ChartBar(){
    return(
        <Chart  data={Data} type="bar" options={options} /> 
    )

}

export default ChartBar;