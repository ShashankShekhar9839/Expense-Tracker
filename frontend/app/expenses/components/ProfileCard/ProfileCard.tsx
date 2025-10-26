"use client";

function ProfileCard() {
  return (
    <div className=" rounded-lg shadow-md bg-blue-500 p-4 text-white">
      <h2 className="text-2xl font-semibold ">Hello, Shashank!</h2>
      <p className="text-2xl font-bold">You spend 400 Rs today</p>
      <p className="text-xl">Your budget for this Month is 2000 Rs</p>
      <p className="text-xl">Your remaining budget is 1600 Rs</p>
    </div>
  );
}

export default ProfileCard;
