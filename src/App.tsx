import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import Switch from "./components/Switch";

const options = ["Edit", "Delete", "View"];

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 h-screen">
      <h1 className="text-3xl font-bold text-white">Welcome!</h1>

      <div className="flex flex-col mt-10 justify-center items-center gap-4">
        <Button>Click me!</Button>

        <Switch />

        <Dropdown label="Options" options={options} />
      </div>
    </div>
  );
}

export default App;
