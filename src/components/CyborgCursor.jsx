import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CyborgCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', moveCursor);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Main Cursor Ring */}
            <motion.div
                className="absolute w-8 h-8 border-2 border-cyborg-primary rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </motion.div>

            {/* Trailing Crosshair */}
            <motion.div
                className="absolute w-12 h-12 border border-cyborg-secondary/30 rounded-full"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: -8,
                    translateY: -8,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
            />
        </div>
    );
}
