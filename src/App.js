import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const title = "Terms and Conditions"
  const [data, setData] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
      const data = await response.text()
      setData(data)
    }
    fetchData()
  }, [])

  return (
      <Document title={title} content={data}></Document>
  );
}

export default App;
