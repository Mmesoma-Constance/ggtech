import { Contact, DiscountProducts, Hero, Products } from '../sections';

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <DiscountProducts />
      <Contact bgcolor="#EBECEF" otherStyles="mt-[140px]" />
    </div>
  )
}

export default Home