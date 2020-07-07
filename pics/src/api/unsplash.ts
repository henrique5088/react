import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com/",
	headers: {
		Authorization: "Client-ID _OAEEW_eqJWaQ94TyMAVe5IhGaAOO1wUFcp9iW2npww",
	},
});
