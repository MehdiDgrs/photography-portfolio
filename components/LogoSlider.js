import React from 'react';
import SliderContainer  from './SliderContainer';
import { IconContext } from 'react-icons/lib';


import {SiNextdotjs,SiTailwindcss,SiGraphql,SiApollographql,SiStrapi,SiReact} from 'react-icons/si'


export default function LogoSlider(){
return(
<>
<SliderContainer>
    <IconContext.Provider value={{color: "black", size:"2em"}}>
    <div className="flex mx-auto"><SiNextdotjs/><span className="flex flex-col justify-center text-slate-900 font-bold ml-1" >Next.js</span></div>
    <div className="flex mx-auto"><SiTailwindcss/><span className="flex flex-col justify-center text-slate-900 font-bold ml-1" >Tailwind.css</span></div>
    <div className="flex sm:mx-auto"><SiGraphql/><span className="flex flex-col justify-center text-slate-900 font-bold ml-1" >GraphQL</span></div>
    <div className="flex flex-row-reverse sm:flex-row sm:mx-auto"><SiApollographql/><span className="flex flex-col justify-center text-slate-900 font-bold ml-1" >Apollo</span></div>

    <div className="flex mx-auto"><SiStrapi/><span className="flex flex-col justify-center text-slate-900 font-bold ml-1" >Strapi</span></div>
<div className="flex mx-auto"><SiReact/><span className="flex flex-col justify-center text-slate-900 font-bold ml-1" >React</span></div>
</IconContext.Provider>
</SliderContainer>
</>
)


}