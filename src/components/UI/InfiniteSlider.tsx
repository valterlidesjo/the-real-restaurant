import { InfiniteText } from "../data/InfiniteTextData";
import "../scss/_InfiniteSlider.scss";

interface InfiniteSliderProps {
  text: InfiniteText[];
}

const InfiniteSlider = ({ text }: InfiniteSliderProps) => {
  return (
    <div className="scroll-container-slider">
      <div className="carousel-primary">
        {text.map((t, i) => (
          <p className="carousel-text" key={i}>
            {t.text}
          </p>
        ))}
      </div>
      <div className="carousel-primary carousel-secondary">
        {text.map((t, i) => (
          <p className="carousel-text" key={i}>
            {t.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
