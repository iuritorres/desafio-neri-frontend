import { ContactForm } from "@/components/contact-form";
import { ModeToggle } from "@/components/mode-toggle";

export function Home() {
	return (
		<>
			<ModeToggle />
			<h1 className="text-3xl font-bold my-4">Formulário Neri</h1>

			<ContactForm />
		</>
	);
}
