import { WithShad } from "./withshad";
import { Noshad } from "./noshad";
import { Separated } from "./separated";
import { NoVirtualization } from "./novirtualization";

function App() {
  return (
    <div className="h-screen flex justify-center items-center gap-32">
      <div className="flex flex-col gap-2">
        <span>With shadcn</span>
        <WithShad />
      </div>
      <div className="flex flex-col gap-2">
        <span>Separated components</span>
        <Separated />
      </div>
      <div className="flex flex-col gap-2">
        <span>No virtualization</span>
        <NoVirtualization />
      </div>
      <div className="flex flex-col gap-2">
        <span>No shadcn</span>
        <Noshad />
      </div>
    </div>
  );
}

export default App;
