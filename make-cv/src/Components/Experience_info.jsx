import React from 'react';

const ExperienceInfo = () => {
    return (
        <div className = "col-start-2 grid grid-cols-1 gap-3 ml-20 ">

            {/*Experience*/}
            <div className="">
                <div>
                    <h1>Experience </h1>
                </div>

                <div>
                    <input type="text" placeholder="Current Job Place"
                           className="input input-bordered input-accent w-full max-w-xs mt-2"/>
                </div>
                <div>
                    <input type="text" placeholder="Position"
                           className="input input-bordered input-accent w-full max-w-xs mt-2"/>
                </div>
                <div>
                    <input type="text" placeholder="Expereince"
                           className="input input-bordered input-accent w-full max-w-xs mt-2"/>
                </div>
                <div>
                    <input type="text" placeholder="Expereince"
                           className="input input-bordered input-accent w-full max-w-xs mt-2"/>
                </div>

                <div className="flex items-center">
                    <input type="radio" name="openion" id="yes" className="radio radio-accent"
                           value="yes"/>
                    <label htmlFor="yes" className="ml-2 text-white">Yes</label>
                    <input type="radio" name="opinion" id="no" className="radio radio-accent mx-2"
                           value="no"/>
                    <label htmlFor="no" className="ml-2 text-white">No</label>
                </div>

            </div>
        </div>
    );
};

export default ExperienceInfo;