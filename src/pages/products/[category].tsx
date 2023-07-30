import {useRouter} from "next/router";
import {TProduct} from "@/Redux/features/productsSlice";
import {useAppDispatch, useAppSelector} from "@/Redux/hooks";
import {addToList, categoryList, removeFromList} from "@/Redux/features/pcBuildSlice";
import {Button, Col, Row} from "react-bootstrap";
import Link from "next/link";

export default function ProductsByCategory({data}: { data: TProduct[] | [] }) {
    const {query} = useRouter()
    const pcParts = useAppSelector((state) => state.pcBuild)
    const dispatch = useAppDispatch()
    // @ts-ignore
    const parts: TProduct | null | undefined = pcParts[query.category]

    return (
        <div className='container mt-5'>
            <h1>
                {
                    query?.category
                }
            </h1>
            {
                data?.map((pd) => {
                    return (
                        <div className='row m-3 p-3'
                             style={{backgroundColor: "#e7e7e7", borderRadius: "15px", maxHeight: "35vh"}}
                        >
                            <div className={'col-sm-12 col-md-4 '}>
                                <div className={'d-flex justify-content-center align-items-center'}
                                     style={{position: "relative", maxHeight: ""}}>
                                    <img src={pd.image} alt={pd.name} width={"75%"} style={{maxHeight: '300px'}}/>
                                </div>
                            </div>
                            <div className={'col-sm-12 col-md-5 '}>
                                <p>name</p>
                                <p>category</p>
                                <p>price</p>
                                <p>status</p>
                                <p>rating</p>

                            </div>
                            {

                                <div
                                    className={'col-sm-12 col-md-3 text-center d-flex justify-content-center align-items-center'}
                                >
                                    <Row>
                                        <Col md={12} className={'p-2'}>
                                            {
                                                categoryList.includes(pd.category) && <>
                                                    {
                                                        (parts && (parts.id === pd.id)) ? <Button
                                                            variant={"outline-dark"}
                                                            onClick={() => dispatch(removeFromList(pd))}
                                                        >
                                                            Remove component
                                                        </Button> : <Button
                                                            variant={"outline-dark"}
                                                            onClick={() => dispatch(addToList(pd))}
                                                        >
                                                            Add to PC builder
                                                        </Button>
                                                    }
                                                </>
                                            }
                                        </Col>
                                        <Col md={12} className={'p-2'}>
                                            <Link href={`/product/${pd.id}`}>
                                                <Button
                                                    variant={"outline-dark"}
                                                >
                                                    Details
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            }

                        </div>
                    )
                })
            }
        </div>

    )
}

export async function getStaticPaths() {
    const list = ["cpu", "storage", "ram", "monitor", "keyboard", "mouse", "power_supply", "motherboard"]
    const paths = list.map((category) => ({
        params: {category},
    }))

    return {paths, fallback: false}
}

export const getStaticProps = async ({params}: { params: any }) => {
    const allProducts = await fetch("http://localhost:3000/api/products")
    const data = await allProducts.json()
    const products = (data?.products as TProduct[]).filter(pd => pd.category === params.category)
    return {
        props: {
            data: products ?? []
        }
    }
}