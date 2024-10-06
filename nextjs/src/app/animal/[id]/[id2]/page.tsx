type Params = { params: { id: string; id2: string } };

export default function Page({ params }: Params) {
  return (
    <>
      <h1>
        Cat {params.id} {params.id2}
      </h1>
    </>
  );
}
