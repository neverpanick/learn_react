import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <h1 className="text-9xl font-bold text-cyborg-primary/20">404</h1>
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
                <p className="text-cyborg-muted">The topic you are looking for does not exist in this dimension.</p>
            </div>
            <Link
                to="/"
                className="px-6 py-3 rounded-xl bg-cyborg-primary text-black font-bold hover:bg-cyborg-primary/90 transition-all flex items-center gap-2"
            >
                <Home size={18} /> Return Home
            </Link>
        </div>
    );
}
