import { redirectToSignIn } from "@clerk/nextjs";
import { AdminDashboard } from "../components/admin/admin-dashboard";
import { UserDashboard } from "../components/user/user-dashboard";
import { currentUser } from "@/lib/current-profile";
import { db } from "@/lib/db";

export const Dashboard = async () => {
    
    const user = await currentUser();
    
    if(!user) {
        return redirectToSignIn();
    }

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

    const isAdmin = user?.publicMetadata?.orgRole === "Admin";
    
    return (
        <div className="flex">
            {isAdmin ? <AdminDashboard /> : <UserDashboard />}
        </div>
    )
}