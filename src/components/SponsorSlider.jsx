import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import StarBorder from './StarBorder';

const imgs = [
  "/imgs/nature/1.jpg",
  "/imgs/nature/2.jpg",
  "/imgs/nature/3.jpg",
  "/imgs/nature/4.jpg",
  "/imgs/nature/5.jpg",
  "/imgs/nature/6.jpg",
  "/imgs/nature/7.jpg",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SponsorSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      if (dragX.get() === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-neutral-950 py-4">
      <StarBorder
  as="button"
  className="custom-class"
  color="cyan"
  speed="5s"
></StarBorder>

        <div className = "mx-auto w-3/4">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      </div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => (
        <motion.div
          key={idx}
          className="h-[200px] w-full shrink-0 rounded-xl bg-neutral-800 flex items-center justify-center p-4"
          animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
          transition={SPRING_OPTIONS}
        >
          <img
            src={imgSrc}
            alt={`Slide ${idx}`}
            className="h-full object-cover rounded-lg"
          />
        </motion.div>
      ))}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === imgIndex ? "bg-white" : "bg-gray-500"
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-transparent" />
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-transparent" />
    </>
  );
};

export default SponsorSlider;