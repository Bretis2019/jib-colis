"use client"
import { useEffect } from "react";
import { useCallback, useRef } from "react";


export function useMousePosition(
    ref: React.RefObject<HTMLElement>,
    callback?: ({ x, y }: { x: number; y: number }) => void,
) {
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const { top, left } = ref.current?.getBoundingClientRect() || {
                top: 0,
                left: 0,
            };

            callback?.({ x: clientX - left, y: clientY - top });
        };

        const handleTouchMove = (event: TouchEvent) => {
            const { clientX, clientY } = event.touches[0];
            const { top, left } = ref.current?.getBoundingClientRect() || {
                top: 0,
                left: 0,
            };

            callback?.({ x: clientX - left, y: clientY - top });
        };

        ref.current?.addEventListener("mousemove", handleMouseMove);
        ref.current?.addEventListener("touchmove", handleTouchMove);

        const nodeRef = ref.current;
        return () => {
            nodeRef?.removeEventListener("mousemove", handleMouseMove);
            nodeRef?.removeEventListener("touchmove", handleTouchMove);
        };
    }, [ref, callback]);
}
export default function CursorTracker({ children }: { children: React.ReactNode }) {
    const divRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);

    const update = useCallback(({ x, y }: { x: number; y: number }) => {
        // We need to offset the position to center the info div
        const offsetX = (infoRef.current?.offsetWidth || 0) / 2;
        const offsetY = (infoRef.current?.offsetHeight || 0) / 2;

        // Use CSS variables to position the info div instead of state to avoid re-renders
        infoRef.current?.style.setProperty("--x", `${x - offsetX}px`);
        infoRef.current?.style.setProperty("--y", `${y - offsetY}px`);
    }, []);

    useMousePosition(divRef, update);

    return (
        <div
            ref={divRef}
            className="group relative cursor-none"
        >
            {/* Actual content */}
            {children}

            {/* Cursor tracker */}
            <div
                ref={infoRef}
                style={{
                    transform: "translate(var(--x), var(--y))",
                }}
                className="pointer-events-none absolute left-0 top-0 z-50 rounded-full bg-blue-800/80 p-2 text-sm font-bold text-white opacity-0 duration-0 group-hover:opacity-100"
            >
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M11.0287 2.53961C11.6327 2.20402 12.3672 2.20402 12.9713 2.5396L20.4856 6.71425C20.8031 6.89062 21 7.22524 21 7.5884V15.8232C21 16.5495 20.6062 17.2188 19.9713 17.5715L12.9713 21.4604C12.3672 21.796 11.6327 21.796 11.0287 21.4604L4.02871 17.5715C3.39378 17.2188 3 16.5495 3 15.8232V7.5884C3 7.22524 3.19689 6.89062 3.51436 6.71425L11.0287 2.53961Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M3 7L12 12M12 12L21 7M12 12V21.5" stroke="#ffffff" strokeWidth={2} strokeLinejoin="round" /> <path d="M7.5 9.5L16.5 4.5" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> <path d="M6 12.3281L9 14" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
            </div>
        </div>
    );
}
