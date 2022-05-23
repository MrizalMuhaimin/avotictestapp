import ChartBar from "../Chart/index"

function ChartCard(){
    return(
        <div className="w-1/2 bg-white rounded-sm p-2 mt-5 flex-col justify-between drop-shadow">
            <div className=" flex justify-between items-center  mb-5">
                <h2 className="text-xl">AVERAGE PURCHASE VALUE</h2>
                <div className="flex items-center">
                    <div className="flex mr-5 items-center bg-white shadow drop-shadow py-1 px-2">
                        <p className="mr-2">Last 6 months</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg> 
                </div>
            </div>
            <div className="h-96 ">
                <ChartBar/> 
            </div>
        
        </div>
    )

}

export default ChartCard;