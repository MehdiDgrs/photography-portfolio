This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Le projet est deployé ici par vercel : https://photography-portfolio-git-main-mehdidgrs.vercel.app/ . 

Premier projet avec NextJS, pour la partie front-end j'utilise React,tailwindcss, Apollo pour réaliser des query graphQL directement client side. 
Pour le back end j'utilise le CMS strapi en tant que serveur pour intégrer de nouvelles photos, query réalisées avec graphQL, vu que le serveur est hebergé sur heroku il ne garde pas en mémoire le file systeme ( les photos uploadés sur strapi ) j'ai du utiliser un provider qui est cloudinary pour stocker les photos. 

Ce projet m'a permis notemment d'utiliser des React Hooks comme useCallback, useRef et useContext et de gagner en experience avec React.
L'index est generé en server side rendering ce qui permet d'augmenter grandement les performances du site ainsi que son SEO.

