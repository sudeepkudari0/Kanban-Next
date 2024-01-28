"use client";

import { useEffect, useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import { UserButton, currentUser } from '@clerk/nextjs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from './features/users/userSlice';
import { AppDispatch, RootState } from './store/store';
import { stateType } from '@/types';

const MobileSidebar = ({users}: any) => {
  return (
    <div className="lg:hidden flex flex-col w-full h-full m-4">
      {/* Mobile Sidebar content goes here */}
      <div className="flex flex-row p-5 bg-slate-500 items-center rounded-xl justify-between">
        <h1 className="text-2xl text-white">{users}</h1>
        {/* Replace UserButton with the actual component */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

const SideBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Dispatch the fetchAllUsers action
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const state: any = useSelector<RootState>((state) => state.user);
  return (
    <div className="flex flex-row lg:flex-col">
      {/* Mobile Sidebar */}
      <MobileSidebar users={state.fullName.name}/>

      {/* Larger Screen Sidebar */}
      <div className="hidden lg:flex flex-col w-[300px] h-[calc(100vh-40px)] bg-zinc-900 m-5 rounded-lg text-white">
          <div className="flex flex-row p-5 w-max h-[250px] m-8 gap-4">
            <UserButton afterSignOutUrl="/" />
            <h1 className="text-2xl w-[200px] h-[100px] text-white">{state.fullName.name}</h1>
          </div>
        
        <div className="flex flex-col items-center justify-center gap-4 h-[25px] p-5 bg-slate-500 w-full rounded-lg">
          <div className="flex flex-row items-center justify-center">
            <FaTasks size={23} color="white" className="m-2 mr-6" />
            <h1>All Tasks</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

export const dynamic = "force-dynamic"