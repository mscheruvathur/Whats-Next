import { Products } from "@/types"
import { NextPage } from "next"



const ProductDetail: NextPage<{product: Products}> = ({product}) => {
    return (
        <>
            <h3>{product.title}</h3>
        </>
    )
}

export default ProductDetail