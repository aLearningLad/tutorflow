import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className=" min-h-screen flex justify-center items-center bg-black text-white flex-col">
      <h2 className=" text-white">Hi there!</h2>
      <div className=" w-full h-60 border-4 border-white rounded-lg ">
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;
