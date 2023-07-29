import {categoryList, removeFromList} from "@/Redux/features/pcBuildSlice";
import {Button, Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "@/Redux/hooks";
import {TProduct} from "@/Redux/features/productsSlice";

export default function BuildPc() {
    const parts = useAppSelector(state => state.pcBuild)
    const dispatch = useAppDispatch()
    return (
        <Container>
            {
                categoryList?.map((category) => {
                    // @ts-ignore
                    const pd: TProduct | null = parts[category]
                    return (
                        <>
                            {
                                pd ?
                                    <div className='row m-3 p-3' style={{border: "1px solid red", maxHeight: "33vh"}}>
                                        <div className={'col-sm-12 col-md-4 '}>
                                            <div className={'d-flex justify-content-center align-items-center'}
                                                 style={{position: "relative", maxHeight: ""}}>
                                                <img src={pd.image} alt={pd.name}
                                                     width={"75%"} style={{maxHeight: '300px'}}/>
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-md-4 text-center'}>
                                            {pd.category}
                                        </div>
                                        <div className={'col-sm-12 col-md-4 text-center'}>
                                            <Row>
                                                <Col md={12} className={'p-2'}>
                                                    <Button
                                                        variant={"outline-dark"}
                                                        onClick={() => dispatch(removeFromList(pd))}
                                                    >
                                                        Remove component
                                                    </Button>
                                                </Col>

                                                <Col md={12} className={'p-2'}>
                                                    <Link href={`/products/${category}`}>
                                                        <Button
                                                            variant={"outline-dark"}
                                                        >
                                                            Change component
                                                        </Button>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    :
                                    <div className='row m-5' style={{border: "1px solid red", maxHeight: "33vh"}}>

                                        <div className={'col-sm-12 col-md-6'}>
                                            <div style={{position: "relative", maxHeight: ""}}>
                                                <h1>{category}</h1>
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-md-3'}>
                                            details
                                        </div>
                                        <div className={'col-sm-12 col-md-3'}>
                                            <Link href={`/products/${category}`}>Choose component</Link>
                                        </div>
                                    </div>
                            }


                        </>

                    )
                })
            }
        </Container>
    )
}