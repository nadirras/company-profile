import CardBlogs from "@/components/blog/CardBlogs";
import { getBlogs } from "@/lib/blog";
import React, { Suspense } from "react";
import { Metadata } from "next";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function Blog() {
  const blogs = await getBlogs();

  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-[10rem] pb-[10rem]">
        <h1 className="text-3xl font-bold text-center">{`What's on MS`}</h1>
        <p className="text-center mb-3">Our stories and latest updates</p>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {blogs.map((item: any) => {
            return (
              <CardBlogs
                key={item.sys.id}
                title={item.fields?.title}
                img={item.fields.img.fields.file.url}
                author={item.fields.author.fields.name}
                email={item.fields.author.fields.email}
                detail={item.fields.slug}
              />
            );
          })}
        </div>
      </div>
    </Suspense>
  );
}
