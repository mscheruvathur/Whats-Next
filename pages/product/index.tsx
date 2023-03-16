import Link from "next/link"
import ProductList from "@/components/productDetail"
import { GetStaticProps, NextPage } from "next"
import { GetProductsResult, Products } from "@/types"

const Product: NextPage<{ products: Products[] }> = ({ products }) => {
    return (
        <>
            <div>
                {
                    products.map((product) => {
                        return (
                            <div key={product.id}>
                                <Link href={`/product/${product.id}`}>
                                    <h4>{product.title}</h4>
                                </Link>

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data: GetProductsResult = await response.json()

    return {
        props: {
            products: data
        }
    }
}

export default Product