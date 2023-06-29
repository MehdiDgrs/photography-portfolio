import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LogoSlider from "../components/LogoSlider";

export default function About(props) {
  return (
    <>
      <Head>
        <title>Photographe polyvalent à Lille | Degryse Mehdi</title>
        <meta
          name="description"
          content="Découvrez Degryse Mehdi, photographe polyvalent à Lille, prêt à capturer des images inoubliables pour toutes vos occasions. Spécialisé en événements, produits de marques et mariages, tout en restant ouvert à d'autres styles."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className=" flex flex-col mt-9 text-sm md:text-base mb-9">
        <article className="w-2/3 mx-auto mt-8">
          <h1 className="  mb-2  uppercase text-xl sm:text-2xl font-bold text-slate-900 hover:cursor-pointer mx-auto">
            {" "}
            Degryse Mehdi : Photographe polyvalent à Lille
          </h1>
        </article>
        <div className="mx-auto w-2/4 mt-6 rounded-lg overflow-hidden">
          <Image
            src="https://res.cloudinary.com/deoh6bmf7/image/upload/v1687963952/PIC01082_pvdm0m.webp" // remplacer par l'URL de votre image
            alt="Degryse Mehdi Photographe Lille" // remplacer par un texte alternatif approprié pour l'image
            width={700} // La largeur de l'image originale
            height={475} // La hauteur de l'image originale
            layout="responsive"
            sizes="(max-width: 640px) 640px, (max-width: 750px) 750px, (max-width: 828px) 828px, 1200px"
          />
        </div>
        <article className="w-2/3 mx-auto mt-8">
          <h2 className="text-slate-900 uppercase mb-2 text-lg font-semibold">
            Mon parcours en tant que photographe
          </h2>
          <p>
            {" "}
            Bonjour et bienvenue, je suis Degryse Mehdi, un photographe
            professionnel basé à Lille.<br></br> Mon voyage photographique a
            commencé en Nouvelle-Zélande, où j&apos;ai découvert ma passion pour
            capturer des moments uniques à travers l&apos;objectif.
          </p>
          <p>
            Bien que ma passion pour le sport et particulièrement la boxe me
            dirige naturellement vers la photographie d&apos;événements
            sportifs, je suis compétent dans d&apos;autres types de
            photographie, y compris le portrait, la photographie de paysage, et
            la photographie de mariage. Je suis constamment en train
            d&apos;apprendre et d&apos;explorer de nouvelles techniques pour
            offrir le meilleur à mes clients.
          </p>
          <br></br>
          <p>
            Si vous êtes à Lille ou dans ses environs et que vous cherchez un
            photographe dévoué avec une vision artistique pour vos événements,
            produits ou mariage, n&apos;hésitez pas à me{" "}
            <span className="font-bold text-black">
              <Link href="/contact"> contacter</Link>.
            </span>
          </p>
        </article>
        <h2 className="w-2/3 mx-auto mt-14 text-slate-900 uppercase  text-lg font-semibold">
          Mes prestations
        </h2>
        <article className="w-2/3 mx-auto mt-8">
          <h2 className="mb-2 text-lg font-semibold uppercase">
            Photographie d&apos;événements à Lille
          </h2>
          <p>
            En tant que photographe d&apos;événements, j&apos;ai l&apos;œil pour
            capter l&apos;excitation et l&apos;énergie, créant des souvenirs
            visuels qui dureront longtemps après la fin de l&apos;événement.
            J&apos;ai travaillé avec des organisations sportives et des
            entreprises, capturant l&apos;essence de leurs événements.
          </p>
        </article>
        <article className="w-2/3 mx-auto mt-8">
          <h2 className="mb-2 text-lg font-semibold uppercase">
            Photographie Commerciale Lille
          </h2>
          <p>
            Aider les marques à se développer à travers la photographie est une
            autre facette de mon travail que j&apos;adore. J&apos;aide les
            entreprises à créer des images percutantes et attrayantes qui
            attirent l&apos;attention des clients et augmentent les ventes.
          </p>
        </article>
        <article className="w-2/3 mx-auto mt-8">
          <h2 className="mb-2 text-lg font-semibold uppercase">
            Photographie de mariage à Lille
          </h2>
          <p>
            Je trouve également un grand plaisir à photographier les mariages.
            Capturer la joie, l&apos;amour et les moments spéciaux d&apos;un
            mariage est un véritable privilège.{" "}
          </p>
        </article>
      </section>
    </>
  );
}
