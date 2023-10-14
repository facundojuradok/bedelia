import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const RutaPrivada = () => {
    const { user } = useUser();
return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;

}

export default RutaPrivada;