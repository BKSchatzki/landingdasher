import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <span>Hello World</span>
      <SignIn />
    </div>
  );
}
