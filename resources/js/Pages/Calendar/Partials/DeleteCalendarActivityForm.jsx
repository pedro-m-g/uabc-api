import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';
import PropTypes from 'prop-types';

export default function DeleteCalendarActivityForm({ activity, show, onClose }) {
    const { delete: destroy } = useForm({});

    const submit = () => {
        destroy(route('calendar.destroy', activity));
        onClose();
    };

    return (
        <Modal show={show} onClose={onClose} maxWidth="sm">
            <div className='p-4'>
                <p>
                    ¿Estás seguro de eliminar el evento #{activity.id}?
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

DeleteCalendarActivityForm.propTypes = {
    activity: PropTypes.shape({
        id: PropTypes.number
    }),
    show: PropTypes.bool,
    onClose: PropTypes.func
};
