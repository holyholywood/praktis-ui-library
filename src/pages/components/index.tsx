import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ComponentsPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return <div>ComponentsPage</div>;
};

export default ComponentsPage;
