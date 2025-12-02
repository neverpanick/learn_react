import { createContext, useContext, useState, useEffect } from 'react';
import topicData from '../data/topicData';

const AppContext = createContext();

export const TOPICS = Object.keys(topicData);

export function AppProvider({ children }) {
    const [userName, setUserName] = useState('Surya');

    const defaultStatus = Object.fromEntries(TOPICS.map(t => [t, 'not-started']));
    const defaultNotes = Object.fromEntries(TOPICS.map(t => [t, '']));

    const [topicsStatus, setTopicsStatus] = useState(() => {
        try {
            const raw = window.localStorage.getItem(`learn_progress_${userName}`);
            return raw ? JSON.parse(raw) : defaultStatus;
        } catch { return defaultStatus; }
    });

    const [notesByTopic, setNotesByTopic] = useState(() => {
        try {
            const raw = window.localStorage.getItem(`learn_notes_${userName}`);
            return raw ? JSON.parse(raw) : defaultNotes;
        } catch { return defaultNotes; }
    });

    // Persist progress
    useEffect(() => {
        try {
            window.localStorage.setItem(`learn_progress_${userName}`, JSON.stringify(topicsStatus));
        } catch (e) { console.error(e); }
    }, [topicsStatus, userName]);

    // Persist notes
    useEffect(() => {
        try {
            window.localStorage.setItem(`learn_notes_${userName}`, JSON.stringify(notesByTopic));
        } catch (e) { console.error(e); }
    }, [notesByTopic, userName]);

    // Load data when user changes
    useEffect(() => {
        try {
            const progress = window.localStorage.getItem(`learn_progress_${userName}`);
            if (progress) setTopicsStatus(JSON.parse(progress));
            else setTopicsStatus(defaultStatus);

            const notes = window.localStorage.getItem(`learn_notes_${userName}`);
            if (notes) setNotesByTopic(JSON.parse(notes));
            else setNotesByTopic(defaultNotes);
        } catch (e) { console.error(e); }
    }, [userName]);

    const updateTopicStatus = (topic, status) => {
        setTopicsStatus(prev => ({ ...prev, [topic]: status }));
    };

    const updateNote = (topic, note) => {
        setNotesByTopic(prev => ({ ...prev, [topic]: note }));
    };

    const value = {
        userName,
        setUserName,
        topicsStatus,
        updateTopicStatus,
        notesByTopic,
        updateNote,
        TOPICS,
        topicData
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}
