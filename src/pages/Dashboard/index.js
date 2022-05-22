import FilterPeriod from '../../components/FilterPeriod/index';
import MarkerInsights from '../../components/MarkerInsights/index';
import SelesTurnover from '../../components/SelesTurnover/index'; 
import ProductCard from '../../components/ProductCard/indext';



function Dashboard(){
    return(
        <div className="relative top-20 left-28 w-11/12 p-5" >
            <div className="flex justify-between items-center ">
                <h2 className="text-4xl text-gray-4 font-sans font-semibold ">Dashboard</h2>
                <FilterPeriod/>
            </div>
            <MarkerInsights/>
            <SelesTurnover/>
            <div className="flex justify-between">
                <div className="w-1/2 bg-white rounded-sm p-8 mt-5  drop-shadow ">
                    <div className="mb-5 flex justify-between items-center">
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
                
                </div>
                <div className="w-1/5 ">
                    <div className="w-full bg-white rounded-sm p-4 mt-5  drop-shadow">
                        <div className="mb-5 flex justify-between items-center">
                            <h2 className="text-xl">BEST SELLING SKU</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg> 
                        </div>
                        <ProductCard isBest={true}/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>


                </div>
                <div className="w-1/5 ">
                    <div className="w-full bg-white rounded-sm p-4 mt-5  drop-shadow">
                        <div className="mb-5 flex justify-between items-center">
                            <h2 className="text-xl">BEST SELLING SKU</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-gray-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg> 
                        </div>
                        <ProductCard isBest={true}/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>


                </div>
            </div>
            
            
            
        </div>
    )
}

export default Dashboard;