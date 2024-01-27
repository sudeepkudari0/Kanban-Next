import {auth, clerkClient} from "@clerk/nextjs"

export const currentUser = async () => {
    const {userId} = auth();
    
    if (!userId) {
        return null;    
    }

    const user = userId ? await clerkClient.users.getUser(userId) : null;
    return user;
}