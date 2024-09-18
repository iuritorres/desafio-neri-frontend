import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ContactFormSchema } from "./contact-form";

type FormsTableProps = {
	forms: ContactFormSchema[];
};

export function FormsTable({ forms }: FormsTableProps) {
	return (
		<div>
			<h1 className="text-3xl font-bold my-4">Formulários enviados.</h1>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[180px]">Nome</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Mensagem</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{forms.map((form: ContactFormSchema, index: number) => (
						<TableRow key={`${form.email}-${index}`}>
							<TableCell className="font-medium">
								{form.name}
							</TableCell>
							<TableCell>{form.email}</TableCell>
							<TableCell className="max-w-96 break-words">
								{form.message}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
