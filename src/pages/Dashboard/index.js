import FilterPeriod from '../../components/FilterPeriod/index';
import MarkerInsights from '../../components/MarkerInsights/index';

function Dashboard(){
    return(
        <div className="relative top-20 left-28 w-11/12 p-5" >
            <div className="flex justify-between items-center ">
                <h2 className="text-4xl text-gray-4 font-sans font-semibold ">Dashboard</h2>
                <FilterPeriod/>
            </div>
            <MarkerInsights/>
            <div className="w-72 p-3 h-24 bg-white rounded-sm mt-5  drop-shadow">
                <div className="flex justify-between">
                    <h3 className="text-gray-4 text-sm">Sales Turnover</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                </div>
                <div className="flex">
                    <div className="flex-col">
                        <h2 className="text-xl font-sans font-bold tracking-wide">Rp 3,600,000</h2>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 stroke-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                            </svg>
                            <p className="text-red text-xs mr-1">13.8%</p>
                            <p className="text-xs text-gray-4">last period in products sold</p>

                        </div>

                    </div>
                </div>


            </div>
            
        </div>
    )
}

export default Dashboard;