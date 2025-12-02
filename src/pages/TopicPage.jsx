import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import DemoMapper from '../components/DemoMapper';
import TopicDetail from '../components/TopicDetail';
import Intro from '../components/Intro';
import NotesPanel from '../components/NotesPanel';
import HelpModal from '../components/HelpModal';
import ProgressControls from '../components/ProgressControls';
import { HelpCircle, BookOpen } from 'lucide-react';

export default function TopicPage() {
    const { topic } = useParams();
    const decodedTopic = decodeURIComponent(topic || 'Intro');
    const { userName, topicsStatus, updateTopicStatus, notesByTopic, updateNote, TOPICS, topicData } = useApp();
    const [showNotes, setShowNotes] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const navigate = useNavigate();

    // Redirect if topic is invalid
    useEffect(() => {
        if (!TOPICS.includes(decodedTopic) && decodedTopic !== 'Intro') {
            navigate('/');
        }
    }, [decodedTopic, TOPICS, navigate]);

    const DemoComponent = DemoMapper({ topic: decodedTopic });
    const hasData = topicData[decodedTopic];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-cyborg-border pb-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-xs font-bold bg-cyborg-primary/10 text-cyborg-primary border border-cyborg-primary/20">
                            Level {topicData[decodedTopic]?.level || 1}
                        </span>
                        <span className="text-xs text-cyborg-muted uppercase tracking-wider">
                            {topicData[decodedTopic]?.module || 'Initiate'} Module
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {topicData[decodedTopic]?.title || decodedTopic}
                    </h1>
                    <p className="text-sm text-cyborg-muted flex items-center gap-2">
                        {topicData[decodedTopic]?.description || 'Interactive Learning Module'}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setShowNotes(!showNotes)}
                        className={`p-2 rounded-lg border transition-all ${showNotes ? 'bg-cyborg-primary/20 border-cyborg-primary text-cyborg-primary' : 'bg-cyborg-card border-cyborg-border text-cyborg-muted hover:text-white'}`}
                        title="Toggle Notes"
                    >
                        <BookOpen size={20} />
                    </button>
                    <button
                        onClick={() => setShowHelp(true)}
                        className="p-2 rounded-lg bg-cyborg-card border border-cyborg-border text-cyborg-muted hover:text-white hover:border-cyborg-primary/50 transition-all"
                        title="Help"
                    >
                        <HelpCircle size={20} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className={`space-y-6 ${showNotes ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                    {/* Main Content Area */}
                    <div className="bg-cyborg-card border border-cyborg-border rounded-xl p-6 shadow-lg">
                        {DemoComponent ? (
                            DemoComponent
                        ) : hasData ? (
                            <TopicDetail topicKey={decodedTopic} index={TOPICS.indexOf(decodedTopic) + 1} />
                        ) : (
                            <Intro userName={userName} />
                        )}
                    </div>

                    {/* Progress Controls */}
                    <div className="bg-cyborg-card border border-cyborg-border rounded-xl p-6">
                        <ProgressControls
                            userName={userName}
                            topic={decodedTopic}
                            status={topicsStatus[decodedTopic]}
                            setStatus={(s) => updateTopicStatus(decodedTopic, s)}
                            allStatus={topicsStatus}
                            setAllStatus={(newStatus) => {
                                console.warn("Bulk update not fully implemented in new context yet");
                            }}
                            allNotes={notesByTopic}
                            allContents={topicData}
                        />
                    </div>
                </div>

                {/* Notes Panel (Side) */}
                {showNotes && (
                    <div className="lg:col-span-1 animate-in slide-in-from-right duration-300">
                        <div className="sticky top-24">
                            <NotesPanel
                                topic={decodedTopic}
                                notes={notesByTopic[decodedTopic]}
                                setNotes={(val) => updateNote(decodedTopic, val)}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Help Modal */}
            {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
        </div>
    );
}
