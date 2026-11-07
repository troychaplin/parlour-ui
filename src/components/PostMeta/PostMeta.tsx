import React from 'react';
import './styles.scss';

export interface PostMetaProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    details?: string;
    avatar?: string;
    avatarAlt?: string;
    published?: string;
    updated?: string;
    divider?: boolean;
}

// Dates arrive as ISO strings ("2026-04-21") and format in UTC, so the server and the browser
// always render the same text
const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC',
    });

export const PostMeta = ({
    name,
    details,
    avatar,
    avatarAlt = '',
    published,
    updated,
    divider = true,
    className,
    ...rest
}: PostMetaProps) => {
    const rootClasses = ['parlour-post-meta', divider && 'parlour-post-meta--divider', className]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={rootClasses} {...rest}>
            <div className="parlour-post-meta__author">
                {avatar && (
                    <img
                        className="parlour-post-meta__avatar"
                        src={avatar}
                        alt={avatarAlt}
                        width={44}
                        height={44}
                    />
                )}
                <div>
                    <p className="parlour-post-meta__name">{name}</p>
                    {details && <p className="parlour-post-meta__details">{details}</p>}
                </div>
            </div>

            {(published || updated) && (
                <div className="parlour-post-meta__dates">
                    {published && (
                        <p>
                            Published <time dateTime={published}>{formatDate(published)}</time>
                        </p>
                    )}
                    {updated && (
                        <p>
                            Updated <time dateTime={updated}>{formatDate(updated)}</time>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};
