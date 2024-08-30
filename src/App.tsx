import AppRoutes from "./AppRoutes";
import Header from "./Dashboard/Header";
import SideNav from "./Dashboard/SideNav";
export default function App() {
  return (
    <>
      <div className="flex justify-between">
        <SideNav />
        <div className="w-full">
          <Header />
          <AppRoutes />
        </div>
      </div>
    </>
  );
}
