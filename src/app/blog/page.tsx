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
      <div className="pt-[10rem] pb-[10rem] overflow-x-hidden">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center mb-2"
          data-aos="fade-left"
        >{`What's on MS`}</h1>
        <div className="flex text-center justify-center" data-aos="fade-left">
          <div className="w-6/12 lg:w-8/12 xl:w-7/12 ml-0">
            <p>
              Our stories and latest updates. Check out our newest stories and
              stay informed with the latest updates.
            </p>
          </div>
        </div>

        <div className="divider mb-5"></div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
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
