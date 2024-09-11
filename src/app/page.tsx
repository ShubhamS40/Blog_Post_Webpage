import Image from "next/image";
import React from 'react';
import PopularCategories from "@/components/self-component/categoryCard";
import RecentPost from "@/components/self-component/recentPost";
import Footer from "@/components/self-component/Footer";
import BodyPart from "@/components/self-component/BodyPart";

export default function Home() {
  return (
    <div className="grid  grid-rows-[20px_1fr_20px] items-center justify-items-center     font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
     
     <BodyPart/>
<PopularCategories/>
<RecentPost/>
     <Footer/>
     </main>
    </div>
  );
}





