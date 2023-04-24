import { Component, For, createResource, createSignal } from "solid-js";
import logo from '../../logo.svg';
import { MenuItem } from "./MenuItem";
import { AiOutlineInbox } from 'solid-icons/ai'
import { FaRegularUser, FaRegularClock } from 'solid-icons/fa'
import { RiHealthFirstAidKitFill, RiDocumentTodoFill } from 'solid-icons/ri'
import { BsCalendar4 } from 'solid-icons/bs'
import { IoSettingsOutline } from 'solid-icons/io'
import { A } from "@solidjs/router";


const menuList = [
  {
    id:1,
    isSelected: true,
    icon:<AiOutlineInbox class="text-xl"/>,
    ref:'/'
  },
  {
    id:2,
    isSelected: false,
    icon:<FaRegularUser class="text-xl"/>,
    ref:'/'
  },
  {
    id:3,
    isSelected: false,
    icon:<RiHealthFirstAidKitFill class="text-xl"/>,
    ref:'/'
  },
  {
    id:4,
    isSelected: false,
    icon:<RiDocumentTodoFill class="text-xl"/>,
    ref:'/'
  },
  {
    id:5,
    isSelected: false,
    icon:<BsCalendar4 class="text-xl"/>,
    ref:'/'
  },
  {
    id:6,
    isSelected: false,
    icon:<FaRegularClock class="text-xl"/>,
    ref:'/'
  },
  {
    id:7,
    isSelected: false,
    icon:<IoSettingsOutline class="text-xl"/>,
    ref:'/settings'
  },
]

const Sidebar: Component<{}> = (props) => {

  const [menuSelected, setMenuSelected ] = createSignal(menuList[0].id);

  const handleClick = (id:number) => {
    setMenuSelected(id);
  }
  return (
    <aside class="
    fixed
    top-0
    bottom-0
    z-50
    w-32 
    flex 
    flex-col 
    items-center 
    justify-between 
    space-y-5
    py-20
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
              <A href={item.ref!}>
                <MenuItem  id={item.id} isSelected={menuSelected} icon={item.icon} onClick={() => handleClick(item.id)} />
              </A>
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