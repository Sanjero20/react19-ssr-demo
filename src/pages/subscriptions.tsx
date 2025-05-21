import { useEffect, useState } from "react";

export const SubscriptionsPage = () => {
	const [subscriptions, setSubscriptions] = useState<{ name: string; id: string }[]>([]);

	const fetchData = async () => {
		const response = await fetch("/api/subscriptions");
		console.log(response);
		// const users = await response.json();
		// setSubscriptions(users);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			hello world
			<div>
				{subscriptions.length > 0 &&
					subscriptions.map((subscription) => (
						<p key={subscription.id}>
							{subscription.name}
							{/*  */}
						</p>
					))}
			</div>
		</div>
	);
};
