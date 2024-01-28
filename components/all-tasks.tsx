"use client"

import { Tasks } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export const AllTasks = () => {
    const [tasks, setTasks] = useState<Tasks[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/alltasks");
            const userData: Tasks[] = response.data;
            console.log(userData);
            setTasks(userData);
          };
          fetchData();
        }, []);
    
return (
        <div className="flex flex-col w-full h-full">
        <div className="w-full flex flex-row flex-wrap  h-auto">
            {tasks.map((task) => (
                <div key={task.id} className="font-bold m-2 pl-5 pt-5 pb-2 pr-1 relative rounded-lg
                 bg-gray-500 h-auto sm:flex flex-col w-[350px] md:w-[250px] lg:w-[300px] xl:w-[300px]">
                    <p className="text-2xl font-bold">{task.title}</p>
                    <p className="text-md mb-8">{task.description}</p>
                    {/* <p className="">Assigned To: {task.assignedToId}</p> */}
                    <p className="text-sm">{task.duedate}</p>
                    {/* <p className="">Status: {task.status}</p> */}
                    <div className=" flex flex-row w-[80px] h-[25px] rounded-lg bg-red-400">
                    <p className="text-md pl-1 text-center">{task.priority}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    )
}