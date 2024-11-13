export const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export const itemAnimation = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
};

export const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}