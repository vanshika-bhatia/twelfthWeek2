
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AuthProvider from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/Login";
import NotesLayout from "./pages/NotesLayout";
import Notes from "./pages/Notes";
import Archive from "./pages/Archive";
import Shared from "./pages/Shared";
import LabelNotes from "./pages/LabelNotes";
import Collaborate from "./pages/Collaborate";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<NotesLayout />}>
              <Route path="/notes" element={<Notes />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/shared" element={<Shared />} />
              <Route
                path="/labels/:labelName"
                element={<LabelNotes />}
              />
              <Route
                path="/collaborate"
                element={<Collaborate />}
              />
            </Route>
          </Route>

          <Route
            path="/"
            element={<Navigate to="/notes" replace />}
          />

          <Route
            path="*"
            element={<h2>404 - Page Not Found</h2>}
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
