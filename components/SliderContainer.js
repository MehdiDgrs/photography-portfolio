import React from 'react'


export default function SliderContainer({children}) {
    
    return(
        <div id="container" className="w-2/3 mx-auto  mt-6 ">
            <div id="content" className=" gap-2 inline-bloc grid grid-rows-2 grid-cols-2 md:grid-cols-3">
              
                {children}
            </div>  
        </div>

    )
}