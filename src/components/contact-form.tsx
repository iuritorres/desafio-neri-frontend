import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
	name: z.string().min(1, { message: "Nome é obrigatório" }).max(255),
	email: z
		.string()
		.email("Email inválido")
		.min(1, { message: "Email é obrigatório" })
		.max(255),
	message: z.string().min(1, { message: "Mensagem é obrigatória" }).max(255),
});

type ContactFormSchema = z.infer<typeof formSchema>;

export function ContactForm() {
	const form = useForm<ContactFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(values: ContactFormSchema) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormDescription>Digite seu nome</FormDescription>
							<FormControl>
								<Input
									placeholder="Ex.: João da Silva"
									type="text"
									autoComplete="name"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormDescription>Digite seu email</FormDescription>
							<FormControl>
								<Input
									placeholder="Ex.: joao@gmail.com"
									type="email"
									autoComplete="email"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormDescription>
								Digite sua mensagem
							</FormDescription>
							<FormControl>
								<Textarea
									placeholder="Insira sua mensagem aqui..."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Enviar</Button>
			</form>
		</Form>
	);
}
