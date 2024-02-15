"use client"

import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Tasks } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";

export const AllTasksUser = () => {
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
                <div key={task.id} className="font-bold m-2 pl-5 gap-1 pt-5 pb-2 pr-1 relative rounded-lg
                 bg-gray-500 h-auto sm:flex flex-col w-[350px] md:w-[250px] lg:w-[300px] xl:w-[300px]">
                    <p className="text-2xl font-bold">{task.title}</p>
                    <p className="text-md mb-8">{task.description}</p>
                    <p className="text-sm">{task.duedate}</p>
                    {/* <p className="">Status: {task.status}</p> */}
                    <div className=" flex flex-row w-min rounded bg-zinc-900">
                    <p className="text-md p-1 text-center">{task.priority}</p>
                    </div>
                    <div className="absolute top-0 right-0 m-2">
                        <button onClick={() => alert("not yet implemented!!!")}>
                            <FaEdit size={23} className="hover:text-blue-500"/>
                        </button>
                    </div>
                    <div className="absolute bottom-0 right-0 m-2">
                        <button onClick={() => alert("not yet implemented!!!")}>
                            <MdDeleteOutline size={28} className="hover:text-red-500"/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    )
}

export const dynamic = "force-dynamic"