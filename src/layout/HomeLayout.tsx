import { Component } from "solid-js";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar";
import CardSummary from "../components/dashboard/CardSummary";

const HomeLayout: Component<{}> = (props) => {
  
  return <main class="min-h-screen h-screen flex">

    {/* sidebar */}
    <Sidebar />

    <section class="flex-1">
    {/* navbar */}
    <Navbar />

    {/* dashboard */}
    <section class=" bg-neutral-100 h-[calc(100vh-128px)]">

      <header class="flex flex-col relative">
          <div class="bg-blue-950 w-full h-16"></div>

          <section class="flex w-full justify-between gap-2 px-20  absolute top-1 p-4">
            <CardSummary cardType="today-appointments" title="Today's appointments" />
            <CardSummary cardType="all-appointments" title="All appointments" subTitle="30 d."/>
            <CardSummary cardType="cancelled-appointments" title="Cancelled appointments"/>
            <CardSummary cardType="fulfiled-medical-records" title="Fulfiled medical records"/>
            <CardSummary cardType="new-appointments" title="New patients" subTitle="30 d."/>
          </section>
          

      </header>
      
    </section>

    </section>
  
  </main>;
};

export default HomeLayout;