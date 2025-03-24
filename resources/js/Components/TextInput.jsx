import PropTypes from 'prop-types';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
                className
            }
            ref={localRef}
        />
    );
}

export default forwardRef(TextInput);

TextInput.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    isFocused: PropTypes.bool
};
