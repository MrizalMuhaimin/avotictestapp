function MarkerInsights(){
    return(
        <div className="bg-green w-full h-12 mt-8 flex items-center justify-between p-4 rounded-sm ">
            <h2 className="text-xl text-white font-sans">MARKET INSIGHTS</h2>
            <div className="flex hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <p className="underline text-sm text-white hover mr-2">Click Here for Help</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </div>
        </div>
    )
}

export default MarkerInsights;