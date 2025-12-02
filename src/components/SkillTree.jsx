import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, CheckCircle, Circle, ChevronRight } from 'lucide-react';
import { MODULES } from '../data/topicData';
import { clsx } from 'clsx';

export default function SkillTree({ topics, status }) {
    const navigate = useNavigate();

    // Group topics by level/module
    const modules = Object.entries(MODULES).map(([level, info]) => {
        const moduleTopics = Object.entries(topics).filter(([key, data]) => data.level === parseInt(level));
        return { ...info, level: parseInt(level), topics: moduleTopics };
    });

    return (
        <div className="space-y-8 relative pb-20">
            {/* Connecting Line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyborg-primary/50 via-cyborg-secondary/50 to-transparent -z-10" />

            {modules.map((module, moduleIndex) => (
                <motion.div
                    key={module.level}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: moduleIndex * 0.1 }}
                    className="relative pl-16"
                >
                    {/* Module Marker */}
                    <div className={`absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] border-2 border-black z-10`}>
                        <span className="text-lg font-bold text-black">{module.level}</span>
                    </div>

                    <div className="bg-cyborg-card/80 backdrop-blur-md border border-cyborg-border rounded-xl p-5 hover:border-cyborg-primary/30 transition-all group/card">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${module.color}`}>
                                    {module.name}
                                </h2>
                                <p className="text-sm text-cyborg-muted">{module.description}</p>
                            </div>
                            <div className="text-xs font-mono text-cyborg-muted opacity-50 group-hover/card:opacity-100 transition-opacity">
                                {module.topics.length} NODES
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                            {module.topics.map(([key, data]) => {
                                const topicStatus = status[key] || 'not-started';
                                const isLocked = data.prereqs?.some(p => status[p] !== 'completed');

                                return (
                                    <button
                                        key={key}
                                        onClick={() => !isLocked && navigate(`/topic/${encodeURIComponent(key)}`)}
                                        disabled={isLocked}
                                        className={clsx(
                                            "flex items-center gap-3 p-3 rounded-lg border text-left transition-all relative overflow-hidden group",
                                            isLocked
                                                ? "bg-black/40 border-cyborg-border/30 opacity-50 cursor-not-allowed"
                                                : "bg-black/40 border-cyborg-border hover:border-cyborg-primary/50 hover:bg-white/5 cursor-pointer"
                                        )}
                                    >
                                        <div className="shrink-0">
                                            {isLocked ? <Lock size={14} className="text-cyborg-muted" /> :
                                                topicStatus === 'completed' ? <CheckCircle size={14} className="text-green-400" /> :
                                                    <Circle size={14} className="text-cyborg-primary" />}
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className={clsx("text-sm font-medium truncate", isLocked ? "text-cyborg-muted" : "text-white group-hover:text-cyborg-primary")}>
                                                {data.title}
                                            </h3>
                                        </div>

                                        {!isLocked && (
                                            <ChevronRight size={14} className="ml-auto text-cyborg-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
