import { useState, useRef, useEffect } from "react";

import NavBar from "./components/NavBar";
import ToolBar from "./components/ToolBar";
import fetchFastApi from "./fetchFastApi";

function App() {
  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");
  const [value, setValue] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      setValue(ref.current.currentTime);
    };

    ref.current.addEventListener("timeupdate", updateProgress);
    return () => {
      ref.current.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  const onChangeGetVideo = () => {
    fetchFastApi(input).then((data) => {
      const newTitle = data.title;
      setTitle(newTitle);
      const decodedUrl = atob(data.audio_video.replace("/proxy/", ""));
      ref.current.src = decodedUrl;
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    ref.current.currentTime = event.target.value;
  };

  const max = isNaN(ref.current?.duration) ? 100 : ref.current.duration;

  return (
    <div className="App">
      <NavBar onChangeGetVideo={onChangeGetVideo} setInput={setInput} />
      <div className="content">
        <h2 className="title">{title}</h2>

        <video
          ref={ref}
          width="500px"
          height="500px"
          controls={false}
          autoPlay={true}
        ></video>

        <ToolBar
          refVideo={ref}
          position={value}
          handleChange={handleChange}
          max={max}
        />
      </div>
    </div>
  );
}

export default App;
