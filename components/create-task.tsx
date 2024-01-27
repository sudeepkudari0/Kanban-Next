"use client"

import { UseDispatch, useDispatch, useSelector } from "react-redux"
import { Users } from "@/types"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios"
import React from "react"


export const CreateTask = () => {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [users, setUsers] = useState<Users[]>([]);
  const [selectedPriority, setSelectedPriority ] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/users");
      const userData: Users[] = response.data;
      // console.log(userData);
      setUsers(userData);
    };
    fetchData();
  }, []);

  const router = useRouter();
  const handleCreateTask = () => {
    console.log(newTaskName, newTaskDescription, selectedUserId, selectedPriority, dueDate);
    axios
      .post("/api/tasks", {
        name: newTaskName,
        description: newTaskDescription,
        userId: selectedUserId,
        priority: selectedPriority,
        dueDate: dueDate
      })
      .then((response) => {
        console.log(response.data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="m-4 flex justify-end w-full">
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="font-bold p-2 text-lg bg-black text-white border-none shadow-xl"
        >
          Create Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Task</DialogTitle>
          <DialogDescription>
            Enter Details for New Task
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 font-bold">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right font-bold">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
          </div>
          <div className=" grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right font-bold">
              Description
            </Label>
            <Input
              id="description"
              className="col-span-3"
              value={newTaskDescription}
              onChange={(e) => setNewTaskDescription(e.target.value)}
            />
          </div>
          <div className="assign grid grid-cols-4 items-end gap-4">
            <label htmlFor="assign" className="text-right">Assign</label>
            <select id="assign" className="col-span-3  border-[1px] h-[40px] w-auto  rounded-lg text-md 
             bg-white text-center"
              value={selectedUserId || -1} onChange={(e) => setSelectedUserId(e.target.value)}>
                <option disabled value={-1}>Select User</option>
              {users.map((user: Users) => (
                <option className="text-black" key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
          </div>
          <div className="assign grid grid-cols-4 items-end gap-4">
            <label htmlFor="priority" className="text-right">Priority</label>
            <select id="priority" className="col-span-3  border-[1px] h-[40px] w-auto  rounded-lg text-md 
             bg-white text-center" value={selectedPriority} onChange={(e) => setSelectedPriority(e.target.value)} >
              <option className="text-black" value="Important">Important</option>
              <option className="text-black" value="All">All</option>
            </select>
          </div>
          <div className="assign grid grid-cols-4 items-end gap-4">
            <label htmlFor="duedate" className="text-right">Due Date</label>
            <input className="col-span-3 text-center h-[40px] border-[1px] w-auto rounded-lg" type="date" 
            id="duedate" name="duedate" value={dueDate} onChange={(e) => setDueDate(e.target.value)}></input>
          </div>
          <Button type="button" onClick={handleCreateTask}>
            Save changes
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  )
}