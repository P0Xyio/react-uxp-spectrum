import React from 'react';
import { SpectrumComponentSize } from './common';
declare namespace Spectrum {
    interface DropdownEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            selectedIndex: number;
        }) | null;
    }
}
type Props = {
    children?: React.ReactNode;
    onChange?: (e: Spectrum.DropdownEvent) => void;
    className?: string;
    disabled?: boolean;
    invalid?: boolean;
    quiet?: boolean;
    placeholder?: string;
    selectedIndex?: number;
    size?: SpectrumComponentSize;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-picker': {
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                disabled?: boolean;
                invalid?: boolean;
                quiet?: boolean;
                placeholder?: string;
                selectedIndex?: number;
                size?: SpectrumComponentSize;
                onMouseDown?: (e?: any) => void;
            };
        }
    }
}
/**
 * Renders a dropdown with menu items. The dropdown must contain a {@link Spectrum.Menu}
 * with `slot="options"`, and inside the {@link Spectrum.Menu}, a series of {@link Spectrum.MenuItem}
 * or {@link Spectrum.MenuDivider} elements.
 *
 * @example
 * ```jsx
 * <Spectrum.Picker>
 *   <Spectrum.Menu slot="options">
 *     <Spectrum.MenuItem>Deselect</Spectrum.MenuItem>
 *     <Spectrum.MenuDivider></Spectrum.MenuDivider>
 *     <Spectrum.MenuItem disabled>Make work path</Spectrum.MenuItem>
 *   </Spectrum.Menu>
 * </Spectrum.Picker>
 * ```
 */
export default function Picker(props: Props): JSX.Element;
export {};
