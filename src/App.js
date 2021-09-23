import { useEffect, useState } from "react";
import "./App.css";
import Document from "./Document";

function App() {
  const title = "Terms and Conditions"
  const [data, setData] = useState("")

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
      const data = await res.text()
      setData(data)
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <Document title={title} content={data}></Document>
    </div>
  );
}

export default App;
