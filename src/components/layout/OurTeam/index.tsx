import { BoxTeam } from "../../BoxTeam";
import "./styles.scss";

export function OurTeam() {
  return (
    <section className="ourTeam">
      <div className="container">
        <div className="title">
          <h1>Nossa Equipe</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="contentOurTeam">
          <BoxTeam
            imgLink="https://pps.whatsapp.net/v/t61.24694-24/106314515_128951465506587_2679962396745859390_n.jpg?ccb=11-4&oh=01_AdQ30-2Ah4uOxlckKegPQohVc7gJUcoq_bHkE9Mb3jfelA&oe=64C3FEB9"
            name="Natan Esteves"
            office="Programador"
            link={{
              instagram: "",
              tiktok: "",
            }}
          />
          <BoxTeam
            imgLink="https://pps.whatsapp.net/v/t61.24694-24/342950510_1586916895153697_2222690074104778513_n.jpg?ccb=11-4&oh=01_AdRj0RSGihwts11kcY_IZID1MAsECp15V5t2PIWf-rXCAg&oe=64C3F7BB"
            name="Bruno Castilho"
            office="Dono/CEO"
            link={{
              instagram: "",
              tiktok: "",
            }}
          />
          <BoxTeam
            imgLink="https://pps.whatsapp.net/v/t61.24694-24/328156737_578904924090624_7763975403522391552_n.jpg?ccb=11-4&oh=01_AdTuZV28xcRhefYUVtShrifn1-XfmpqFvKbmg30QTfucOg&oe=64BFE6CD"
            name="Dr Ronald Ledo"
            office="CEO"
            link={{
              instagram: "",
              tiktok: "",
            }}
          />
         
        </div>
      </div>
    </section>
  );
}
