import { useState } from "react";
import Panel from "./Panel";

export default function Accordian() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Panel
        title={"Paid Course"}
        isActive={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odit,
        amet velit debitis ea asperiores adipisci laudantium quos ipsum animi.
      </Panel>
      <Panel
        title={"Free Course"}
        isActive={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non debitis
        dignissimos incidunt eaque doloremque tempore nulla quod repellat animi
        at eligendi, quas ab eveniet sint laborum, cumque aliquid! Nobis, et.
      </Panel>
    </>
  );
}
