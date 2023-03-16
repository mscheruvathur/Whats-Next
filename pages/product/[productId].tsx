import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import { Products, GetProductsResult } from "@/types"
import ProductDetail from "@/components/productDetail"

const ProductDetails: NextPage<{product: Products}> = ({product}) => {

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    )
}

export default ProductDetails

export async function getStaticPaths () {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data: GetProductsResult = await response.json()

    const paths = data.map((product) => {
        return {
            params: {
                productId: `${product.id}`
            }
        }
    })

    console.log('PATHS', paths)

    return {
        paths,
        fallback: false
    }
    

   
}

export async function getStaticProps ({params} : {params: {productId: string}}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.productId}`)
    const data = await response.json()

    return {
        props: {
            product: data,
        }
    }
}
