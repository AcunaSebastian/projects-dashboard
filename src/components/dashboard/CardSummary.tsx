import { Component, JSXElement } from "solid-js";
import { BsCalendar4 } from "solid-icons/bs";
import { FaRegularRectangleList } from 'solid-icons/fa'
import { HiSolidPhoneMissedCall } from 'solid-icons/hi'
import { BiSolidEdit } from 'solid-icons/bi'
import { OcPeople3 } from 'solid-icons/oc'




interface Props {
    cardType:keyof typeof cardTypeStyle;
    title:string;
    subTitle?:string;
    current:number;
    total?:number;
    children:JSXElement;
}


const cardTypeStyle = {
    ['today-appointments']:{
        backgroundCard:'bg-neutral-50',
        icon:<BsCalendar4 class="fill-neutral-50 text-lg" />,
        bgIcon:'bg-cyan-500'
    },
    ['all-appointments']:{
        backgroundCard:'bg-neutral-50',
        icon:<FaRegularRectangleList class="fill-neutral-50 text-lg" />,
        bgIcon:'bg-indigo-500'
    },
    ['cancelled-appointments']:{
        backgroundCard:'bg-gradient-to-b from-red-100 via-red-50 to-neutral-50',
        icon:<HiSolidPhoneMissedCall class="fill text-lg" />,
        bgIcon:'bg-red-500'
        
    },
    ['fulfiled-medical-records']:{
        backgroundCard:'bg-neutral-50',
        icon:<BiSolidEdit class="fill-neutral-50 text-lg" />,
        bgIcon:'bg-orange-500'
    },
    ['new-appointments']:{
        backgroundCard:'bg-neutral-50',
        icon:<OcPeople3 class="fill-neutral-50 text-lg" />,
        bgIcon:'bg-green-500'
    },
}

const CardSummary: Component<Props> = (props) => {

    const style=  cardTypeStyle[props.cardType];
  
  return <div class={`pt-2 pb-7 px-4 rounded-xl shadow-lg flex flex-col space-y-5 w-60 box-content ${style.backgroundCard}`}>
  <header>
    <div class={`w-10 h-10 rounded-xl grid place-content-center my-3 ${style.bgIcon} `}>
        { style.icon}
    </div>
    <div class="flex">
      <p class="font-extrabold text-sm flex-1 text-start pe-2">{props.title}</p>
      { props.subTitle && <p class="text-neutral-400 font-bold text-sm">{props.subTitle}</p>}
    </div>
  </header>
  <main class="flex justify-start gap-2 items-baseline">
    <span class="font-extrabold text-xl text-neutral-900">{props.current}</span>
    { props.total && 
      <>
          <span class="text-neutral-400"> /</span>  
          <span>{props.total}</span>
      </>
    }
  </main>
  {
    props.children
  }

</div>;
};

export default CardSummary;