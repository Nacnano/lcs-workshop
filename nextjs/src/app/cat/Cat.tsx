export default async function Cat() {
  const res = await fetch("https://api.com/data");
  const data = await res.json();

  return <div>{data}</div>;
}
