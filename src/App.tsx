import { ThemeProvider } from "./components/theme-provider";
import { Home } from "./pages/Home";

export function App() {
	return (
		<ThemeProvider defaultTheme="dark">
			<Home />
		</ThemeProvider>
	);
}
