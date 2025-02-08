"use client";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <h1
        onClick={() => {
          router.push("cat/123");
        }}
      ></h1>

      <Image />
    </>
  );
}
