"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/1")}>ID 1 (ROUTER)</button>
      <Link href="/1">ID 1 (LINK)</Link>
      <a href="1"> ID 1</a>
      <a href="https:///www.google.com"> Click me!</a>
    </>
  );
}
