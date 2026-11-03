import { useId, useRef, useState, type ComponentProps, type KeyboardEvent } from 'react';
import { Controls } from '@storybook/addon-docs/blocks';
import './control-tabs.css';

// A docs block that splits one story's controls into tabs, one per part of a compound component.
// Every tab renders Storybook's own Controls block filtered by `include`, and they all share the
// story's args, so a change in any tab updates the story. `include` matches each arg's display
// `name` (its argTypes `name`, or its key when there's none), so keep those unique in the story.

export interface ControlTab {
    label: string;
    include: string[];
}

export interface ControlTabsProps {
    of: ComponentProps<typeof Controls>['of'];
    tabs: ControlTab[];
}

export const ControlTabs = ({ of, tabs }: ControlTabsProps) => {
    const [selected, setSelected] = useState(0);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const id = useId();

    const focusTab = (index: number) => {
        const next = (index + tabs.length) % tabs.length;
        setSelected(next);
        tabRefs.current[next]?.focus();
    };

    const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        const moves: Record<string, number> = {
            ArrowRight: selected + 1,
            ArrowLeft: selected - 1,
            Home: 0,
            End: tabs.length - 1,
        };
        if (!(event.key in moves)) return;
        event.preventDefault();
        focusTab(moves[event.key]);
    };

    return (
        <div className="control-tabs">
            <div className="control-tabs__list" role="tablist" aria-label="Controls by component">
                {tabs.map((tab, index) => (
                    <button
                        key={tab.label}
                        ref={(el) => {
                            tabRefs.current[index] = el;
                        }}
                        type="button"
                        role="tab"
                        id={`${id}-tab-${index}`}
                        aria-controls={`${id}-panel-${index}`}
                        aria-selected={index === selected}
                        tabIndex={index === selected ? 0 : -1}
                        className="control-tabs__tab"
                        onClick={() => setSelected(index)}
                        onKeyDown={onKeyDown}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            {/* Panels stay mounted while hidden, so each table keeps its state between tabs */}
            {tabs.map((tab, index) => (
                <div
                    key={tab.label}
                    role="tabpanel"
                    id={`${id}-panel-${index}`}
                    aria-labelledby={`${id}-tab-${index}`}
                    hidden={index !== selected}
                    className="control-tabs__panel"
                >
                    <Controls of={of} include={tab.include} />
                </div>
            ))}
        </div>
    );
};
