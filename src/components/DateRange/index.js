import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import {
    addDays,
    startOfMonth,
    addMonths,
    isSameDay,
  } from "date-fns";

import CalenderIcon from "../../assets/images/calendar.png"

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const staticRanges =  [
    {
        label: "Today",
        range: () => ({
        startDate: new Date(),
        endDate: new Date()
        }),
        isSelected(range) {
        const definedRange = this.range();
        return (
            isSameDay(range.startDate, definedRange.startDate) &&
            isSameDay(range.endDate, definedRange.endDate)
        );
        }
    },
    {
        label: "Yesterday",
        range: () => ({
        startDate: addDays(new Date(),-1),
        endDate:  addDays(new Date(),-1),
        }),
        isSelected(range) {
        const definedRange = this.range();
        return (
            isSameDay(range.startDate, definedRange.startDate) &&
            isSameDay(range.endDate, definedRange.endDate)
        );
        }
    },
    {
        label: "Last 7 Days",
        range: () => ({
            startDate: addDays(new Date(),-7),
            endDate: addDays(new Date(),-1),
        }),
        isSelected(range) {
        const definedRange = this.range();
        return (
            isSameDay(range.startDate, definedRange.startDate) &&
            isSameDay(range.endDate, definedRange.endDate)
        );
        }
    },
    {
        label: "Last 30 Days",
        range: () => ({
            startDate: addDays(new Date(),-30),
            endDate: new Date(),
        }),
        isSelected(range) {
        const definedRange = this.range();
        return (
            isSameDay(range.startDate, definedRange.startDate) &&
            isSameDay(range.endDate, definedRange.endDate)
        );
        }
    },
    {
        label: "This Month",
        range: () => ({
            startDate: startOfMonth(addMonths(new Date(),0)),
            endDate: new Date()
        }),
        isSelected(range) {
        const definedRange = this.range();
        return (
            isSameDay(range.startDate, definedRange.startDate) &&
            isSameDay(range.endDate, definedRange.endDate)
        );
        }
    },
    {
        label: "Custom",
        range: () => ({
            startDate: new Date(),
            endDate: new Date()
        }),
        isSelected(range) {
            
        const definedRange = this.range();
        return (
            isSameDay(range.startDate, definedRange.startDate) &&
            isSameDay(range.endDate, definedRange.endDate)
        );
        }
    },
    ]


function DateRange(props){
    const [modal, setModal] = useState(props.modal);
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(),0),
          key: 'selection'
        }
      ]);

    const closeModal = () =>{
        setModal(false)
        console.log(modal)
    }

    const applyDate =()=>{
        console.log(state);
        closeModal();
        props.falsemodal()
        props.updateDate({startDate: state[0].startDate,endDate: state[0].endDate})


    }

    return (
        <div className={`fixed bg-white w-max z-30 top-24 shadow right-16 ${props.modal ? 'block':'hidden'} `}>
            <div className="flex justify-between p-5 items-center">
                <div className="flex items-center">
                    <img className="w-5 h-5 mr-3" src={CalenderIcon} alt="ico period"></img>
                    <p className="mr-5">Period</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={props.falsemodal} className="h-6 w-6 stroke-gray-4 hover:stroke-red hover:cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                
            </div>
            <DateRangePicker onChange={item => setState([item.selection])}
                showSelectionPreview={false}
                moveRangeOnFirstSelection={true}
                months={2}
                editableDateInputs={true}
                showDateDisplay={false}
                showMonthAndYearPickers ={false}
                rangeColors ={["#37B04C"]}
                colors ={"#37B04C"}
                ranges={state}
                staticRanges = {staticRanges}
                inputRanges={[]}
                direction="horizontal"/> 


                <button onClick={applyDate} className='bg-green rounded text-white py-1 px-3 w-44 text-sm absolute left-5 bottom-10 hover:bg-green-2' >Apply</button>
 
        </div>
          
        
    )

}

export default DateRange;