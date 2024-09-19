import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ContactFormSchema } from "./contact-form";
import { ScrollArea } from "./ui/scroll-area";

type FormsTableProps = {
	forms: ContactFormSchema[];
};

export function FormsTable({ forms }: FormsTableProps) {
	return (
		<div className="w-[700px]">
			<h1 className="text-3xl font-bold my-4">Formulários enviados.</h1>

			{forms.length === 0 && (
				<p className="text-lg text-gray-500">
					Envie um formulário para ver os dados aqui.
				</p>
			)}

			{forms.length > 0 && (
				<Table>
					<ScrollArea className="h-96 w-[700px] rounded-md border">
						<TableHeader>
							<TableRow>
								<TableHead>Nome</TableHead>
								<TableHead>Email</TableHead>
								<TableHead className="w-80">Mensagem</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{forms.map(
								(form: ContactFormSchema, index: number) => (
									<TableRow key={`${form.email}-${index}`}>
										<TableCell className="font-medium">
											{form.name}
										</TableCell>
										<TableCell>{form.email}</TableCell>
										<TableCell className="max-w-24 break-words">
											{form.message}
										</TableCell>
									</TableRow>
								),
							)}
						</TableBody>
					</ScrollArea>
				</Table>
			)}
		</div>
	);
}
