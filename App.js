import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";



const App = () => {
  const pageSize = 6;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />
      <News
        setProgress={setProgress}
        pageSize={pageSize}
        category="sports"
        country="in"
      />
    </div>
  );
};

export default App;