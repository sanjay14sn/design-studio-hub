import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AnimationProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}

export const FadeIn = ({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
    ...props
}: AnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const SlideUp = ({
    children,
    delay = 0,
    duration = 0.5,
    className = "",
    ...props
}: AnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const ScaleIn = ({
    children,
    delay = 0,
    duration = 0.4,
    className = "",
    ...props
}: AnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({
    children,
    className = "",
    delay = 0,
    staggerDelay = 0.1,
    ...props
}: { children: ReactNode; className?: string; delay?: number; staggerDelay?: number } & HTMLMotionProps<"div">) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({ children, className = "", ...props }: AnimationProps) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};
