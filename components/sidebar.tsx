import { db } from '@/lib/db';
import { FaTasks } from "react-icons/fa";
import { currentUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
const SideBar = async () => {

    const user = await currentUser();

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
                userId : user?.id as string,
                name: `${user?.firstName} ${user?.lastName}`,
                email: user?.emailAddresses[0]?.emailAddress as string
            }
        })
    }
    
    return (
        <div className='hidden lg:flex flex-col w-[300px] h-[calc(100vh-40px)] bg-zinc-900 m-5 rounded-lg text-white'>
            <div className='flex flex-row p-5 w-max h-[250px] m-8 gap-4'>
                <UserButton afterSignOutUrl="/" />
                <h1 className='text-2xl w-[200px] h-[100px] text-white'>{users?.name}</h1>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 h-[25px] p-5 bg-slate-500 w-full rounded-lg'>
                <div className='flex flex-row items-center justify-center '>
                    <FaTasks size={23} color='white' className='m-2 mr-6' />
                    <h1>All Tasks</h1>
                </div>
            </div>

        </div>
    )
}
export default SideBar