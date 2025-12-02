import { useApp } from '../context/AppContext';
import SkillTree from '../components/SkillTree';
import CyborgCertificate from '../components/CyborgCertificate';
import topicData from '../data/topicData';
import avatar from '../assets/cyborg_avatar.png';
import bg from '../assets/neural_bg.png';
import { motion } from 'framer-motion';

export default function Home() {
    const { userName, topicsStatus } = useApp();

    return (
        <div className="min-h-screen pb-20">
            {/* Background */}
            <div
                className="fixed inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />

            {/* Hero Header */}
            <div className="relative z-10 flex flex-col items-center text-center mb-12 pt-8">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 12 }}
                    className="w-32 h-32 rounded-full border-4 border-cyborg-primary shadow-[0_0_30px_rgba(0,240,255,0.4)] overflow-hidden mb-6 bg-black"
                >
                    <img src={avatar} alt="AI Avatar" className="w-full h-full object-cover" />
                </motion.div>

                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl font-bold text-white mb-2 tracking-tight"
                >
                    Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyborg-primary to-cyborg-secondary">{userName}</span>
                </motion.h1>

                <p className="text-cyborg-muted max-w-lg mx-auto text-lg mb-8">
                    Your neural link is active. Begin your assimilation of the React ecosystem.
                </p>

                <CyborgCertificate />
            </div>

            {/* Skill Tree */}
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <SkillTree topics={topicData} status={topicsStatus} />
            </div>
        </div>
    );
}
