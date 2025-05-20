import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";
// import "./App.css";

export function render(url: string) {
	const html = renderToString(
		<StrictMode>
			<StaticRouter location={url}>
				<App />
			</StaticRouter>
		</StrictMode>
	);

	console.log(html);

	return { html };
}
