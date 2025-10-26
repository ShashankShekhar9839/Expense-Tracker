"use client";

function ProfileCard() {
  return (
    <div className=" rounded-lg shadow-md border-gray-500 border-1 p-6 bg-white flex flex-col gap-2">
      <h2 className="text-2xl font-semibold ">Hello, Shashank!</h2>
      <p className="text-2xl font-bold">You spend 400 Rs today</p>
      <p className="text-xl">Your budget for this Month is 2000 Rs</p>
      <p className="text-xl">Your remaining budget is 1600 Rs</p>
    </div>
  );
}

export default ProfileCard;
