import {categoryList} from "@/Redux/features/pcBuildSlice";
import {Container} from "react-bootstrap";
import Link from "next/link";

export default function BuildPc() {

    return (
        <Container>
            {
                categoryList?.map((category) => {
                    return (
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
                    )
                })
            }
        </Container>
    )
}