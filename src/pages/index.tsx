import Head from 'next/head'
import {Inter} from 'next/font/google'
import {Col, Row} from "antd";
import {ProductCard} from "@/components/Cards/ProductCard";
import {TProduct} from "@/Redux/features/productsSlice";
import {FooterComponent} from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export default function Home({products}: { products: TProduct[] | undefined }) {
    return (
        <>
            <Head>
                <title>Build Your Pc</title>
            </Head>
            <main>
                <section>
                    slider section
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
                <section>
                    features categories section
                </section>
                <FooterComponent/>
            </main>
        </>
    )
}


export const getServerSideProps = async () => {
    const result = await fetch('http://localhost:3000/api/products')
    const data = await result.json()

    return {
        props: {
            products: data?.products
        }
    }
}