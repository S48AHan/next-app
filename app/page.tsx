import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import TestComp from './components/Test/TestComp'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>

      <Link href='/users'>User</Link>
      <ProductCard/>
      <Link href='/test'>Test Page</Link>
    </main>
  )
}
