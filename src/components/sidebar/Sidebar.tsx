import { Component, For, createSignal } from "solid-js";
import logo from '../../logo.svg';
import { MenuItem } from "./MenuItem";
import { AiOutlineInbox } from 'solid-icons/ai'

const menuList = [
  {
    isSelected: true,
    icon:<AiOutlineInbox size={10}/>
  },
  {
    isSelected: false,
    icon:<AiOutlineInbox size={10}/>
  },
  {
    isSelected: false,
    icon:<AiOutlineInbox size={10}/>
  },
  {
    isSelected: false,
    icon:<AiOutlineInbox size={10}/>
  },
  {
    isSelected: false,
    icon:<AiOutlineInbox size={10}/>
  },
  {
    isSelected: false,
    icon:<AiOutlineInbox size={10}/>
  },
  {
    isSelected: false,
    icon:<AiOutlineInbox size={10}/>
  },
]

const Sidebar: Component<{}> = (props) => {
  return (
    <aside class="h-screen min-w-max w-12 
    flex flex-col items-center justify-around 
    col-span-1 
    bg-neutral-50"> 

    <header class="max-h-5 max-w-5">
        <img src={logo} class="h-5 w-5" alt="logo" />
    </header>

    <section>
        <ul class="flex flex-col gap-1">
          <For 
            each={menuList} 
            fallback={<div>Loading...</div>} 
            children={(item) => 
              <MenuItem isSelected={item.isSelected} icon={item.icon}  />
            }/>
        </ul>
    </section>


    <footer class="p-1 bg-pink-400 rounded-md">
        <img src={logo} class="w-4 h-4" alt="" />
    </footer>
    </aside>
  );
};

export default Sidebar;