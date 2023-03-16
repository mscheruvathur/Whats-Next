import Link from "next/link"
import ProductList from "@/components/productDetail"

export default function product({products}) {
    return (
        <div>
            <Link href='/'>
                <h4>back to home</h4>
            </Link>

            <h1>product page</h1>

            {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <Link href={`products/${product.id}`} passHref>
                                <ProductList product={product} />
                            </Link>
                        </div>
                    )
                })

            }
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()


    return {
        props: {
            products: data
        }
    }
}