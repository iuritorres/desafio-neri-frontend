import { ContactForm, FormsTable, ModeToggle } from "@/components";
import { ContactFormSchema } from "@/components/contact-form";
import { Toaster } from "@/components/ui/toaster";
import { getForms } from "@/functions/getForms";
import { postForm } from "@/functions/postForm";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function Home() {
	const [forms, setForms] = useState<ContactFormSchema[]>([]);
	const { toast } = useToast();

	async function onSubmit(values: ContactFormSchema) {
		try {
			await postForm(values);

			toast({
				title: `Obrigado ${values.name}!`,
				description: "Formulário enviado com sucesso.",
			});
		} catch (error: Error | unknown) {
			toast({
				title: error ? (error as Error).message : "",
				variant: "destructive",
			});
		}

		try {
			const databaseForms = await getForms();
			setForms(databaseForms);
		} catch (error: Error | unknown) {
			toast({
				title: error ? (error as Error).message : "",
				variant: "destructive",
			});
		}
	}

	return (
		<main className="min-h-svh p-20">
			<ModeToggle />

			<section className="flex w-full items-start gap-14">
				<ContactForm onSubmit={onSubmit} />
				<FormsTable forms={forms} />
			</section>

			<Toaster />
		</main>
	);
}
