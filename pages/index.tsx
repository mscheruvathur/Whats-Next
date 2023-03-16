import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/product">
        <h3>Product page</h3>
      </Link>
    </div>
  )
}