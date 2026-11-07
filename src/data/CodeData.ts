export const CodeDataPhp = `private function init_allowed_blocks(): void {
    add_filter(
        'allowed_block_types_all',
        [ $this, 'filter_allowed_blocks' ],
        10,
        2
    );
}`;

export const CodeDataReact = `export const Main = ({ children, hasPadding = true, className, ...rest }: MainProps) => {
    const rootClasses = ['parlour-main', hasPadding && 'parlour-main--padding', className]
        .filter(Boolean)
        .join(' ');

    return (
        <main className={rootClasses} {...rest}>
            <div className="alignfull has-global-padding is-layout-constrained entry-content">
                {children}
            </div>
        </main>
    );
};`;

export const CodeDataThemeJson = `{
    "$schema": "https://schemas.wp.org/trunk/theme.json",
    "version": 3,
    "settings": {
        "color": { "palette": [{ "slug": "accent", "color": "#a34f3e", "name": "Accent" }] },
        "typography": { "fluid": true }
    },
    "styles": {
        "blocks": {
            "core/button": { "border": { "radius": "4px" } }
        }
    }
}`;
