import PropTypes from "prop-types";

export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value || children}
        </label>
    );
}

InputLabel.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
};
