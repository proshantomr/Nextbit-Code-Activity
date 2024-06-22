import React from "react";

const PersonalInfo = ({ data, onChange }) => {
    return (
        <div className="ml-20">
            <h1>Personal Information</h1>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={data.name}
                    onChange={(event) => onChange('personalInfo', 'name', event.target.value)}
                    className="input input-bordered input-accent w-full max-w-xs mt-2"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Age"
                    value={data.age}
                    onChange={(event) => onChange('personalInfo', 'age', event.target.value)}
                    className="input input-bordered input-accent w-full max-w-xs mt-2"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Permanent Address"
                    value={data.permanentAddress}
                    onChange={(event) => onChange('personalInfo', 'permanentAddress', event.target.value)}
                    className="input input-bordered input-accent w-full max-w-xs mt-2"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Current Address"
                    value={data.currentAddress}
                    onChange={(event) => onChange('personalInfo', 'currentAddress', event.target.value)}
                    className="input input-bordered input-accent w-full max-w-xs mt-2"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Occupation"
                    value={data.occupation}
                    onChange={(event) => onChange('personalInfo', 'occupation', event.target.value)}
                    className="input input-bordered input-accent w-full max-w-xs mt-2"
                />
            </div>
            <div className="flex items-center space-x-4 mt-2">
                <div>
                    <label>Gender:</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        name="gender"
                        id="male"
                        className="radio radio-accent"
                        value="male"
                        checked={data.gender === 'male'}
                        onChange={(event) => onChange('personalInfo', 'gender', event.target.value)}
                    />
                    <label htmlFor="male" className="ml-2 text-white">Male</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        name="gender"
                        id="female"
                        className="radio radio-accent"
                        value="female"
                        checked={data.gender === 'female'}
                        onChange={(event) => onChange('personalInfo', 'gender', event.target.value)}
                    />
                    <label htmlFor="female" className="ml-2 text-white">Female</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        name="gender"
                        id="others"
                        className="radio radio-accent"
                        value="others"
                        checked={data.gender === 'others'}
                        onChange={(event) => onChange('personalInfo', 'gender', event.target.value)}
                    />
                    <label htmlFor="others" className="ml-2 text-white">Others</label>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
