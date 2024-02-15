import { SignUpButton, SignInButton } from "@clerk/nextjs"

export default async function Home() {

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      <header className="flex flex-row justify-between items-center container mx-auto py-8 text-center gap-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Kanban-Next</h1>
          <p className="mt-2 text-gray-600">A simple yet powerful task management application</p>
        </div>
        {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md h-[40px] hover:bg-blue-600">
          <SignUpButton mode="modal" redirectUrl="/dashboard"></SignUpButton>
        </button> */}

        <SignInButton mode="modal" redirectUrl="/dashboard">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md h-[40px] min-w-[100px] font-bold hover:bg-blue-600">
            Login
          </button>
        </SignInButton>
      </header>
      <main className="flex-grow container mx-auto px-4">
        <section className="relative py-8">
          <h2 className="text-xl font-bold text-blue-800">Admin Dashboard Login Details</h2>
          <h2 className="text-xl font-bold text-gray-400">djc5hn4j@flymail.tk | admin123</h2>
          <h2 className="text-xl font-bold text-yellow-800">Dummy User Dashboard Login Details</h2>
          <h2 className="text-xl font-bold text-gray-400">afjglseqo@10mail.org | kanbanuser1</h2>

        </section>
        <section className="py-8">
          <h2 className="text-xl font-bold text-gray-800">Organize Your Tasks Effortlessly</h2>
          <p className="mt-2 text-gray-600">Create boards, add tasks, and move them through stages to stay organized.</p>
        </section>
        <section className="py-8">
          <h2 className="text-xl font-bold text-gray-800">Collaborate Seamlessly</h2>
          <p className="mt-2 text-gray-600">Share boards with your team members and keep everyone on the same page.</p>
        </section>
        <section className="py-8">
          <h2 className="text-xl font-bold text-gray-800">Stay Productive Anywhere</h2>
          <p className="mt-2 text-gray-600">Access your tasks from any device, whether at work or on the go.</p>
        </section>
        <section className="py-8">
          <h2 className="text-xl font-bold text-gray-800">Get Started Now!</h2>
          <p className="mt-2 text-gray-600">Sign up for free and start managing your tasks efficiently.</p>
        </section>
      </main>

      <footer className="py-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Kanban-Next. All rights reserved.</p>
      </footer>

    </div>
  );
}

export const dynamic = 'force-dynamic'
