import {useReducer, useState} from "react"
import Navbar from "./Components/Navbar.jsx";
import Education_info from "./Components/Education_info.jsx";
import Experience_info from "./Components/Experience_info.jsx";
import Personal_info from "./Components/Personal_info.jsx";



// const  initialState = {
//     personalInfo: {
//         name: '',
//         age: '',
//         permanentAddress: '',
//         currentAddress: '',
//         occupation: '',
//         gender: ''
//     },
//     educationInfo:{
//         instituteName: '',
//         degreeName: '',
//         passingYear: '',
//         result: ''
//     },
//     experienceInfo:{
//         currentJobPlace: '',
//         position: '',
//         experience: '',
//
//     }
// };


const  reducer = (state, action) => {
    switch (action.type) {
        case 'PERSONAL_INFO':
            return {
                ...state,
                personalInfo: {
                    ...state.personalInfo,
                    [action.field]: action.value
                }
            };

        case 'EDUCATION_INFO':
            return {
                ...state,
                educationInfo: {
                    ...state.educationInfo,
                    [action.field]: action.value
                }
            };
        case 'EXPERIENCE_INFO':
            return {
                ...state,
                experienceInfo: {
                    ...state.experienceInfo,
                    [action.field]: action.value
                }
            };

        default:
            return state;
    }
};
// console.log(reducer);



function App() {

    const  initialState = {
        personalInfo: {
            name: '',
            age: '',
            permanentAddress: '',
            currentAddress: '',
            occupation: '',
            gender: ''
        },
        educationInfo:{
            instituteName: '',
            degreeName: '',
            passingYear: '',
            result: ''
        },
        experienceInfo:{
            currentJobPlace: '',
            position: '',
            experience: '',

        }
    };


    const [states, dispatch] = useReducer(reducer, initialState);

    const handleComplete = (type, field, value) => {
        dispatch({ type, field, value });
    };
    const [cv, setCv] = useState(null);
    const handleSubmit = () => {
        const cvData = { states };
        setCv(cvData);
        console.log(cvData);
    };


  return (
      <div>

          <Navbar/>
          <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 pt-40 gap-4">
                  <Personal_info data={states.personalInfo} onChange={handleComplete} />
                  <Education_info/>

                  <Experience_info/>
              </div>
              <div className="flex justify-center mt-4">
                  <button type="submit" className="btn btn-outline btn-accent mt-4 ">Submit</button>
              </div>
          </form>
      </div>
  )
}

export default App
