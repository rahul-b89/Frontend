import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          Test
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                if (color == "red") {
                  setColor("black");
                } else {
                  setColor("red");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => {
                if (color == "green") {
                  setColor("black");
                } else {
                  setColor("green");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => {
                if (color == "white") {
                  setColor("black");
                } else {
                  setColor("white");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "white" }}
            >
              White
            </button>

            <button
              onClick={() => {
                if (color == "yellow") {
                  setColor("black");
                } else {
                  setColor("yellow");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>

            <button
              onClick={() => {
                if (color == "blue") {
                  setColor("black");
                } else {
                  setColor("blue");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => {
                if (color == "brown") {
                  setColor("black");
                } else {
                  setColor("brown");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "brown" }}
            >
              Brown
            </button>

            <button
              onClick={() => {
                if (color == "grey") {
                  setColor("black");
                } else {
                  setColor("grey");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>

            <button
              onClick={() => {
                if (color == "purple") {
                  setColor("black");
                } else {
                  setColor("purple");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button
              onClick={() => {
                if (color == "orange") {
                  setColor("black");
                } else {
                  setColor("orange");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>

            <button
              onClick={() => {
                if (color == "olive") {
                  setColor("black");
                } else {
                  setColor("olive");
                }
              }}
              className="outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
