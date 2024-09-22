"use client";

import { useState, useEffect } from "react";

export default function ClientComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://api.com/data");
      const result = await res.json();
      setData(result);
    }

    fetchData();
  }, []);

  return <div>{data}</div>;
}
