import { UserAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import ContainerLayout from "../layouts/ContainerLayout";

export const FirebaseAuthSkeleton = () => {
 return (
  <div className='backgroundOverlay p-2'>
   <div className='flex flex-col items-center gap-2 h-[50vh] justify-center'>
    <div className='bg-gray-300 p-4 rounded w-1/2 h-6 animate-pulse'></div>
    <div className='flex gap-4 mt-4'>
     <div className='bg-gray-300 rounded w-48 h-10 animate-pulse'></div>
    </div>
   </div>
  </div>
 );
};
