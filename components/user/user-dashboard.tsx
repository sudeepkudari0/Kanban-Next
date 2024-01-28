import { AllTasks } from "../all-tasks"
import { CreateTask } from "../create-task"
import SideBar from "../sidebar"

export const UserDashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full h-full">
    <SideBar />
    <div className="flex-grow flex flex-col bg-zinc-900 m-5 rounded-lg text-white">
        <div className="flex flex-row flex-grow justify-between items-center lg:items-start">
            <h2 className="text-lg w-[650px] font-bold m-4 lg:text-2xl lg:mb-0">Task Management / User</h2>
        </div>
        <AllTasks />
    </div>
</div>
    )
} 