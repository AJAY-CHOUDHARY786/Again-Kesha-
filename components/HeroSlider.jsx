import Image from "next/image";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

function HeroSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <div className="slideimage">
          <div className="box-slide"></div>
          <Image
            width={4000}
            height={703}
            src="/9521df6ab0b13b910924891f4005a301.png"
            alt="slide"
          />
        </div>
        <Carousel.Caption>
          <p>1.Celebrate your life with</p>
          <h3>Kesha Jewellery</h3>
          <Link href="/">Shop Now</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="slideimage">
          <div className="box-slide"></div>
          <Image
            width={4000}
            height={703}
            src="/9521df6ab0b13b910924891f4005a301.png"
            alt="slide"
          />
        </div>
        <Carousel.Caption>
          <p>2 Celebrate your life with</p>
          <h3>Kesha Jewellery</h3>
          <Link href="/">Shop Now</Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <div className="slideimage">
          <div className="box-slide"></div>
          <Image
            width={4000}
            height={703}
            src="/9521df6ab0b13b910924891f4005a301.png"
            alt="slide"
          />
        </div>
        <Carousel.Caption>
          <p>3 Celebrate your life with</p>
          <h3>Kesha Jewellery</h3>
          <Link href="/">Shop Now</Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
