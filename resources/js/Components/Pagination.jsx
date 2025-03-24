import SecondaryButtonLink from '@/Components/SecondaryButtonLink';
import PropTypes from 'prop-types';

export default function Pagination({
    first_page_url,
    next_page_url,
    prev_page_url,
    current_page,
    per_page,
    from,
    to,
    last_page
 }) {
    return last_page > 1 &&  (
        <div className='py-4'>
            <div className='text-center'>
                Mostrando {per_page} resultados (de {from} a {to})
            </div>
            <div className='flex items-center justify-center mt-4 space-x-4'>
                {current_page > 2 && (
                    <SecondaryButtonLink href={first_page_url}>
                        1
                    </SecondaryButtonLink>
                )}
                {!!prev_page_url && (
                    <SecondaryButtonLink href={prev_page_url}>
                        &lt;
                    </SecondaryButtonLink>
                )}
                <strong>{current_page}</strong>
                {!!next_page_url && (
                    <SecondaryButtonLink href={next_page_url}>
                        &gt;
                    </SecondaryButtonLink>
                )}
            </div>
        </div>
    );
}

Pagination.propTypes = {
    first_page_url: PropTypes.string,
    next_page_url: PropTypes.string,
    prev_page_url: PropTypes.string,
    current_page: PropTypes.number,
    per_page: PropTypes.number,
    from: PropTypes.number,
    to: PropTypes.number,
    last_page: PropTypes.number
};
