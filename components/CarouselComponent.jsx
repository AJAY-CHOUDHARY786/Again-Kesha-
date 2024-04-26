import { Carousel } from 'react-bootstrap';
import { CiStar } from "react-icons/ci";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="main-two-iamge1">
          <div className="first-p-image1">
            <h4 className='aluks'>Alukas is my favourite store</h4>
            <p className='greet'>
			Great products and designs and such great quality, they always wash up well no matter how many times I wash them.		</p>
      <span className='color-start'><CiStar /><CiStar /><CiStar /><CiStar /></span>
      <p>- Donald Duclk</p>
      
          </div>
        
          <div className="second-p1">
            <img src="/j.jpg" alt="category" className="first-c" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="main-two-iamge1">
          <div className="first-p-image1">
            <h4 className='aluks'>Alukas is my favourite store</h4>
            <p className='greet'>
			Great products and designs and such great quality, they always wash up well no matter how many times I wash them.		</p>
      <span className='color-start'><CiStar /><CiStar /><CiStar /><CiStar /></span>
      <p>- Donald Duclk</p>

          </div>
        
          <div className="second-p1">
            <img src="/b.jpg" alt="category" className="first-c" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="main-two-iamge1">
          <div className="first-p-image1">
            <h4 className='aluks'>Alukas is my favourite store</h4>
            <p className='greet'>
			Great products and designs and such great quality, they always wash up well no matter how many times I wash them.		</p>
      <span className='color-start'><CiStar /><CiStar /><CiStar /><CiStar /></span>
      <p>- Donald Duclk</p>
          </div>
        
          <div className="second-p1">
            <img src="/c.jpg" alt="category" className="first-c" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
