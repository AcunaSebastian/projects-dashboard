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
    console.log({e});
  setIsActive(!isActive())
  console.log(isActive())
}  
  return <li 
  onclick={handleActiveClick}
    class={`
    p-1 
    rounded-md 
    self-center
    shadow-gray-300
    ${isActive() ? 
        'bg-purple-600 text-neutral-100 shadow-md border border-purple-500' : 
        'text-neutral-500 border border-neutral-200'}
    `}>
        {icon}
</li>;
};