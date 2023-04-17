import { Component } from "solid-js";
import Bell from './svgIcons/bell'
import Callendar from './svgIcons/callendar'
import Clock from './svgIcons/Clock'

const Navbar: Component<{}> = (props) => {
  
  return (
  <menu class="h-20 bg-blue-950 px-5 py-2 flex items-start">
    <header class="flex-1">
        <h1 class="text-base  text-white">Good morning, Natalie</h1>
        <p class="text-neutral-300 text-[8px]">Take a look on the latest update for your clinic <span class="text-white">Physio Center</span>!</p>
    </header>
    <section class="flex justify-between items-center gap-5">

      <div class="flex">
        <Callendar class="w-3 h-3 text-neutral-300 mr-1"/>
        <p class="text-neutral-400 text-[8px]">Today, <span class="text-neutral-100">24th April</span></p>
      </div>
      <div class="flex">
        <Clock class="w-3 h-3 text-neutral-300 mr-1"/>
        <p class="text-neutral-100 text-[8px]">8:00 - 16:00</p>   
      </div>
        <div class="w-5 h-5 border rounded-md border-neutral-400 flex justify-center items-center">
          <span class=""><Bell class="w-3 text-neutral-200"/> </span>
        </div> 
    </section>
  </menu>
  );
};

export default Navbar;