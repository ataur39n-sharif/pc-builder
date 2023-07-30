import Head from 'next/head'
import {Inter} from 'next/font/google'
import {Col, Row} from "antd";
import {ProductCard} from "@/components/Cards/ProductCard";
import {TProduct} from "@/Redux/features/productsSlice";
import CarouselComponent from "@/components/Carousel";
import {FeatureCategoriesCard} from "@/components/Cards/FeatureCategoriesCard";

const inter = Inter({subsets: ['latin']})

export default function Home({products}: { products: TProduct[] | undefined }) {
    return (
        <>
            <Head>
                <title>Build Your Pc</title>
            </Head>
            <main>
                <section>
                    <CarouselComponent/>
                </section>
                <section>
                    <div className='container mt-5 mb-5'>
                        <h1 className={'text-center p-5'}>Featured product's</h1>
                        <Row gutter={[16, 16]} justify={"center"}>
                            {
                                products?.slice(0, 6).map((product: TProduct) => (
                                    <Col sm={24} md={12} lg={8} className='d-flex justify-content-center'
                                         key={product.id}>
                                        <ProductCard product={product}/>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </section>
                <section className={'text-center'}>
                    <h1 className={'p-5'}>Featured categories</h1>
                    <div className={'d-flex justify-content-center align-items-center'}>
                        <FeatureCategoriesCard/>
                    </div>

                </section>
            </main>
        </>
    )
}


export const getServerSideProps = async () => {
    const result = await fetch('https://mocki.io/v1/590876b7-a6ac-4eb5-bda1-bbfd0735252e')
    const data = await result.json()

    return {
        props: {
            products: data?.products
        }
    }
}