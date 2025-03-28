import { Link } from '@inertiajs/react'
import PropTypes from 'prop-types';

export default function SecondaryButtonLink({
    href,
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <Link
            href={href}
            as="button"
            {...props}
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-300 border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </Link>
    );
}

SecondaryButtonLink.propTypes = {
    href: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node
};
