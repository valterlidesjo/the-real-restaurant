import { RouterProvider } from "react-router";
import "./app.css";
import { router } from "./Router";
import "./styles/_global.scss";
import { BookingProvider } from "./Context/BookingsContext";

function App() {
  return (
    <>
      <BookingProvider>
        <RouterProvider router={router} />
      </BookingProvider>
    </>
  );
}

export default App;
