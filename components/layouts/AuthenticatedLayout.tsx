"use client";

import React, { useEffect, useState, ReactNode } from "react";
import BlogLayout from "@/layouts/BlogLayout";
import { UserAuth } from "@/context/AuthContext";
import { FirebaseAuth } from "@/components/global/FirebaseAuth";
import { FirebaseAuthSkeleton } from "../skeleton/FirebaseAuthSkeleton";

interface AuthenticatedLayoutProps {
 children: ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
 children,
}) => {
 const { user } = UserAuth();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const checkAuthentication = async () => {
   await new Promise((resolve) => setTimeout(resolve, 50));
   setLoading(false);
  };
  checkAuthentication();
 }, [user]);

 return (
  <BlogLayout>
   {loading ? (
    <FirebaseAuthSkeleton />
   ) : user ? (
    <div>
     <React.Fragment>{children}</React.Fragment>
     <section className='pt-4'>
      <FirebaseAuth />
     </section>
    </div>
   ) : (
    <React.Fragment>
     <FirebaseAuth />
    </React.Fragment>
   )}
  </BlogLayout>
 );
};

export default AuthenticatedLayout;
