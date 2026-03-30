"use client";
import dynamic from "next/dynamic";

const Platform = dynamic(() => import("../components/Platform"), { ssr: false });

export default function Page() {
  return <Platform />;
}
