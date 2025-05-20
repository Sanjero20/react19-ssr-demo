import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import BaseLayout from "./components/layout/base-layout";
import { HomePage, SubscriptionsPage } from "./pages";

function App() {
	return (
		<Routes>
			<Route element={<BaseLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/subscriptions" element={<SubscriptionsPage />} />
			</Route>
		</Routes>
	);
}

export default App;
