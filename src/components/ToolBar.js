/**
 * Play & Pause Button & SeekBar
 * @param {*} param0
 * @returns
 */
function ToolBar({ refVideo, position, handleChange, max }) {
  return (
    <div>
      <input
        className="seekBar"
        type="range"
        min={0}
        max={max}
        value={position}
        onChange={handleChange}
      />

      {/*Buttons Play & Pause*/}
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            refVideo.current.play();
          }}
        >
          PLAY
        </button>
        <button
          className="button"
          onClick={() => {
            refVideo.current.pause();
          }}
        >
          PAUSE
        </button>
      </div>
    </div>
  );
}

export default ToolBar;
