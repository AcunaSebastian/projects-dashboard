import { Component } from "solid-js";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard: Component<{}> = (props) => {
  
  return <main class="min-h-screen flex bg-neutral-100">

    {/* sidebar */}
    <Sidebar />

    <section class="flex-1">
    {/* navbar */}
    <Navbar />

    {/* dashboard */}
    <div class=" bg-red-500"> Hola mundo </div>

    </section>
  
  </main>;
};

export default Dashboard;