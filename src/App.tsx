import { WithShad } from "./withshad";
import { Noshad } from "./noshad";
import { ComboboxDemo } from "./shadexample";

function App() {
  return (
    <div className="h-screen flex justify-center items-center gap-32">
      <div className="flex flex-col gap-2">
        <span>With shadcn</span>
        <WithShad />
      </div>
      <div className="flex flex-col gap-2">
        <span>No shadcn</span>
        <Noshad />
      </div>
      <ComboboxDemo />
    </div>
  );
}

export default App;
