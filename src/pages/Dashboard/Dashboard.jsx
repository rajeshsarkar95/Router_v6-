import { Routes, Route, Link, Outlet } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";

export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
