import React from 'react';

const EducationInfo = () => {
    return (
        <div>
            {/*Education Information*/}

            <div className="mx-20">
                <h1> Education Information</h1>

                <div>
                    <input type="text" placeholder="Institue Name"
                           className="input input-bordered input-accent w-full max-w-xs mt-2"/>
                </div>
                <div>
                    <input type="text" placeholder="Name Of Degree"
                           className="input input-bordered input-accent w-full max-w-xs mt-2"/>
                </div>
                <div>
                    <input type="text" placeholder="Passing year"
                           className="input input-bordered input-accent w-full max-w-xs mt-2"/>
                </div>
                <div>
                    <input type="text" placeholder="Result"
                           className="input input-bordered input-accent w-full max-w-xs mt-2"/>
                </div>
                <div className="flex justify-end pt-2">
                    <button className="btn btn-outline btn-accent">Add More +</button>
                </div>

            </div>
        </div>
    );
};

export default EducationInfo;