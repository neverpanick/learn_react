import { level0 } from './level0_origin';
import { level1 } from './level1_initiate';
import { level2 } from './level2_synapse';
import { level3 } from './level3_structure';
import { level4 } from './level4_nexus';
import { level5 } from './level5_input';
import { level6 } from './level6_core';
import { level7 } from './level7_grid';
import { level8 } from './level8_ascendancy';
import { level9 } from './level9_aesthetics';
import { level10 } from './level10_integration';
import { level11 } from './level11_deployment';
import { level12 } from './level12_mastery';

export const topicData = {
    ...level0,
    ...level1,
    ...level2,
    ...level3,
    ...level4,
    ...level5,
    ...level6,
    ...level7,
    ...level8,
    ...level9,
    ...level10,
    ...level11,
    ...level12,
};

export const MODULES = {
    0: { name: 'Origin', description: 'Prerequisites. The foundation.', color: 'from-gray-500 to-slate-400' },
    1: { name: 'Initiate', description: 'React Basics. The spark.', color: 'from-blue-500 to-cyan-400' },
    2: { name: 'Synapse', description: 'Hooks & State. The connection.', color: 'from-green-500 to-emerald-400' },
    3: { name: 'Structure', description: 'Architecture. The skeleton.', color: 'from-teal-500 to-green-400' },
    4: { name: 'Nexus', description: 'Routing. The network.', color: 'from-orange-500 to-red-400' },
    5: { name: 'Input', description: 'Forms. The interaction.', color: 'from-pink-500 to-rose-400' },
    6: { name: 'Core', description: 'State Management. The brain.', color: 'from-purple-500 to-violet-400' },
    7: { name: 'Grid', description: 'Data Fetching. The feed.', color: 'from-indigo-500 to-blue-400' },
    8: { name: 'Ascendancy', description: 'Advanced Patterns. The upgrade.', color: 'from-yellow-500 to-amber-400' },
    9: { name: 'Aesthetics', description: 'UI/UX. The skin.', color: 'from-fuchsia-500 to-pink-400' },
    10: { name: 'Integration', description: 'Backend. The soul.', color: 'from-red-500 to-orange-400' },
    11: { name: 'Deployment', description: 'Production. The launch.', color: 'from-lime-500 to-green-400' },
    12: { name: 'Mastery', description: 'Real World. The legend.', color: 'from-cyan-500 to-blue-400' },
};
