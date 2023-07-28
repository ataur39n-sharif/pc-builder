import {Carousel} from 'antd';

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const CarouselComponent = () => (
    <Carousel
        // autoplay
        draggable={true}
        // style={{
        //     height: '40vh',
        //     backgroundColor: 'black'
        // }}
    >
        <div>
            <h3 style={contentStyle}>1</h3>
            {/*<Image*/}
            {/*    style={contentStyle}*/}
            {/*    src='/flash_sale.jpeg'*/}
            {/*    alt={'flash_Sale_Image'}*/}
            {/*    height={'100'}*/}
            {/*    width={'100'}*/}
            {/*/>*/}
            {/*<div style={{position: 'relative'}}>*/}
            {/*    <img*/}
            {/*        style={{*/}
            {/*            position: 'absolute',*/}
            {/*            width: "100%"*/}
            {/*            // margin: "0 auto",*/}
            {/*        }}*/}
            {/*        src="/flash_sale.jpeg"*/}
            {/*        alt="flash_sale_iamge"/>*/}
            {/*</div>*/}

        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);

export default CarouselComponent;
