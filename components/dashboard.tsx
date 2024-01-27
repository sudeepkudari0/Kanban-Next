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

    const isAdmin = user?.publicMetadata?.orgRole === "Admin";
    
    return (
        <div className="flex">
            {isAdmin ? <AdminDashboard /> : <UserDashboard />}
        </div>
    )
}