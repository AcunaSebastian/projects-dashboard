import type { Component } from 'solid-js';
import { Dashboard } from './components/dashboard/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/Navbar';
import { Route, Routes } from '@solidjs/router';

const App: Component = () => {

  
  return (
    <main class="min-h-screen h-screen flex">

    {/* sidebar */}
    <Sidebar />

    <section class="flex-1 ml-[128px]">
    {/* navbar */}
    <Navbar />

    {/* dashboard */}
    
    <Routes>
      <Route  path={"/"} element={<Dashboard />} />
      <Route  path={"/settings"} element={<div>settings</div>} />
    </Routes>
    
    </section>
  
  </main>
  );
};

export default App;
