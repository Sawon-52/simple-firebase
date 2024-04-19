import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <div className="w-4/5 mx-auto min-h-[600px] rounded-lg bg-green-200 my-4 p-5 ">
      <Header></Header>
      <div className="flex justify-center my-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
