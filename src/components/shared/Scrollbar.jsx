import { useCallback } from "react";

const useSmoothScroll = () => {
	const scrollToSection = useCallback((elementId) => {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	}, []);

	return scrollToSection;
};

export default useSmoothScroll;
