import ProductCard  from "../ProductCard/indext";
function Sku(props){
    return(
        <div className="w-1/5 ">
                    <div className="w-80 bg-white rounded-sm p-4 mt-5  drop-shadow">
                        <div className="mb-5 flex justify-between items-center">
                            <h2 className="text-xl">{props.type}</h2>
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

    )
}

export default Sku;