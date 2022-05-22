function SideBar(){
    return (
        <div className="fixed flex flex-col items-center top-0 left-0 bottom-0 w-20 min-h-screen bg-white">
            <div className="mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-gray-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>

        </div>

    )
}

export default SideBar;