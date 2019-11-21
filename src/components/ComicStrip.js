import React, { useState } from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ReplayIcon from "@material-ui/icons/Replay";
import { IconButton } from "@material-ui/core";

const ComicStrip = props => {
  const [stripIndex, setStripIndex] = useState(0);

  const atEndOfImages = stripIndex === props.panelImgs.length - 1;

  const handleNextImage = e => {
    e.preventDefault();
    const nextStripIdx = atEndOfImages ? 0 : stripIndex + 1;
    setStripIndex(nextStripIdx);
  };

  const handleRightClick = e => {
    e.preventDefault();
    setStripIndex(stripIndex + 1);
  };

  const handleLeftClick = e => {
    e.preventDefault();
    setStripIndex(stripIndex - 1);
  };

  const handleReplay = e => {
    e.preventDefault();
    setStripIndex(0);
  };

  return (
    <>
      <div>
        <IconButton
          onClick={handleLeftClick}
          size="small"
          disabled={stripIndex === 0 ? true : false}
        >
          <ArrowLeftIcon fontSize="large" />
        </IconButton>
        {atEndOfImages ? (
          <IconButton onClick={handleReplay} size="small">
            <ReplayIcon fontSize="default" />
          </IconButton>
        ) : (
          <IconButton onClick={handleRightClick} size="small">
            <ArrowRightIcon fontSize="large" />
          </IconButton>
        )}
      </div>
      <div className="trim">
        <div className="panel">
          <img
            className="panelImage"
            src={props.panelImgs[stripIndex].file}
            alt={props.panelImgs[stripIndex].alt}
            onClick={handleNextImage}
          />
        </div>
      </div>
    </>
  );
};

export default ComicStrip;
