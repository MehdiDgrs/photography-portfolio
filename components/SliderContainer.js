import React from 'react'

export default function SliderContainer({children,initialOffsetX,contentWidth}) {
    return(
        <div id="container" className="w-2/3 mx-auto overflow-x-hidden mt-16 ">
            <div id="content" className="inline-block">
              
                {children}
            </div>
        </div>

    )
}