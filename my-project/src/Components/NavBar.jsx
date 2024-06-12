const NavBar = ({navbar}) => {

    const navs = <>
        {navbar.map((item, index)=>(<a href="#"
            className="font-bold px-3 py-2 text-white rounded-lg hover:bg-slate-100 hover:text-slate-900 " key={index}>{item}</a>))
}
    </>
    return (<div>
            <nav className=" flex justify-between space-x-6 bg-slate-800 py-4">

                <div className="ml-64 mt-3">
                    {
                        navs
                    }

                </div>

                <div>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none"
                                 viewBox="0 0 20 20"></svg>
                        </div>
                        <input type="search" id="default-search"
                               className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search "/>
                        <button type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                        </button>
                    </div>
                </div>


            </nav>
        </div>);
};

export default NavBar;