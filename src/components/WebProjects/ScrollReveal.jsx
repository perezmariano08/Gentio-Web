import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const defaultTransition = {
  duration: 0.55,
  ease: [0.25, 0.1, 0.25, 1],
};

/**
 * Animación al entrar en viewport (scroll). Reutilizable en cualquier página.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 32,
  once = true,
  margin = "-12% 0px",
  as: Component = motion.div,
  ...rest
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ ...defaultTransition, delay }}
      {...rest}
    >
      {children}
    </Component>
  );
}
