import React from "react";
import CardWImage from "../components/CardsWImageRandom";
import Artikel from "./Artikel";

const cardWImageData = [
  {
    id: "1",
    imageUrl: "https://www.qastan.be/swfiles/files/sneller-documenten-terugvinden.jpeg",
    tags: ["digitaliseren"],
    bgtag: "lightblue",
    title: "Efficiënter documenten terugvinden in de zee van mappenstructuren",
    description: "Een zee van mappenstructuren. Efficiënter zoeken en terugvinden van documenten.",
  },
  {
    id: "2",
    imageUrl: "https://www.qastan.be/swfiles/files/sterk-wachtwoord-maken.jpeg",
    tags: ["IT-infrastructuur"],
    bgtag: "darkblue",
    title: "Hoe sterk is jouw wachtwoord?",
    description: "Sterke wachtwoorden. Hoeveel tijd zou er nodig zijn om jouw wachtwoord te achterhalen? Doe de test.",
  },
  {
    id: "3",
    imageUrl: "https://www.qastan.be/swfiles/files/Ontwikkeling-op-AS400-720x340-tab.jpeg",
    tags: ["automatiseren"],
    bgtag: "bggray",
    title: "De toekomst van bedrijfs-automatisering: AS/400 blijft betrouwbaar in een digitale wereld",
    description: "Wat is AS/400?AS/400, ook wel bekend als IBM iSeries, is een reeks van computersystemen die geïntroduceerd werden door IBM in de late jaren ’80.",
  },
];
const tags = ["automatiseren", "digitaliseren", "plannen", "IT-infrastructuur"];

const BlogDetail: React.FC = () => {
  return (
    <>
      <Artikel />
      <CardWImage title="Gerelateerde artikels" cardWImageData={cardWImageData} tags={tags} detailPageRoute="/Blog" />
    </>
  );
};

export default BlogDetail;
