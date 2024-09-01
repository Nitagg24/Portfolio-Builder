"use client"
import { TwicPicture } from '@twicpics/components/react';
import { MapPin } from 'lucide-react';
import React from 'react';

function UserDetailInfo({ userDetail }) {
  return userDetail?.name && (
    <div className='flex flex-col items-center justify-center h-auto py-10 lg:h-screen md:py-0'>
      <TwicPicture src={userDetail?.profileImage}
        className='w-32 h-32 md:w-48 md:h-48 rounded-full'
      />
      <h2 className='font-bold text-lg md:text-2xl mt-4 mb-1'>{userDetail.name}</h2>
      <h2 className='flex gap-2 text-sm md:text-md items-center text-gray-500'>
        <MapPin className='w-4 h-4' /> {userDetail.location}
      </h2>
      <p className='text-center mt-2 mb-4'>{userDetail.bio}</p>
      <div className='flex justify-center items-center gap-2 w-full px-4'>
        <input type="text" placeholder="Add your email" className="input input-bordered w-full max-w-xs" />
        <button className='btn btn-primary'>Subscribe</button>
      </div>
    </div>
  );
}

export default UserDetailInfo;

