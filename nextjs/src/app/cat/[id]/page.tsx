import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;

  const product = await fetch(`https://.../${id}`).then((res) => res.json());

  return {
    title: product.title,
    // some info about the products
    // ...
  };
}

export default function IdPage({ params }: { params: { id: string } }) {
  return <h1> {params.id}</h1>;
}
