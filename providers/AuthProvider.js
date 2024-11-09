import { useRouter } from "next/router";
import { getCookie } from "../utils/cookie";
function AuthProvider({ children }) {
  const token = getCookie("token");
  const router = useRouter();
  if (!token) return <Navigate to="/login" />;
  return children;
}

export default AuthProvider;
