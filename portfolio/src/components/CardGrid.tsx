"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import styles from "./CardGrid.module.css";

const PROJECTS = [
    {
        id: 1,
        title: "teste 1",
        description: "teste 1",
        tech: ["teste 1", "teste 1", "teste 1"],
        color: "#10b981", // Emerald
    },
    {
        id: 2,
        title: "teste 2",
        description: "teste 2",
        tech: ["teste 2", "teste 2", "teste 2"],
        color: "#6366f1", // Indigo
    },
    {
        id: 3,
        title: "teste 3",
        description: "teste 3",
        tech: ["teste 3", "teste 3", "teste 3"],
        color: "#f43f5e", // Rose
    },
    {
        id: 4,
        title: "teste 4",
        description: "teste 4",
        tech: ["teste 4", "teste 4", "teste 4"],
        color: "#f59e0b", // Amber
    },
];

export default function CardGrid() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
    };

    const getProject = (index: number) => {
        return PROJECTS[(index + PROJECTS.length) % PROJECTS.length];
    };

    return (
        <div className={styles.container}>
            <motion.div className={styles.carousel}>
                <div className={styles.cardsWrapper}>
                    <AnimatePresence mode="popLayout">
                        {[-1, 0, 1].map((offset) => {
                            const project = getProject(activeIndex + offset);
                            const isActive = offset === 0;

                            return (
                                <motion.div
                                    key={`${project.id}-${offset}`}
                                    className={`${styles.card} ${isActive ? styles.active : ""}`}
                                    initial={false}
                                    animate={{
                                        x: `${offset * 110}%`,
                                        scale: isActive ? 1.1 : 0.9,
                                        opacity: isActive ? 1 : 0.4,
                                        rotateY: isActive ? -12 : 5, // Stronger tilt for center, opposite for sides
                                        rotateX: isActive ? 5 : 0, // Slight vertical tilt
                                        zIndex: isActive ? 10 : 1,
                                        filter: isActive ? "blur(0px)" : "blur(2px)"
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                    style={{
                                        borderColor: isActive ? project.color : "var(--card-border)",
                                        boxShadow: isActive ? `0 20px 50px -10px ${project.color}33` : "none"
                                    }}
                                >
                                    <div className={styles.cardContent}>
                                        <div
                                            className={styles.cardGlow}
                                            style={{ background: project.color }}
                                        />
                                        <h3 className={styles.title}>{project.title}</h3>
                                        <p className={styles.description}>{project.description}</p>
                                        <div className={styles.techStack}>
                                            {project.tech.map((t) => (
                                                <span key={t} className={styles.tag}>{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                <div className={styles.controls}>
                    <button onClick={prevProject} className={styles.navButton}>
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.indicators}>
                        {PROJECTS.map((_, idx) => (
                            <div
                                key={idx}
                                className={`${styles.dot} ${idx === activeIndex ? styles.activeDot : ""}`}
                            />
                        ))}
                    </div>

                    <button onClick={nextProject} className={styles.navButton}>
                        <ChevronRight size={24} />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
