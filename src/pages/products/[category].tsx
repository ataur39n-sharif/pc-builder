import {useRouter} from "next/router";
import {TProduct} from "@/Redux/features/productsSlice";

export default function ProductsByCategory({data}: { data: TProduct[] | [] }) {
    const router = useRouter()

    console.log(data)

    return (
        <div className='container mt-5'>
            <h1>
                {
                    router?.query?.category
                }
            </h1>
            {
                data?.map((pd) => {
                    return (
                        <div className='row m-5' style={{border: "1px solid red", maxHeight: "33vh"}}>
                            <div className={'col-sm-12 col-md-6'}>
                                <div style={{position: "relative", maxHeight: ""}}>
                                    <img src={pd.image} alt={pd.name} width={"100%"}/>
                                </div>
                            </div>
                            <div className={'col-sm-12 col-md-3'}>
                                details
                            </div>
                            <div className={'col-sm-12 col-md-3'}>
                                btn
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch("http://localhost:3000/api/products")
    const data = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = ["cpu", "storage", "ram", "monitor", "keyboard", "mouse", "power_supply", "motherboard"].map((category) => ({
        params: {category},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
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