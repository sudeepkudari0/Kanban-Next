import { CreateTask } from "../create-task"
import SideBar from "../sidebar"
import { AllTasksAdmin } from "./all-tasks-admin";

export const AdminDashboard = () => {

    return (
        <div className="flex flex-col lg:flex-row w-full h-full">
    <SideBar />
    <div className="flex-grow flex flex-col bg-zinc-900 m-5 rounded-lg text-white">
        <div className="flex flex-row flex-grow justify-between items-center lg:items-start">
            <h2 className="text-2xl lg:w-[500px] font-bold m-4 lg:mb-0">Task Management / Admin</h2>
            <CreateTask />
        </div>
        <AllTasksAdmin />
    </div>
</div>

    )
}


