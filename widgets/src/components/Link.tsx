import React from 'react';

interface Props {
    className, href, children;
}

const Link = ({ className, href, children }: Props) => {

    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={e => onClick(e)} className={className} href={href}>{children}</a>
    );
};

export default Link;
