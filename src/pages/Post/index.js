import React, { useMemo } from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

export default function Home() {
  const params = useParams();
  const { search } = useLocation();

  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log(params);
  console.log(queryParams.get("teste"));
  console.log(search);

  return (
    <h1>Post</h1>
  );
}
