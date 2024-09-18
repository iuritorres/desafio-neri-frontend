import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function Home() {
	return (
		<>
			<ModeToggle />
			<h1 className="text-3xl font-bold ">Formulário Neri</h1>

			<Button>Enviar</Button>
		</>
	);
}
