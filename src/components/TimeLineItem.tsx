import { Component } from "solid-js";
import { AiOutlineCheckCircle } from 'solid-icons/ai'

interface Appointment {
    title:string;
    description:string;
}

interface Props {

    time:string;
    appointment?:Appointment | null

}

const currentTime = "09:00";

export const TimeLineItem: Component<Props> = (props) => {
  
    return <div class="flex md:contents ">
      <div class={`${currentTime === props.time ? 'text-lg font-bold border' : 'text-md font-semibold '} bg-neutral-50 col-start-1 col-end-4 p-1 rounded-xl shadow-md `}>
        <h3 class={`text-center text-neutral-800`}>{props.time}</h3>
    </div>
    <div class="col-start-4 col-end-6 mr-10 h-full md:mx-auto relative">
        <div class="h-full w-6 flex items-center justify-center">
        <div class={`h-full w-1 ${currentTime === props.time ? 'bg-yellow-500' : 'bg-green-500'} pointer-events-none`}></div>
        </div>
        <div class={`w-6 h-6 absolute top-1/2 -mt-3 rounded-full ${currentTime === props.time ? 'bg-yellow-500' : 'bg-green-500'} shadow p-1`}>
        <AiOutlineCheckCircle />
        </div>
    </div>
    {
        props.appointment
        ? <div class={`${currentTime === props.time ? 'bg-yellow-500' : 'bg-green-500'} col-start-6 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full`}>
            <h3 class="font-semibold text-lg mb-1">{props.appointment.title}</h3>
            <p class="leading-tight text-justify w-full">
            { props.appointment.description}
            </p>
            </div>
        : <div class="bg-neutral-300 col-start-6 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1">free</h3>
        </div>
    }
    
</div>;
};