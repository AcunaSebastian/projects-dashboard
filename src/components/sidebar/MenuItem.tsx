import { Component, createSignal } from "solid-js";

interface Props {
    id:number;
    isSelected:()=>number;
    icon?: any;
    onClick?: () => void;
}

export const MenuItem: Component<Props> = (props) => {

const { isSelected, id, icon , onClick} = props;

  return <li 
  onclick={onClick}
    class={`
    p-2 
    rounded-xl
    self-center
    shadow-gray-300
    ${ isSelected() === id? 
        'bg-indigo-600 text-neutral-100 shadow-lg shadow-indigo-800 border border-indigo-500' : 
        'text-neutral-400 border border-neutral-200'}
    `}>
        {icon}
</li>;
};