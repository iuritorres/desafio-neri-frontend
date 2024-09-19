import { API_URL } from "@/api/desafio-neri-api";

export async function getForms() {
	try {
		const response = await fetch(`${API_URL}/forms`);
		return response.json();
	} catch (error: Error | unknown) {
		if (error instanceof TypeError) {
			throw new Error("Erro ao buscar formulários");
		}
	}
}
