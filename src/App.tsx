import { RouterProvider } from "react-router";
import "./app.css";
import { router } from "./Router";
function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
