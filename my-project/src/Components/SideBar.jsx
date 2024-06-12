

const SideBar = ({aside}) => {
    const sides =  <>
        {
            aside.map((item , index ) => ( <div className="space-y-2" key = {index}>
                    <a className="text-sm font-semibold tracking-widest uppercase text-white hover:text-slate-90" >{item}</a>
                </div>

            ))
        }

    </>
    return (
        <div>

            <div>

                <aside className="w-full min-h-screen text-white p-6 sm:w-60 bg-slate-800 hover:text-slate-900 ">
                <nav className="space-y-8 text-sm ">

                    {sides}


                </nav>
            </aside>

            </div>

        </div>
    );
};

export default SideBar;