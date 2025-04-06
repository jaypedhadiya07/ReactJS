import { Card } from "./Components/Card";

function App() {
  return (
    <>
      <h1 className="text-amber-400 text-5xl bg-green-500 font-bold uppercase m-20 flex items-center justify-center rounded-2xl pb-2 pt-2">
        TailwindCSS
      </h1>
      <div className="flex items-center justify-center mr-45">
        <Card userName="jay"></Card>
        <Card></Card>
      </div>
    </>
  );
}

export default App;
