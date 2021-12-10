import React from "react";
import Link from "next/link";

function IndexPage() {
  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/home">Go Home</Link>
    </div>
  );
}

export default IndexPage;
