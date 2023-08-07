This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

https://www.mehdidegryse-photographe-lille.com/

Projet créé avec Next.js, pour la partie front-end j'utilise React,tailwindcss, Graphql. 
Backend CMS strapi pour pouvoir ajouter des images dynamiquement. Vu que le serveur est hebergé sur heroku il ne garde pas en mémoire le file systeme ( les photos uploadés sur strapi ) j'ai du utiliser un provider qui est cloudinary pour stocker les photos. 

Ce projet m'a permis notemment d'utiliser des React Hooks comme useCallback, useRef et useContext et de gagner en experience avec React.
Ce projet m'a également permis de me familiariser avec les concept de server side rendering, server side components, static site generation. 

Edit 06/08: Heroku a changé ses pricing le serveur prend + de temps a generer les photos je dois les optimiser 
