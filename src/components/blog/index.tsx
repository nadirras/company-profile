import React from "react";
import CopyButton from "./Copy";

const base_url = process.env.Base_URL_WEB || "";

export default function ShareButton({ slug }: { slug: string }) {
  return (
    <div className="flex flex-col">
      <p className=" text-xs font-bold text-gray-400 py-2 ">Copy Link</p>
      <CopyButton slug={slug} url={base_url} />
    </div>
  );
}
