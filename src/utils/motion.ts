import { Variants } from "framer-motion";

export function slideInFromLeft(delay: number): Variants {
    return {
        hidden: { 
            x: -100, 
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 100
            } 
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                delay: 0.2,
            }
        },
    };
}

export function slideInFromRight(delay: number) {
    return {
        hidden: { 
            x: 100, 
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 100
            }
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 100
            },
        },
    };
}

export function slideInFromTop(delay: number = 0.5) {
    return {
        hidden: { 
            y: -100, 
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 100
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                delay: delay,
                duration: 0.5
            }
        },
    }
};

export function slideInFromBottom(delay: number = 0.5) {
    return {
        hidden: { 
            y: 100, 
            opacity: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 100
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 300,
                delay: delay,
                duration: 0.5
            }
        },
    }
};