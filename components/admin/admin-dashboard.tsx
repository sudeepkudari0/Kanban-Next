import { Tasks } from "@/types";
import { CreateTask } from "../create-task"
import SideBar from "../sidebar"
import { useState } from "react";
import { AllTasks } from "../all-tasks";

export const AdminDashboard = () => {

    return (
        <div className="flex w-full h-full">
            <SideBar />
            <div className="flex-grow flex flex-col bg-zinc-900 m-5 rounded-lg text-white">
                <div className="flex flex-row flex-grow ">
                    <h2 className="text-xl font-bold m-4">Task Management / Admin</h2>
                    <CreateTask />
                </div>
                <AllTasks />
            </div>
        </div>
    )
}
