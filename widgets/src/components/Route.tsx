import React, { useEffect, useState } from 'react';

interface Props {
    path: string,
    children;
}

const Route = ({ path, children }: Props) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
    }, []);

    return currentPath === path ? children : null;
};

export default Route;
