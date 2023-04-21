import { Component, createSignal } from "solid-js";

interface Props {
    isSelected?:boolean;
    icon?: any;
    onClick?: () => void;
}

export const MenuItem: Component<Props> = (props) => {

const { isSelected = false, icon , onClick} = props;

const [isActive, setIsActive] = createSignal(isSelected);

const handleActiveClick = (e:MouseEvent & { currentTarget: HTMLLIElement; target: Element; }) => {
  setIsActive(!isActive())
}  
  return <li 
  onclick={handleActiveClick}
    class={`
    p-2 
    rounded-xl
    self-center
    shadow-gray-300
    ${isActive() ? 
        'bg-indigo-600 text-neutral-100 shadow-lg shadow-indigo-800 border border-indigo-500' : 
        'text-neutral-400 border border-neutral-200'}
    `}>
        {icon}
</li>;
};