import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function DeleteProcedureForm({ procedure, show, onClose }) {
    const { delete: destroy } = useForm({});

    const submit = () => {
        destroy(route('procedures.destroy', procedure));
        onClose();
    };

    return (
        <Modal show={show} onClose={onClose} maxWidth="sm">
            <div className='p-4'>
                <p>
                    ¿Estás seguro de eliminar el trámite #{procedure?.id}?
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
