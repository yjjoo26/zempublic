import '../App.css';
import { Carousel, Radio  } from 'antd';

function CarouselTest() {

    // state = {
    //     dotPosition: 'top',
    //   };
    
    //   handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });
    

  return (

    // const { dotPosition } = this.state;

    <div className="CarouselTest">
        <h3>Carousel Example-(Basic)</h3>
        <div style={{width:"500px", margin:"0 auto"}}>
            <Carousel>
                <div>
                <h3>1</h3>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
                <div>
                <h3>4</h3>
                </div>
            </Carousel>
        </div>
        
        <h3>Carousel Example-(position)</h3>
        {/* <div>
            <Radio.Group
            onChange={this.handlePositionChange}
            value={dotPosition}
            style={{ marginBottom: 8 }}
            >
                <Radio.Button value="top">Top</Radio.Button>
                <Radio.Button value="bottom">Bottom</Radio.Button>
                <Radio.Button value="left">Left</Radio.Button>
                <Radio.Button value="right">Right</Radio.Button>
            </Radio.Group>
            <Carousel dotPosition={dotPosition}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        </div> */}
        <div style={{width:"500px", margin:"0 auto"}}>
            <Radio.Group
            //   onChange={this.handlePositionChange}
            //   value={dotPosition}
            style={{ marginBottom: 8 }}
            >
            <Radio.Button value="top">Top</Radio.Button>
            <Radio.Button value="bottom">Bottom</Radio.Button>
            <Radio.Button value="left">Left</Radio.Button>
            <Radio.Button value="right">Right</Radio.Button>
            </Radio.Group>
            <Carousel dotPosition='left' style={{marginBottom:"20px"}}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            </Carousel>
            <Carousel dotPosition='right' style={{marginBottom:"20px"}}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            </Carousel>
            <Carousel dotPosition='bottom' style={{marginBottom:"20px"}}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            </Carousel>
            <Carousel dotPosition='top'>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            </Carousel>
        </div>
        <h3>Carousel Example-(Scroll Automatic)</h3>
        <div style={{width:"500px", margin:"0 auto"}}>
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        </div>
        <h3>Carousel Example-(Fade in)</h3>
        <div style={{width:"500px", margin:"0 auto"}}>
            <Carousel effect='fade'>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>
        </div>

    </div>
    
  );
}

export default CarouselTest;