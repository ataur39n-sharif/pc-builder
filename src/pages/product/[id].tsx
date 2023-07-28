import {useRouter} from "next/router";
import {TProduct} from "@/Redux/features/productsSlice";

export default function ProductDetails({data}: { data: TProduct | null }) {
    const router = useRouter()

    console.log(data)

    return (
        <div className='container mt-5'>
            <h1>
                {
                    router?.query?.id
                }
            </h1>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <img src={data?.image} alt="product image" width={"100%"} style={{maxHeight: "35em"}}/>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div className='p-5'>
                        <div className=''>
                            <h1>{data?.name}</h1>
                            <h2>{data?.price} USD</h2>
                            <h5>
                                lorem ipsum dolor sit amet, consectetur adip non pro id el component qui offic et dolore
                                mag et
                            </h5>
                        </div>
                        <div>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch("http://localhost:3000/api/products")
    const data = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = (data?.products as TProduct[]).map((pd) => ({
        params: {id: String(pd.id)},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}

export const getStaticProps = async ({params}: { params: any }) => {
    const allProducts = await fetch("http://localhost:3000/api/products")
    const data = await allProducts.json()
    const selectedProduct = (data?.products as TProduct[]).find(pd => pd.id === Number(params.id))
    return {
        props: {
            data: selectedProduct ?? null
        }
    }
}