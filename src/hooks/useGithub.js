import { useEffect, useState } from "react";

export function useGithub(username) {
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		fetch(`https://api.github.com/users/${username}/repos`)
			.then((res) => res.json())
			.then((data) => setRepos(data))
			.catch((err) => console.error(err));
	}, [username]);

	return repos;
}
