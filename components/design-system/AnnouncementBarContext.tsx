"use client";

import { ANNOUNCEMENT_BAR_STORAGE_KEY } from "@/constants/free-deploy";
import {
	type ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

export const ANNOUNCEMENT_BAR_HEIGHT_PX = 36;

type AnnouncementBarContextValue = {
	visible: boolean;
	height: number;
	dismiss: () => void;
};

const AnnouncementBarContext = createContext<AnnouncementBarContextValue>({
	visible: false,
	height: 0,
	dismiss: () => {},
});

export function AnnouncementBarProvider({ children }: { children: ReactNode }) {
	const [visible, setVisible] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const dismissed =
			sessionStorage.getItem(ANNOUNCEMENT_BAR_STORAGE_KEY) === "true";
		setVisible(!dismissed);
	}, []);

	const dismiss = useCallback(() => {
		sessionStorage.setItem(ANNOUNCEMENT_BAR_STORAGE_KEY, "true");
		setVisible(false);
	}, []);

	const isVisible = mounted && visible;
	const height = isVisible ? ANNOUNCEMENT_BAR_HEIGHT_PX : 0;

	useEffect(() => {
		document.documentElement.style.setProperty(
			"--announcement-bar-height",
			`${height}px`,
		);
		return () => {
			document.documentElement.style.removeProperty(
				"--announcement-bar-height",
			);
		};
	}, [height]);

	return (
		<AnnouncementBarContext.Provider
			value={{ visible: isVisible, height, dismiss }}
		>
			{children}
		</AnnouncementBarContext.Provider>
	);
}

export function useAnnouncementBar() {
	return useContext(AnnouncementBarContext);
}
