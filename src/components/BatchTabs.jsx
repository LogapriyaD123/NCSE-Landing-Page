import { motion } from 'framer-motion';
import clsx from 'clsx';

const BatchTabs = ({ batches, activeBatch, setActiveBatch }) => {
    return (
        <div
            role="tablist"
            aria-label="Select batch"
            className="flex overflow-x-auto pb-3 mb-8 snap-x justify-start md:justify-center gap-6 no-scrollbar border-b border-border/60"
        >
            {batches.map((batch) => {
                const isActive = activeBatch === batch;
                return (
                    <button
                        key={batch}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveBatch(batch)}
                        className={clsx(
                            'relative px-1 py-3 text-sm font-mono tracking-wide whitespace-nowrap snap-center transition-colors border-0 bg-transparent cursor-pointer',
                            isActive ? 'text-accent' : 'text-foreground-muted hover:text-accent'
                        )}
                    >
                        <span className="relative z-10">{batch}</span>
                        {isActive && (
                            <motion.span
                                layoutId="activeTabIndicator"
                                className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent"
                                initial={false}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default BatchTabs;
