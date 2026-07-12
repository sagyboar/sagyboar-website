"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Lock, Pause, Play, Volume2, VolumeX } from "lucide-react";
import {
	useCallback,
	useEffect,
	useEffectEvent,
	useRef,
	useState,
} from "react";
import { Container } from "./Container";

const VIDEO_SRC = "/videos/intro.mp4";
const POSTER_SRC = "/videos/intro-poster.jpg";

export function ProductDemoSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [inView, setInView] = useState(false);
	const [shouldLoad, setShouldLoad] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(true);
	const [showControls, setShowControls] = useState(true);

	const onIntersect = useEffectEvent((visible: boolean) => {
		setInView(visible);
		if (visible) setShouldLoad(true);
	});

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				onIntersect(entry.isIntersecting);
			},
			{ threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
		);

		observer.observe(section);
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const video = videoRef.current;
		if (!video || !shouldLoad) return;

		if (inView) {
			void video
				.play()
				.then(() => setIsPlaying(true))
				.catch(() => setIsPlaying(false));
		} else {
			video.pause();
			setIsPlaying(false);
		}
	}, [inView, shouldLoad]);

	const togglePlay = useCallback(() => {
		const video = videoRef.current;
		if (!video) return;

		if (video.paused) {
			void video
				.play()
				.then(() => setIsPlaying(true))
				.catch(() => setIsPlaying(false));
		} else {
			video.pause();
			setIsPlaying(false);
		}
	}, []);

	const toggleMute = useCallback(() => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = !video.muted;
		setIsMuted(video.muted);
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden bg-background py-12 sm:py-16"
			aria-labelledby="product-demo-heading"
		>
			<Container>
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.98 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true, margin: "-60px" }}
					transition={{
						duration: 0.55,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="mx-auto flex max-w-2xl flex-col items-center text-center"
				>
					<h2
						id="product-demo-heading"
						className="font-display text-xl font-medium tracking-tight text-foreground/90 sm:text-2xl"
					>
						See Sagyboar in{" "}
						<span className="border-b border-blue-400/80 text-blue-400">
							Action
						</span>
					</h2>
					<p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
						A 22-second tour of deploy, monitor, and auto-heal — right in the
						browser.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 28, scale: 0.97 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true, margin: "-40px" }}
					transition={{
						duration: 0.65,
						delay: 0.08,
						ease: [0.22, 1, 0.36, 1],
					}}
					className="relative mx-auto mt-8 max-w-5xl sm:mt-10"
				>
					<div
						className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-blue-400/10 blur-3xl sm:-inset-6"
						aria-hidden
					/>

					<div className="relative overflow-hidden rounded-xl border border-border/80 bg-card shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_80px_-20px_rgba(0,0,0,0.85),0_0_60px_-20px_rgba(96,165,250,0.25)] sm:rounded-2xl">
						{/* Browser chrome */}
						<div className="flex items-center gap-3 border-b border-border/70 bg-muted/40 px-3 py-2.5 sm:gap-4 sm:px-4 sm:py-3">
							<div className="flex shrink-0 items-center gap-1.5" aria-hidden>
								<span className="size-2.5 rounded-full bg-[#ff5f57] sm:size-3" />
								<span className="size-2.5 rounded-full bg-[#febc2e] sm:size-3" />
								<span className="size-2.5 rounded-full bg-[#28c840] sm:size-3" />
							</div>

							<div className="flex min-w-0 flex-1 items-center justify-center">
								<div className="flex w-full max-w-md items-center gap-1.5 rounded-md border border-border/60 bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs">
									<Lock
										className="size-3 shrink-0 text-muted-foreground/80 sm:size-3.5"
										aria-hidden
									/>
									<span className="truncate font-medium tracking-tight text-foreground/70">
										sagyboar.space
									</span>
								</div>
							</div>

							<div className="hidden w-[52px] sm:block" aria-hidden />
						</div>

						{/* Video viewport */}
						<div
							className="group relative aspect-video bg-background"
							onMouseEnter={() => setShowControls(true)}
							onMouseLeave={() => {
								const paused = videoRef.current?.paused ?? true;
								setShowControls(paused);
							}}
							onFocusCapture={() => setShowControls(true)}
						>
							<video
								ref={videoRef}
								className="absolute inset-0 size-full object-cover"
								poster={POSTER_SRC}
								preload="metadata"
								muted={isMuted}
								loop
								playsInline
								aria-label="Sagyboar product intro video, 22 seconds"
								onPlay={() => setIsPlaying(true)}
								onPause={() => {
									setIsPlaying(false);
									setShowControls(true);
								}}
							>
								{shouldLoad ? (
									<source src={VIDEO_SRC} type="video/mp4" />
								) : null}
								Your browser does not support embedded video playback.
							</video>

							<p className="sr-only">
								This product intro video does not include captions. It
								demonstrates the Sagyboar deploy, monitor, and auto-heal
								workflow.
							</p>

							<div
								aria-hidden
								className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
							/>

							<AnimatePresence>
								{showControls || !isPlaying ? (
									<motion.div
										initial={{ opacity: 0, y: 6 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 6 }}
										transition={{ duration: 0.2 }}
										className="absolute bottom-3 left-3 flex items-center gap-2 sm:bottom-4 sm:left-4"
									>
										<button
											type="button"
											onClick={togglePlay}
											aria-label={isPlaying ? "Pause video" : "Play video"}
											className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:size-10"
										>
											{isPlaying ? (
												<Pause className="size-4 sm:size-[1.1rem]" />
											) : (
												<Play className="size-4 translate-x-px sm:size-[1.1rem]" />
											)}
										</button>
										<button
											type="button"
											onClick={toggleMute}
											aria-label={isMuted ? "Unmute video" : "Mute video"}
											className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition hover:bg-black/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:size-10"
										>
											{isMuted ? (
												<VolumeX className="size-4 sm:size-[1.1rem]" />
											) : (
												<Volume2 className="size-4 sm:size-[1.1rem]" />
											)}
										</button>
									</motion.div>
								) : null}
							</AnimatePresence>
						</div>
					</div>
				</motion.div>
			</Container>
		</section>
	);
}
