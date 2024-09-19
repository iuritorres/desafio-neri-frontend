import { ContactForm, FormsTable, ModeToggle } from "@/components";
import { ContactFormSchema } from "@/components/contact-form";
import { getForms } from "@/functions/getForms";
import { postForm } from "@/functions/postForm";
import { useState } from "react";

export function Home() {
	const [forms, setForms] = useState<ContactFormSchema[]>([]);

	async function onSubmit(values: ContactFormSchema) {
		await postForm(values);
		const databaseForms = await getForms();

		setForms(databaseForms);
	}

	return (
		<main className="min-h-svh p-20">
			<ModeToggle />
			<h1 className="text-3xl font-bold my-4">Formulário Neri</h1>

			<section className="flex w-full gap-14">
				<ContactForm onSubmit={onSubmit} />
				<FormsTable forms={forms} />
			</section>
		</main>
	);
}
