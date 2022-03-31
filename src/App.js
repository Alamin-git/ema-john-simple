import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";

function App() {
   return (
      <div>
         <Header></Header>
         <Routes>
            <Route path="/" element={<Shop></Shop>} />
            <Route path="/shop" element={<Shop></Shop>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/orders" element={<Orders></Orders>} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </div>
   );
}

export default App;
