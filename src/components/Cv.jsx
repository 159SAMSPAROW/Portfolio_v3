
import { CvSection, Div1, H2, Img } from "../style/cv";

const Cv = () => {
  return (
    <CvSection>
      <Div1>
        <H2>CV</H2>
        <a
          href="/images/CV3.jpg"
          download="CV_DEMIR_Sami.png"
          title="Clicker pour me Télécharger"
        >
          <Img src="/images/CV3.jpg"></Img>
        </a>
      </Div1>
    </CvSection>
  );
};

export default Cv;
