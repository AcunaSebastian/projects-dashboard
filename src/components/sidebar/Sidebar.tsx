import { Component, For } from "solid-js";
import logo from '../../logo.svg';
import { MenuItem } from "./MenuItem";
import { AiOutlineInbox } from 'solid-icons/ai'
import { FaRegularUser, FaRegularClock } from 'solid-icons/fa'
import { RiHealthFirstAidKitFill, RiDocumentTodoFill } from 'solid-icons/ri'
import { BsCalendar4 } from 'solid-icons/bs'
import { IoSettingsOutline } from 'solid-icons/io'


const menuList = [
  {
    isSelected: true,
    icon:<AiOutlineInbox class="text-xl"/>
  },
  {
    isSelected: false,
    icon:<FaRegularUser class="text-xl"/>
  },
  {
    isSelected: false,
    icon:<RiHealthFirstAidKitFill class="text-xl"/>
  },
  {
    isSelected: false,
    icon:<RiDocumentTodoFill class="text-xl"/>
  },
  {
    isSelected: false,
    icon:<BsCalendar4 class="text-xl"/>
  },
  {
    isSelected: false,
    icon:<FaRegularClock class="text-xl"/>
  },
  {
    isSelected: false,
    icon:<IoSettingsOutline class="text-xl"/>
  },
]

const Sidebar: Component<{}> = (props) => {
  return (
    <aside class="
    h-screen 
    w-32 
    flex 
    flex-col 
    items-center 
    justify-between 
    space-y-5
    bg-neutral-50"> 

    <header class="p-3">
        <img src={logo} class="h-12 w-12" alt="logo" />
    </header>

    <section>
        <ul class="flex flex-col gap-3">
          <For 
            each={menuList} 
            fallback={<div>Loading...</div>} 
            children={(item) => 
              <MenuItem isSelected={item.isSelected} icon={item.icon}  />
            }/>
        </ul>
    </section>


    <footer class="p-2 mb-5 bg-pink-400 rounded-md">
        <img src={logo} class="w-12 h-12" alt="" />
    </footer>
    </aside>
  );
};

export default Sidebar;