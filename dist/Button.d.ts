import React from 'react';
import { SpectrumComponentSize } from './common';
declare namespace Spectrum {
    type ButtonVariant = 'cta' | 'primary' | 'secondary' | 'warning' | 'overBackground';
    interface ButtonEvent extends globalThis.Event {
        readonly target: (EventTarget & unknown) | null;
    }
}
type Props = {
    id?: string;
    children?: React.ReactNode;
    onClick?: (e: Spectrum.ButtonEvent) => void;
    className?: string;
    disabled?: boolean;
    quiet?: boolean;
    variant?: Spectrum.ButtonVariant;
    size?: SpectrumComponentSize;
    style?: React.CSSProperties;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-button': {
                id?: string;
                children?: React.ReactNode;
                ref?: React.RefObject<HTMLElement>;
                class?: string;
                disabled?: boolean;
                quiet?: boolean;
                variant?: Spectrum.ButtonVariant;
                size?: SpectrumComponentSize;
                style?: React.CSSProperties;
                onClick?: (e?: any) => void;
            };
        }
    }
}
/**
 * Renders a button.
 *
 * @example
 * ```jsx
 * <Spectrum.Button variant="primary">Click</Spectrum.Button>
 * ```
 */
export default function Button(props: Props): JSX.Element;
export {};
