import { GridItems } from "../../../data";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

function Grid() {
  return (
    <section id="#about">
      <BentoGrid>
        {GridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
