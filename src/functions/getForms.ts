import { API_URL } from "@/api/desafio-neri-api";

export async function getForms() {
	const response = await fetch(`${API_URL}/forms`);

	if (!response.ok) {
		throw new Error("Erro ao buscar formulários");
	}

	return response.json();
}
