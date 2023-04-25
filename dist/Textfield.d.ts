import React from 'react';
import { SpectrumComponentSize } from './common';
declare namespace Spectrum {
    type TextfieldType = 'number' | 'password' | 'search' | 'text';
    interface TextfieldEvent extends globalThis.Event {
        readonly target: (EventTarget & {
            value: string;
        }) | null;
    }
}
type Props = {
    id?: string;
    children?: React.ReactNode;
    onChange?: (e: Spectrum.TextfieldEvent) => void;
    onInput?: (e: Spectrum.TextfieldEvent) => void;
    className?: string;
    disabled?: boolean;
    invalid?: boolean;
    placeholder?: string;
    quiet?: boolean;
    type?: Spectrum.TextfieldType;
    valid?: boolean;
    value?: string | number;
    size?: SpectrumComponentSize;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-textfield': {
                id?: string;
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
                onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
                disabled?: boolean;
                invalid?: boolean;
                placeholder?: string;
                quiet?: boolean;
                type?: Spectrum.TextfieldType;
                valid?: boolean;
                value?: string | number;
                size?: SpectrumComponentSize;
            };
        }
    }
}
/**
 * Renders a text field with optional associated {@link Spectrum.Label}.
 * @example
 * ```jsx
 * <Spectrum.Textfield placeholder="Phone Number">
 *   <Spectrum.Label isRequired="true" slot="label">Phone Number</Spectrum.Label>
 * </Spectrum.Textfield>
 * ```
 */
export default function Textfield(props: Props): JSX.Element;
export {};
