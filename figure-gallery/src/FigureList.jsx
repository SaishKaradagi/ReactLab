import React, { useState } from "react";
import BasicFigure from "./BasicFigure";
const FigureList = () => {
  const [figures, setFigures] = useState([
    { imageUrl: "https://picsum.photos/400", caption: "random1" },
    { imageUrl: "https://picsum.photos/400", caption: "random2" },
    { imageUrl: "https://picsum.photos/400", caption: "random3" },
    { imageUrl: "https://picsum.photos/400", caption: "random4" },
  ]);

  const addFigure = () => {
    const newFigure = {
      imageUrl: `https://picsum.photos/400?random=${figures.length + 1}`,
      caption: `random Image ${figures.length + 1}`,
    };

    setFigures([...figures, newFigure]);
  };

  const removeFigure = () => {
    setFigures(figures.slice(0, figures.length - 1));
  };

  return (
    <div className="figure-list-container">
      <div className="button-box">
        <button onClick={addFigure} className="action-button">
          Add Image
        </button>
        <button onClick={removeFigure} className="action-button">
          Remove Image
        </button>
      </div>
      <div className="figure-list">
        {figures.map((figure, index) => (
          <BasicFigure
            // key={index}
            imageUrl={figure.imageUrl}
            caption={figure.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default FigureList;
