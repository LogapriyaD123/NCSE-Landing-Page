import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const normalizeImage = (image, index) => {
    if (typeof image === 'string') {
        return { src: image, caption: `NCSE archive frame ${index + 1}` };
    }
    return image;
};

const CarouselSection = ({ title, subtitle, label, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const normalizedImages = images.map(normalizeImage);
    const currentImage = normalizedImages[currentIndex];

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % normalizedImages.length);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + normalizedImages.length) % normalizedImages.length);
    };

    if (!normalizedImages.length) return null;

    return (
        <section>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45 }}
                    className="mb-12"
                >
                    {label && <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">{label}</p>}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <span className="amber-line mb-5" />
                            <h2 className="mb-3">{title}</h2>
                            {subtitle && <p className="max-w-2xl">{subtitle}</p>}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded border border-border bg-surface shadow-2xl">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImage.src}
                                src={currentImage.src}
                                alt={currentImage.caption}
                                initial={{ opacity: 0, scale: 1.03 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.45 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                            <p className="font-mono text-accent text-sm md:text-base">{currentImage.caption}</p>
                        </div>
                    </div>

                    <button
                        type="button"
                        aria-label="Previous carousel image"
                        onClick={prev}
                        className="absolute top-1/2 -translate-y-1/2 left-3 md:left-[-24px] w-11 h-11 rounded border border-accent/70 bg-background/80 text-accent flex items-center justify-center cursor-pointer transition-all hover:bg-accent hover:text-background accent-glow z-10"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        type="button"
                        aria-label="Next carousel image"
                        onClick={next}
                        className="absolute top-1/2 -translate-y-1/2 right-3 md:right-[-24px] w-11 h-11 rounded border border-accent/70 bg-background/80 text-accent flex items-center justify-center cursor-pointer transition-all hover:bg-accent hover:text-background accent-glow z-10"
                    >
                        <ChevronRight size={22} />
                    </button>

                    <div className="flex justify-center gap-2 mt-6">
                        {normalizedImages.map((image, index) => (
                            <button
                                key={image.src}
                                type="button"
                                aria-label={`Show carousel image ${index + 1}`}
                                onClick={() => setCurrentIndex(index)}
                                className={clsx(
                                    'h-2.5 rounded-sm border border-accent/50 cursor-pointer transition-all',
                                    currentIndex === index ? 'w-8 bg-accent' : 'w-2.5 bg-transparent hover:bg-accent/40'
                                )}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CarouselSection;
