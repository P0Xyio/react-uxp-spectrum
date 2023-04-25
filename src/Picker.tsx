import React, { useEffect, useRef } from 'react';
import { SpectrumComponentSize, SpectrumComponetDefaults } from './common';

namespace Spectrum {
  export interface DropdownEvent extends globalThis.Event {
    readonly target: (EventTarget & { selectedIndex: number }) | null;
  }
}

type Props = {
  id?: string;
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
        id?: string;
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
export default function Picker(props: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const dispatchChange = (e: Event) =>
      props.onChange?.(e as Spectrum.DropdownEvent);

    ref.current?.addEventListener('change', dispatchChange);
    return () => {
      ref.current?.removeEventListener('change', dispatchChange);
    };
  }, [props.onChange]);

  return (
    <sp-picker
      id={props.id || undefined}
      ref={ref}
      class={props.className}
      disabled={props.disabled || undefined}
      invalid={props.invalid || undefined}
      quiet={props.quiet || undefined}
      placeholder={props.placeholder}
      selectedIndex={props.selectedIndex}
      size={props?.size || SpectrumComponetDefaults.defaultSize}
    >
      {props?.children}
    </sp-picker>
  );
}
