import React from "react"
import HouseHeader from "./components/HouseHeader"
import Gallery from "./components/Gallery"
import ReserveSidebar from "./components/ReserveSidebar"
import HouseDescription from "./components/HouseDescription"
import Recommendations from "./components/Recommendations"

const SingleReserveHouse = () => {
  return (
    <main className="w-full min-h-screen text-white px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
      <section className="max-w-[1440px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <HouseHeader />
        <Gallery />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8 sm:gap-10 lg:gap-2 items-start">
          <div className="flex flex-col gap-4 sm:gap-6">
            <HouseDescription />
            <Recommendations />
          </div>
          <aside className="w-full lg:w-[350px]">
            <ReserveSidebar />
          </aside>
        </div>
      </section>
    </main>
  )
}

export default SingleReserveHouse
