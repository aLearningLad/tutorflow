import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className=" min-h-screen flex justify-center items-center bg-slate-900 flex-col">
      <h2 className=" text-white text-[30px] ">Let's get you signed in</h2>
      <p className=" text-neutral-200 text-[14px] ">
        Quick, easy access to tutorials and discussion rooms
      </p>
      <div className=" w-full h-60 flex justify-center items-center rounded-lg ">
        <SignIn forceRedirectUrl={"/dashboard"} />
      </div>
    </main>
  );
};

export default SignInPage;
