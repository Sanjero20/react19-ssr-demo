import { Link, Outlet } from "react-router";

function BaseLayout() {
	return (
		<>
			<nav className="flex gap-4 underline">
				<Link to={"/"}>Home</Link>
				<Link to={"/subscriptions"}>Subscriptions</Link>
			</nav>
			<Outlet />
		</>
	);
}

export default BaseLayout;
