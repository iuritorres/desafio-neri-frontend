import { API_URL } from "@/api/desafio-neri-api";
import { ContactFormSchema } from "@/components/contact-form";

export async function postForm(data: ContactFormSchema) {
	const response = await fetch(`${API_URL}/forms/submit`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (!response.ok) {
		throw new Error("Erro ao enviar formulário");
	}

	return response.json();
}
