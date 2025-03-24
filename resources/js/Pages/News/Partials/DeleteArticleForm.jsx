import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';
import PropTypes from 'prop-types';

export default function DeleteArticleForm({ article, show, onClose }) {
    const { delete: destroy } = useForm({});

    const submit = () => {
        destroy(route('news.destroy', article));
        onClose();
    };

    return (
        <Modal show={show} onClose={onClose} maxWidth="sm">
            <div className='p-4'>
                <p>
                    ¿Estás seguro de eliminar el artículo #{article?.id}?
                </p>
                <div className='flex space-x-4 mt-4'>
                    <DangerButton onClick={() => submit()}>
                        Eliminar
                    </DangerButton>
                    <SecondaryButton onClick={() => onClose()}>
                        Cancelar
                    </SecondaryButton>
                </div>
            </div>
        </Modal>
    );
}

DeleteArticleForm.propTypes = {
    article: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string
    }),
    show: PropTypes.bool,
    onClose: PropTypes.func
};
