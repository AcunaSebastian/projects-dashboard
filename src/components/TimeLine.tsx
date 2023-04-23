import { Component, For } from "solid-js";
import { TimeLineItem } from "./TimeLineItem";

const SCHEDULES = [
    {
        time:'08:00',
        appointment:{
            title:'Sebastian Acuña',
            description:'Egocentrismo'
        }
    },
    {
        time:'08:30',
        appointment:null
    },
    {
        time:'09:00',
        appointment:{
            title:'Sebastian Acuña',
            description:'Egocentrismo'
        }
    },
    {
        time:'09:30',
        appointment:{
            title:'Sebastian Acuña',
            description:'Egocentrismo'
        }
    },
]

export const TimeLine: Component<{}> = (props) => {
  
  return <div class="p-4 mt-4">
  <div class="container">
    <div class="flex flex-col items-center md:grid grid-cols-12 text-gray-50">
      {
        <For each={SCHEDULES} children={(chedule) => <TimeLineItem time={chedule.time} appointment={chedule.appointment} />} />
      }
    </div>
  </div>
</div>;
};