import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Loader } from 'lucide-react';
import { useApp } from '../context/AppContext';
import avatar from '../assets/cyborg_avatar.png';

export default function CyborgCertificate() {
    const { userName, topicsStatus, TOPICS } = useApp();
    const certificateRef = useRef(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const completedCount = Object.values(topicsStatus).filter(s => s === 'completed').length;
    const progress = Math.round((completedCount / TOPICS.length) * 100);

    const generatePDF = async () => {
        setIsGenerating(true);
        try {
            const element = certificateRef.current;
            const canvas = await html2canvas(element, {
                scale: 2,
                backgroundColor: '#000000',
                logging: false,
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'px',
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`${userName}_Cyborg_Report.pdf`);
        } catch (error) {
            console.error('PDF Generation failed', error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div>
            <button
                onClick={generatePDF}
                disabled={isGenerating}
                className="flex items-center gap-2 px-6 py-3 bg-cyborg-primary/20 border border-cyborg-primary text-cyborg-primary rounded-lg hover:bg-cyborg-primary/30 transition-all font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]"
            >
                {isGenerating ? <Loader className="animate-spin" /> : <Download />}
                <span>Download Neural Report</span>
            </button>

            {/* Hidden Certificate Template */}
            <div className="absolute left-[-9999px] top-[-9999px]">
                <div
                    ref={certificateRef}
                    className="w-[1200px] h-[800px] bg-black text-white p-16 relative overflow-hidden border-[20px] border-cyborg-primary"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
                        <div className="w-32 h-32 mb-8 rounded-full border-4 border-cyborg-primary shadow-[0_0_50px_rgba(0,240,255,0.5)] bg-black overflow-hidden">
                            <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                        </div>

                        <h1 className="text-6xl font-black uppercase tracking-widest mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyborg-primary to-purple-500 filter drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                            Neural Link Report
                        </h1>

                        <h2 className="text-3xl text-cyborg-muted mb-12">React Learning Hub // Cyborg Division</h2>

                        <div className="bg-white/5 border border-cyborg-border p-8 rounded-2xl w-full max-w-3xl backdrop-blur-md">
                            <div className="flex justify-between items-end border-b border-white/10 pb-6 mb-6">
                                <div className="text-left">
                                    <p className="text-cyborg-muted text-sm uppercase tracking-wider">Operative</p>
                                    <p className="text-4xl font-bold text-white">{userName}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-cyborg-muted text-sm uppercase tracking-wider">Synchronization</p>
                                    <p className="text-4xl font-mono text-cyborg-primary">{progress}%</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-left">
                                <div>
                                    <p className="text-cyborg-muted text-xs uppercase">Modules Unlocked</p>
                                    <p className="text-xl font-bold">{completedCount} / {TOPICS.length}</p>
                                </div>
                                <div>
                                    <p className="text-cyborg-muted text-xs uppercase">Status</p>
                                    <p className="text-xl font-bold text-green-400">ACTIVE</p>
                                </div>
                                <div>
                                    <p className="text-cyborg-muted text-xs uppercase">Date</p>
                                    <p className="text-xl font-bold">{new Date().toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 text-cyborg-muted text-sm font-mono">
                            ID: {Math.random().toString(36).substr(2, 9).toUpperCase()} // AUTHENTICATED BY ABOIN SYSTEMS
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
