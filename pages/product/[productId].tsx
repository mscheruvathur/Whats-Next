

export default function productDetail (product: any) {

    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    )
}

export async function staticPaths () {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    
    const paths = data.map((product: { id: any }) => {
        return {
            params: {
                productId: `${product.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}



export async function getStaticProps(context) {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.productId}`)
    const data = response.json()

    return {
        props: {
            product: data,
        }
    }
    

}