"use client";
import { PreviewUpdateContext } from "@/app/_context/PreviewUpdateContext";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import React, { useContext } from "react";
import Link from "next/link";
function MobilePreview() {
  const { updatePreview, setUpdatePreview } = useContext(PreviewUpdateContext);
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="p-5  md:fixed">
      <div
        className="border-[13px]  lg:w-[330px] xl:w-[350px] w-full border-black 
        max-h-[650px]
        h-screen rounded-[40px] m-2 shadow-md shadow-primary"
      >
        <iframe
          title="Profile"
          key={updatePreview}
          src={
            "https://portfolio-builder-blue.vercel.app/" + userDetail?.username
          }
          width="100%"
          height="100%"
          className="rounded-[25px]"
        />
      </div>
      <Link
        href={`/${userDetail?.username}`}
        className="block text-center text-md font-bold text-blue-600 hover:text-blue-800 py-2"
        target="_blank"
      >
        Visit {userDetail?.username}'s Portfolio
      </Link>
    </div>
  );
}

export default MobilePreview;
