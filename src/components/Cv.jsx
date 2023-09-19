
import { CvSection, Div1, H2, Img } from "../style/cv";

const Cv = () => {
  return (
    <CvSection>
      <Div1>
        <H2>CV</H2>
        <a
          href="/images/CV_5.pdf"
          download="CV_DEMIR_Sami.pdf"
          title="Clicker pour me Télécharger"
        >
          <Img src="/images/CV_5.jpg"></Img>
        </a>
      </Div1>
    </CvSection>
  );
};

export default Cv;
