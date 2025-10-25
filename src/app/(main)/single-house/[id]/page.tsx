import HouseHeader from "./components/HouseHeader"
import HouseDescription from './components/HouseDescription';

const SingleHousePage = () => {
  return (
    <main className="w-full min-h-screen text-white px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
      <section className="max-w-[1440px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <HouseHeader />
         <HouseDescription />
      </section>
    </main>
  )
}

export default SingleHousePage


