import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import topicData, { MODULES } from '../data/topicData';
import CyborgCursor from '../components/CyborgCursor';
import { Menu, X, Share2, Home, BookOpen, CheckCircle, Circle } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function MainLayout() {
    const { TOPICS, topicsStatus, userName, setUserName } = useApp();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex h-screen bg-cyborg-bg text-cyborg-text overflow-hidden font-sans selection:bg-cyborg-primary selection:text-black cursor-none">
            <CyborgCursor />

            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-72 bg-cyborg-card border-r border-cyborg-border transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Sidebar Header */}
                <div className="p-6 border-b border-cyborg-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyborg-primary to-cyborg-secondary flex items-center justify-center text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                            AI
                        </div>
                        <div>
                            <h1 className="font-bold text-lg tracking-tight text-white">AI Mentor</h1>
                            <p className="text-xs text-cyborg-primary font-mono">Cyborg Hub</p>
                        </div>
                    </div>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-cyborg-muted hover:text-white">
                        <X size={20} />
                    </button>
                </div>

                {/* User Profile */}
                <div className="p-4 border-b border-cyborg-border bg-white/5">
                    <label className="text-xs text-cyborg-muted uppercase tracking-wider font-semibold mb-2 block">Learner Profile</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full bg-black/30 border border-cyborg-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-cyborg-primary focus:ring-1 focus:ring-cyborg-primary transition-all"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-cyborg-border scrollbar-track-transparent">
                    {Object.entries(MODULES).map(([level, module]) => {
                        const moduleTopics = TOPICS.filter(t => topicData[t]?.level === parseInt(level));
                        if (moduleTopics.length === 0) return null;

                        return (
                            <div key={level}>
                                <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r ${module.color} bg-clip-text text-transparent px-3`}>
                                    {module.name}
                                </h3>
                                <div className="space-y-1">
                                    {moduleTopics.map((topic) => {
                                        const status = topicsStatus[topic];
                                        const isCompleted = status === 'completed';
                                        const isInProgress = status === 'in-progress';
                                        const slug = `/topic/${encodeURIComponent(topic)}`;

                                        return (
                                            <NavLink
                                                key={topic}
                                                to={slug}
                                                onClick={() => setIsSidebarOpen(false)}
                                                className={({ isActive }) => cn(
                                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 group relative overflow-hidden",
                                                    isActive
                                                        ? "bg-cyborg-primary/10 text-cyborg-primary border border-cyborg-primary/20"
                                                        : "text-cyborg-muted hover:text-white hover:bg-white/5"
                                                )}
                                            >
                                                <span className="flex-1 truncate">{topicData[topic].title}</span>
                                                {isCompleted && <CheckCircle size={14} className="text-green-400" />}
                                                {isInProgress && <Circle size={14} className="text-yellow-400 fill-yellow-400/20" />}
                                            </NavLink>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                {/* Progress Bar */}
                <div className="p-4 border-t border-cyborg-border bg-black/20">
                    <div className="flex justify-between text-xs mb-2">
                        <span className="text-cyborg-muted">Overall Progress</span>
                        <span className="text-cyborg-primary font-mono">
                            {Math.round((Object.values(topicsStatus).filter(s => s === 'completed').length / TOPICS.length) * 100)}%
                        </span>
                    </div>
                    <div className="h-1.5 bg-cyborg-border rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-cyborg-primary to-cyborg-secondary transition-all duration-500"
                            style={{ width: `${(Object.values(topicsStatus).filter(s => s === 'completed').length / TOPICS.length) * 100}%` }}
                        />
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyborg-secondary/5 via-cyborg-bg to-cyborg-bg">
                {/* Top Header */}
                <header className="h-16 border-b border-cyborg-border flex items-center justify-between px-6 bg-cyborg-bg/80 backdrop-blur-md sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button onClick={toggleSidebar} className="md:hidden text-cyborg-muted hover:text-white">
                            <Menu size={24} />
                        </button>
                        <div className="hidden md:flex items-center gap-2 text-sm text-cyborg-muted">
                            <Home size={16} />
                            <span>/</span>
                            <span className="text-white truncate max-w-[200px]">
                                {location.pathname === '/' ? 'Home' : decodeURIComponent(location.pathname.split('/').pop())}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigator.clipboard.writeText(window.location.href)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyborg-card border border-cyborg-border text-xs hover:border-cyborg-primary/50 transition-colors text-cyborg-muted hover:text-white"
                        >
                            <Share2 size={14} />
                            <span className="hidden sm:inline">Share</span>
                        </button>
                    </div>
                </header>

                {/* Content Scroll Area */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}
