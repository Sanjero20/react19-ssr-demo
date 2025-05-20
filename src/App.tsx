import "./App.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="bg-red-900">
			<Button variant="destructive" onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</Button>

			<div className="min-h-screen flex items-center justify-center text-2xl font-bold text-blue-600 bg-green-900">
				Hello Vite + SSR + Tailwind! hotdog
			</div>
		</div>
	);
}

export default App;
