import "./App.css";
import { Route, Routes } from "react-router";

import BaseLayout from "./components/layout/base-layout";
import { HomePage, SubscriptionsPage, NotFoundPage } from "./pages";

function App() {
	return (
		<Routes>
			<Route element={<BaseLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/subscriptions" element={<SubscriptionsPage />} />
			</Route>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
