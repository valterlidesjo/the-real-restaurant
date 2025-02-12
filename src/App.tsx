import { RouterProvider } from "react-router";
import "./app.css";
import { router } from "./Router";
import "./styles/_global.scss";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
