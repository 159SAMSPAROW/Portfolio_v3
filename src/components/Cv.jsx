import React from "react";
import { CvSection, Div1, H2, Img } from "../style/cv";

const Cv = () => {
  return (
    <CvSection>
      <Div1>
        <H2>CV</H2>
        <a
          href="/images/CV2.png"
          download="CV_DEMIR_Sami.png"
          title="Clicker pour me Télécharger"
        >
          <Img src="/images/CV2.png"></Img>
        </a>
      </Div1>
    </CvSection>
  );
};

export default Cv;
