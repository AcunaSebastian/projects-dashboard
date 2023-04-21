import { Component } from "solid-js";
import { FaRegularClock, FaRegularBell } from 'solid-icons/fa'
import { BsCalendar4 } from 'solid-icons/bs'

const Navbar: Component<{}> = (props) => {
  
  return (
  <header class="h-32 bg-blue-950 px-20 py-2 flex items-start ">
    <section class="flex-1">
        <h1 class="text-3xl text-white">Good morning, Natalie</h1>
        <p class="text-neutral-300 text-md">Take a look on the latest update for your clinic <span class="text-white">Physio Center</span>!</p>
    </section>
    <section class="flex justify-between items-center gap-5">

      <div class="flex">
        <BsCalendar4 class="text-xl fill-neutral-300 mr-1"/>
        <p class="text-neutral-400 text-base">Today, <span class="text-neutral-100">24th April</span></p>
      </div>
      <div class="flex">
        <FaRegularClock class="mr-1 fill-neutral-400 text-xl"/>
        <p class="text-neutral-100 text-base">8:00 - 16:00</p>   
      </div>
        <div class="w-10 h-10 border rounded-xl border-neutral-500 grid place-content-center relative">
          <span class="bg-red-500 rounded-full w-3 h-3 absolute -top-1 -right-1"> </span>
          <FaRegularBell class="text-xl fill-neutral-200"/> 
        </div> 
    </section>
  </header>
  );
};

export default Navbar;