import { ThemeProvider } from "./components";
import { Home } from "./pages/Home";

export function App() {
	return (
		<ThemeProvider defaultTheme="dark">
			<Home />
		</ThemeProvider>
	);
}
