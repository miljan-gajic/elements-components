import "./App.scss";

import Scroller from "@/components/Scroller/Scroller";
import ScrollerList from "./components/Scroller/ScrollerList/ScrollerList";

function App() {
  return (
    <main>
      <div>CENTRAL</div>
      <Scroller>
        <ScrollerList
          items={[
            "HTML",
            "CSS",
            "JS",
            "JSX",
            "React",
            "NextJS",
            "Angular",
            "NestJS",
            "Node",
            "Docker",
          ]}
        />
      </Scroller>
    </main>
  );
}

export default App;
