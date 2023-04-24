import { Component } from "solid-js";
import CardSummary from "./CardSummary";
import { FiArrowUpRight } from "solid-icons/fi";
import { RiSystemArrowDownSLine } from "solid-icons/ri";
import { TimeLine } from "../TimeLine";
import { IoAddOutline } from "solid-icons/io";

export const Dashboard: Component<{}> = (props) => {
  
  return   <section class=" bg-neutral-100 min-h-[calc(100vh-128px)] ">

  <header class="flex flex-col relative">
      <div class="bg-blue-950 w-full h-20"></div>
      <div class="h-52"></div>
      <section class="flex w-full justify-between gap-2 px-20 2xl:px-96 2xl:justify-center 2xl:gap-6 absolute top-1 p-4">
        <CardSummary 
          cardType="today-appointments" 
          title="Today's appointments"
          current={12}
          total={24} >
            <footer class="flex justify-start gap-2">
              <p class="text-sm text-green-700 font-semibold">50%</p>
              <p class="text-sm text-neutral-400 font-semibold">Half behind you!</p>
            </footer>
            </CardSummary>
        <CardSummary 
          cardType="all-appointments" 
          title="All appointments" 
          subTitle="30 d."
          current={120}
        >
          <footer class="flex justify-start gap-2">
              <FiArrowUpRight class="fill-green-500" />
              <p class="text-sm text-green-700 font-semibold">21%</p>
              <p class="text-sm text-neutral-400 font-semibold">vs last month</p>
            </footer>
          </CardSummary>
        <CardSummary 
          cardType="cancelled-appointments" 
          title="Cancelled appointments"
          current={12}
          >
            <footer class="flex justify-start gap-2">
              <FiArrowUpRight class="fill-red-500" />
              <p class="text-sm text-red-700 font-semibold">5%</p>
              <p class="text-sm text-neutral-400 font-semibold flex-1">vs last month</p>
              <span class="w-6 h-6 bg-indigo-300 text-neutral-50 text-center rounded-lg pb-2"> {`>`} </span>
            </footer>
          </CardSummary>
        <CardSummary 
          cardType="fulfiled-medical-records" 
          title="Fulfiled medical records"
          current={4}
          total={45}
          >
            <footer class="flex justify-start gap-2">
              <p class="text-sm text-red-700 font-semibold">10%</p>
              <p class="text-sm text-neutral-400 font-semibold">Could be better!</p>
            </footer>
          </CardSummary>
        <CardSummary 
          cardType="new-appointments" 
          title="New patients" 
          subTitle="30 d."
          current={18}
          >
            <footer class="flex justify-start gap-2">
              <FiArrowUpRight class="fill-green-500" />
              <p class="text-sm text-green-700 font-semibold">14%</p>
              <p class="text-sm text-neutral-400 font-semibold">vs last month</p>
            </footer>
          </CardSummary>
      </section>
  </header>

  <section class="flex space-x-4 px-20 2xl:px-96 2xl:justify-center">
    <main class="w-3/5 flex flex-col space-y-5">
      <section class="bg-white rounded-xl shadow-lg py-3 px-5">
      <header class="flex justify-between items-center">
        <div class="flex gap-2">
          <p class="font-bold">Income</p>
          <div class="border p-1 border-neutral-400 rounded-md text-center">
            <RiSystemArrowDownSLine />
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <h4 class="font-bold text-xl">
            <span class="text-neutral-600 text-base">$</span>
            20560
          </h4>
          <div class="flex justify-start gap-2">
            <FiArrowUpRight class="fill-green-500" />
            <p class="text-sm text-green-700 font-semibold">21%</p>
            <p class="text-sm text-neutral-400 font-semibold">vs last month</p>
          </div>

        </div>
        <div class="flex gap-2">
          <p class="font-bold">Month</p>
          <div class="border p-1 border-neutral-400 rounded-md text-center">
            <RiSystemArrowDownSLine />
          </div>
        </div>
      </header>
      <section class="h-80"></section>
      </section>

      <section class="bg-white rounded-xl shadow-lg py-3 px-5">
      <header class="flex justify-between items-center">
        <div class="flex gap-2">
          <p class="font-bold">Income</p>
          <div class="border p-1 border-neutral-400 rounded-md text-center">
            <RiSystemArrowDownSLine />
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <h4 class="font-bold text-xl">
            <span class="text-neutral-600 text-base">$</span>
            20560
          </h4>
          <div class="flex justify-start gap-2">
            <FiArrowUpRight class="fill-green-500" />
            <p class="text-sm text-green-700 font-semibold">21%</p>
            <p class="text-sm text-neutral-400 font-semibold">vs last month</p>
          </div>

        </div>
        <div class="flex gap-2">
          <p class="font-bold">Month</p>
          <div class="border p-1 border-neutral-400 rounded-md text-center">
            <RiSystemArrowDownSLine />
          </div>
        </div>
      </header>
      <section class="h-80"></section>
      </section>
    </main>
    <aside class="bg-white rounded-xl shadow-xl py-3 px-5 flex-1">
      <header class="flex">
        <h5 class="flex-1 font-bold">Upcoming appointments</h5>
        <div class="flex gap-3 items-center">
          <p class="font-bold text-indigo-600">New Appointment</p>
          <span class="p-1 border rounded-md"><IoAddOutline class="fill-indigo-600 " /></span>

        </div>
      </header>
      <TimeLine/>
    </aside>
  </section>
  
</section>;
};