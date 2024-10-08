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

export type ContactFormSchema = z.infer<typeof formSchema>;

type ContactFormProps = {
	onSubmit: (values: ContactFormSchema) => void;
};

export function ContactForm({ onSubmit }: ContactFormProps) {
	const form = useForm<ContactFormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	return (
		<div>
			<h1 className="text-3xl font-bold my-4">Formulário Neri</h1>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit((values) => {
						onSubmit(values);
						form.reset();
					})}
					className="space-y-4 w-[360px]"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormDescription>
									Digite seu nome
								</FormDescription>
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
								<FormDescription>
									Digite seu email
								</FormDescription>
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
								<FormControl className="w-full">
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
		</div>
	);
}
