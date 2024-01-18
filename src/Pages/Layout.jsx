import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
