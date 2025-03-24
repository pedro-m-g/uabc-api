import PropTypes from "prop-types";

export default function Table({ header, children, ...props }) {
    return (
        <table
            className="table-auto w-full border-collapse my-4"
            {...props}
        >
            <thead>
                {header}
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    header: PropTypes.node,
    children: PropTypes.node
};
