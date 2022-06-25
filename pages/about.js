import React from 'react'
import LogoSlider from '../components/LogoSlider'

export default function About(props) {

 return (<section className="flex flex-col mt-9 text-sm md:text-base">
  <h1 className="mx-auto justify-center text-3xl text-slate-900 "> A propos.</h1>
  <article className="w-2/3 mx-auto mt-16"> J'ai commencé la photographie lors d'un voyage en Nouvelle-Zélande, j'ai tout de suite aimé photographier les differents paysages que je rencontrais dans ce pays, et me suis petit à petit passionné par cet art et tout ce qui l'englobe ( la retouche photo sur Lightroom notamment ). <br/>
  Etant passionné de boxe Thailandaise et de musique, j'ai par la suite lié l'utile à l'agréable en photographiant des galas de boxe ainsi que des concerts. 

    </article>
    <article className="w-2/3 mx-auto mt-6">
      La photographie n'est pour l'instant qu'un hobby dans ma vie, je suis développeur web de profession, le but de ce portfolio est de stocker sur une plateforme les differentes photos que j'ai pu prendre, tout en me formant aux nouveaux languages de programmation à la pointe,le developpement web etant un secteur qui évolue très rapidement.

      </article> 
      <article className="w-2/3 mx-auto mt-6">
N'hésitez pas à me laisser un message dans la rubrique contact si vous avez un projet que ce soit dans la photographie ou dans le web je me ferai un plaisir de vous répondre.        
      </article> 

    
      <LogoSlider/>
    
     
 </section>)
 }
