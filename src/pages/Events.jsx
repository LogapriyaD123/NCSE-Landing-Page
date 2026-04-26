import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import clsx from 'clsx';
import { events } from '../data';
import BatchTabs from '../components/BatchTabs';

const Events = () => {
    const batches = events.map(e => e.batch);
    const currentBatch = events.find(e => e.isCurrent)?.batch || batches[0];
    const [activeBatch, setActiveBatch] = useState(currentBatch);

    const activeEvents = events.find(e => e.batch === activeBatch)?.events || [];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0.96, transition: { duration: 0.3 } }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-background grid-bg">
            <div className="container relative z-10">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-end md:justify-between gap-5"
                    >
                        <div>
                            <div className="flex items-center gap-5 mb-4">
                                <span className="amber-line" />
                                <h1 className="mb-0">Our Events</h1>
                            </div>
                            <p className="max-w-2xl">
                                Explore the hackathons, workshops, summits, and ceremonies that define the NCSE workshop floor.
                            </p>
                        </div>
                        <span className="font-mono text-accent text-sm tracking-widest border border-accent/40 px-3 py-1 rounded-sm w-fit">
                            EVENT ARCHIVE
                        </span>
                    </motion.div>
                </div>

                <BatchTabs batches={batches} activeBatch={activeBatch} setActiveBatch={setActiveBatch} />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeBatch}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
                    >
                        {activeEvents.map((evt) => (
                            <motion.article
                                key={evt.id}
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                                className="glass rounded overflow-hidden flex flex-col h-full bg-surface/70"
                            >
                                <div className="h-52 md:h-56 relative w-full border-b border-border bg-surface overflow-hidden">
                                    {evt.images.length > 0 ? (
                                        <img src={evt.images[0]} alt={evt.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Calendar className="text-accent" size={40} />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                                    <span className="absolute top-4 left-4 font-mono text-xs bg-accent text-background px-3 py-1 rounded">
                                        {evt.date}
                                    </span>
                                    <span className="absolute top-4 right-4 font-mono text-xs text-accent bg-background/80 border border-border px-3 py-1 rounded">
                                        {evt.category}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-foreground mb-3">{evt.title}</h3>
                                    <p className="text-foreground-muted text-sm leading-relaxed mb-5 flex-grow">
                                        {evt.description}
                                    </p>
                                    <div className="pt-5 border-t border-border/70 flex items-center justify-between gap-4">
                                        <button className="font-mono text-accent hover:text-accent-hover text-sm font-semibold transition-colors text-left flex items-center gap-1 group">
                                            Read More
                                            <span className="group-hover:translate-x-1 transition-transform inline-block">-&gt;</span>
                                        </button>
                                        <span
                                            className={clsx(
                                                'font-mono text-xs px-2.5 py-1 rounded border',
                                                evt.status === 'Upcoming'
                                                    ? 'text-accent border-accent/70'
                                                    : 'text-foreground-muted border-border-light/70'
                                            )}
                                        >
                                            {evt.status}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {activeEvents.length === 0 && (
                    <div className="py-20 text-center">
                        <Calendar className="text-accent mx-auto mb-4" size={48} />
                        <p className="text-foreground-muted mb-6">No events found for this batch yet.</p>
                        <Link to="/contact" className="btn btn-secondary">Suggest an Event</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
