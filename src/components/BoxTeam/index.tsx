import { SiInstagram, SiTiktok } from "react-icons/si";

import "./styles.scss";

type OurTeamProps = {
  imgLink: string;
  name: string;
  office: string;
 
};

export function BoxTeam({ imgLink, name, office}: OurTeamProps) {
  return (
    <div className="boxTeam">
      <img src={imgLink} alt={`Photo ${name}`} />

      <h2>{name}</h2>
      <span>{office}</span>

     
    </div>
  );
}
