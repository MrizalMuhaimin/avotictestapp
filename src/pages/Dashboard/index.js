import FilterPeriod from '../../components/FilterPeriod/index';
import MarkerInsights from '../../components/MarkerInsights/index';
import SelesTurnover from '../../components/SelesTurnover/index'; 
import Sku from '../../components/Sku/index';
import ChartCard from '../../components/ChartCard/index';
import DateRange from '../../components/DateRange/index';
import { useState } from 'react';

import {
    addDays,
  } from "date-fns";


function Dashboard(){
    const [modal, setModal] = useState(false);
    const [date, setDate] = useState(
        {
          startDate: addDays(new Date(),-1),
          endDate: addDays(new Date(),-7),
        });


    const updateDate=(object)=>{
        setDate(object)

    }
    const handleModalTrue=()=>{
        console.log(modal);
        setModal(true);

    }

    const handleModalFalse=()=>{
        console.log(modal);
        setModal(false);

    }


    

    return(
        <div className="relative top-20 left-28 w-11/12 p-5" >
            <div className="flex justify-between items-center ">
                <h2 className="text-4xl text-gray-4 font-sans font-semibold ">Dashboard</h2>
                <FilterPeriod modal={handleModalTrue} startdate={date.startDate} enddate={date.endDate}/>
            </div>
            <MarkerInsights/>
            <SelesTurnover/>
            <div className="flex justify-between h-full ">
                <ChartCard/>
                
                <Sku type="BEST SELLING SKU"/>
                <Sku type="TOP COMPETITOR SKU"/> 
                  
            </div> 
            <DateRange modal={modal} falsemodal={handleModalFalse} updateDate={updateDate}/>
            
        </div>
    )
}

export default Dashboard;