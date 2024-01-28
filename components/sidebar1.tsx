
import { db } from '@/lib/db';
import { FaTasks } from "react-icons/fa";
import { currentUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { Users } from '@prisma/client';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { toggleSidebar } from './features/sidebar/sidebarSlice';
const SideBar = async () => {
    
    const user = await currentUser();
const dispatch = useDispatch();
const sidebarStatus = useSelector((state: any) => state.sidebar.isOpen)
    // check if user is present in DB
    const users = await db.users.findUnique({
        where: {
            userId: user?.id
        },
        select: {
            name: true
        }
    });


    //If no user is present in DB create one
    if (!users) {
        const newProfile = await db.users.create({
            data: {
                userId: user?.id as string,
                name: `${user?.firstName} ${user?.lastName}`,
                email: user?.emailAddresses[0]?.emailAddress as string
            }
        })
    }
    const MobileSidebar = ({ users }: { users: Users }) => {
        return (
          <div className="lg:hidden flex flex-col w-full h-full">
            {/* Mobile Sidebar content goes here */}
            <div className="flex flex-row p-5 bg-slate-500 items-center justify-between">
              <h1 className="text-2xl text-white">{users?.name}</h1>
              <UserButton afterSignOutUrl="/" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 h-[25px] p-5 bg-slate-500 w-full rounded-lg">
              <div className="flex flex-row items-center justify-center ">
                <FaTasks size={23} color="white" className="m-2 mr-6" />
                <h1>All Tasks</h1>
              </div>
            </div>
          </div>
        );
      };

    return (
    <>
         <div className="flex flex-col lg:flex-row w-full h-full">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-[300px] h-[calc(100vh-40px)] bg-zinc-900 m-5 rounded-lg text-white">
        <div className="flex flex-row p-5 w-max h-[250px] m-8 gap-4">
          <UserButton afterSignOutUrl="/" />
          <h1 className="text-2xl w-[200px] h-[100px] text-white">{users?.name}</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 h-[25px] p-5 bg-slate-500 w-full rounded-lg">
          <div className="flex flex-row items-center justify-center ">
            <FaTasks size={23} color="white" className="m-2 mr-6" />
            <h1>All Tasks</h1>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <button
        className="lg:hidden block ml-3 mt-3 p-2 text-white"
        onClick={() => dispatch(toggleSidebar())}
      >
        Toggle Sidebar
      </button>

      {/* Mobile Sidebar */}
      {sidebarStatus && <MobileSidebar users={users} />}

      {/* Main Content */}
      <div className="flex-grow flex flex-col bg-zinc-900 m-5 rounded-lg text-white">
        {/* Rest of your content goes here */}
      </div>
    </div>
    </>
  );
    }
export default SideBar1