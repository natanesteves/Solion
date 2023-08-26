import { SiInstagram, SiTiktok } from "react-icons/si";

import "./styles2.scss";

type OurTeamProps = {
  imgLink: string;
  name: string;
  office: string;
 
};

export function BoxTeam2({ imgLink, name, office}: OurTeamProps) {
  return (
    <div className="card">
      <span></span>
            <div className="content"> 
            <img src={imgLink} alt={`Photo ${name}`} />

<h2>{name}</h2>



            </div>

     
    </div>
  );
}
