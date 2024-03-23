import ShareButton from "@/components/blog";
import { getBlogSlug, getBlogs } from "@/lib/blog";
import Link from "next/link";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((items: any) => ({
    params: {
      slug: items.fields.slug,
    },
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogSlug(params.slug);

  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.img.fields.file.url}`],
    },
  };
}

export default async function BlogContent({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogSlug(params.slug);

  return (
    <div className="pt-[10rem]">
      <div className="ml-5 mr-5 flex justify-between">
        <Link
          href={"/blog"}
          className="btn btn-sm md:btn-md gap-2 lg:gap-3 mt-3"
        >
          <svg
            className="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
          </svg>{" "}
          <div className="flex flex-col items-start">
            <span className="text-base-content/50 hidden text-xs font-normal md:block">
              Prev
            </span>{" "}
            <span>Blog</span>
          </div>
        </Link>
        <div className="m-3">
          <h1>
            <ShareButton slug={blog.fields.slug} />
          </h1>
        </div>
      </div>

      <div className="flex text-center justify-center">
        <div className="w-6/12 lg:w-8/12 xl:w-7/12 ml-0 mb-3">
          <h1 className="text-3xl font-bold">{blog.fields.title}</h1>
        </div>
      </div>

      {/* <h1 className="text-3xl text-center font-bold mb-3">
        {blog.fields.title}
      </h1> */}
      {/* <Image
        src={`https:${blog.fields.img.fields.file.url}`}
        fill
        objectFit="cover"
        alt="image"
        // className=" w-full max-sm:px-7 md:w-96 h-auto float-left md:ml-[10rem] md:mr-5 max-md:float-none max-md:w-full lg:max-w-[20rem] xl:max-w-[30rem] mt-5"
        loading="lazy"
      /> */}
      <div className="max-md:flex max-md:justify-center max-md:items-center">
        <img
          src={`https:${blog.fields.img.fields.file.url}`}
          alt="image"
          className="w-[80%] max-sm:px-7 md:w-96 h-auto float-left md:ml-[10rem] md:mr-5 lg:max-w-[20rem] xl:max-w-[30rem] mt-5 "
        />
      </div>
      <p className="px-[10rem] max-md:px-[5rem] max-sm:px-[3rem] text-justify">
        {documentToReactComponents(blog.fields.content)}
      </p>
      <div className="flex flex-col items-center mb-3 mt-3">
        <h1 className="text-sm font- truncate dark:text-whitemedium text-gray-500">
          Author: {blog.fields.author.fields.name}
        </h1>
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            Email: {blog.fields.author.fields.email}
          </p>
        </div>
        <h1 className="text-sm text-gray-500 truncate dark:text-gray-400">
          Date: {blog.fields.date}
        </h1>
      </div>
    </div>
  );
}
