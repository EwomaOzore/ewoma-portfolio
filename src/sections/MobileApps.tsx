import { useTheme } from 'next-themes';
import { mobileApps } from '../constants/index';

const MobileApps = () => {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    const renderStoreIcon = (label: string) => {
        const src = label === 'App Store' ? '/assets/appstore.svg' : '/assets/googleplay.svg';
        return <img src={src} alt={`${label} icon`} className="w-4 h-4" />;
    };

    return (
        <section className="px-4 sm:px-20" id="mobile-apps">
            <p className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400 mt-10">
                Mobile Apps
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                {mobileApps.map((app) => (
                    <div
                        key={app.name}
                        className={`rounded-lg border border-gray-300 ${isDark ? 'bg-[#1E201E]' : 'bg-white'} p-6 flex flex-col gap-6`}
                    >
                        <div
                            className={`w-full aspect-[16/9] rounded-md overflow-hidden border ${isDark ? 'border-white border-opacity-10 bg-black' : 'border-gray-200 bg-gray-100'}`}
                        >
                            {app.image ? (
                                <img src={app.image} alt={`${app.name} preview`} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
                                    App preview
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col flex-1 justify-between gap-6">
                            <div className="flex flex-col gap-2">
                                <p className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                                    {app.name}
                                </p>
                                <p className={`text-sm leading-relaxed whitespace-pre-line ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {app.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {app.stores.map((store) => (
                                    <a
                                        key={store.label}
                                        href={store.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`px-4 py-2 rounded-md border transition-colors duration-300 ${isDark ? 'border-white border-opacity-30 text-gray-200 hover:bg-black' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {renderStoreIcon(store.label)}
                                            <span>{store.label}</span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MobileApps;
