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
        <div className="w-full h-full">
            <div className="text-white">
                {tasks.map((task) => (
                    <div key={task.id}>
                        <p>{task.title}</p>
                        <p>{task.description}</p>
                        <p>{task.assignedToId}</p>
                        <p>{task.priority}</p>
                        <p>{task.duedate}</p>
                        <p>{task.status}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}