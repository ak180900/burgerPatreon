import React from "react"

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center text-white min-h-[40vh]">
      <div className="text-4xl font-bold">
        Get Me a Burger
      </div>
      <p>
        A crowdfunding platform for creators. Start Now!!!
      </p>
      <div className="btns flex">
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
      



    </div>
  )
}