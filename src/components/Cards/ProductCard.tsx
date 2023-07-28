import {TProduct} from "@/Redux/features/productsSlice";
import {Card} from "antd";
import {useRouter} from "next/router";

export const ProductCard = ({product}: { product: TProduct }) => {
    const {Meta} = Card;
    const router = useRouter()
    return (
        <Card
            hoverable
            style={{width: "80%"}}
            cover={<img alt="example" src={product.image} height={"200em"}/>}
            onClick={() => router.push(`/product/${product.id}`)}
        >
            <Meta title="Europe Street beat" description="www.instagram.com"/>
            <p>
                lorem ipsum dolor sit amet, consectetur adip
            </p>
        </Card>
    )
}