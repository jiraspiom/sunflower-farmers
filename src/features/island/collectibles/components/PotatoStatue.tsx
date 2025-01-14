import React from "react";

//import potatoStatue from "assets/sfts/potato_statue.png";
import potatoStatue from "assets/events/christmas/sfts/potato_statue.png";
import { PIXEL_SCALE } from "features/game/lib/constants";

export const PotatoStatue: React.FC = () => {
  return (
    <img
      src={potatoStatue}
      style={{
        width: `${PIXEL_SCALE * 24}px`,
        bottom: `${PIXEL_SCALE * 1}px `,
        left: `${PIXEL_SCALE * 4}px `,
      }}
      alt="Potato Statue"
      className="absolute"
    />
  );
};
