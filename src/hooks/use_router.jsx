import { useMemo } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";

import queryString from "query-string";

//TODO: Crear un proyecto con los hooks que se van a usar en todos los proyectos.
export const useRouter = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const params = useParams();

	//? Memoize so that a new object is only returned if something changes
	return useMemo(() => {
		return {
			push: navigate,
			location,
			pathname: location.pathname,
			query: {
				...queryString.parse(location.search), //? convert string to object
				...params,
			},
			path: location.pathname.concat(location.search || "")
		};
	}, [location, navigate, params]);
};