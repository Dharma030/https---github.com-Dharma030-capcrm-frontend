import "./App.css";
import Login from "./pages/Login";
import Customer from "./pages/Customer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import AlertSnackBar from "./components/AlertSnackBar";
import { alertContext } from "./context/AlertContext";
import { useContext } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

function App() {
  const [OpenAlert, setOpenAlert, Message, , AlertType, , openBackDrop, ,] =
    useContext(alertContext);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/customer"
            element={
              <ProtectedRoute>
                <Customer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/customer/createTicket"
            element={
              <ProtectedRoute>
                <Customer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <AlertSnackBar
        Message={Message}
        AlertType={AlertType}
        OpenAlert={OpenAlert}
        setOpenAlert={setOpenAlert}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <footer
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#22222200" }}
      >
        <h6>
  <span style={{ fontWeight: 'bold', color: '#3498db' }}>⚡</span> Designed and Crafted by{' '}
  <a href="/" style={{ color: '#e74c3c', textDecoration: 'none', fontWeight: 'bold' }}>
    DharmaWebDev
  </a>
  <span style={{ fontWeight: 'bold', color: '#3498db' }}> 🚀</span>
</h6>

      </footer>
    </div>
  );
}

export default App;
