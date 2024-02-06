import React from "react"
import { useDispatch } from "react-redux"
import { toggleMenu } from "../Utils/appSlice";

const Head=()=>{
    const dispatch=useDispatch();
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img  onClick={toggleMenuHandler} className="h-8 cursor-pointer" src="https://cdn.icon-icons.com/icons2/2348/PNG/512/hamburger_icon_143010.png" alt="hamburger" />
        <img className="h-8 mx-2" src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png" alt="ytlogo" /></div>

        <div className="col-span-10 px-10">
       <input   className="w-1/2 border border-gray-400 p-2  rounded-l-full" type="text" />
       <button className="border border-gray-400  px-5 p-2 rounded-r-full bg-gray-100">🔍</button>

        </div>
        <img   className="h-8"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt5MrPqniAxFPzHkxGjFiCG4DGATpp21n2dA&usqp=CAU" alt="user" />
        </div>
    )
}
export default Head;