export type Users = {
    id: string,
    name: string
}

export type Tasks = {
    id: string,
    title: string,
    description: string,
    assignedToId: string,
    priority: string,
    duedate: string,
    status: string
}