import { db } from "@/lib/db";
import { Dashboard } from "../components/dashboard";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";

export default async function Home() {
  
  return (
    <div>
      <Dashboard />
    </div>
  );
}
