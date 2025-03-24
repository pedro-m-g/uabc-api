import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import { Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

export default function EditCoachForm({ coach }) {
    const { data, setData, post, put, errors, processing, recentlySuccessful } = useForm({
        school_id: coach.school_id,
        name: coach.name,
        description: coach.description,
        is_available_monday: coach.is_available_monday,
        is_available_tuesday: coach.is_available_tuesday,
        is_available_wednesday: coach.is_available_wednesday,
        is_available_thursday: coach.is_available_thursday,
        is_available_friday: coach.is_available_friday,
        is_available_saturday: coach.is_available_saturday,
        monday_start_time: coach.monday_start_time,
        monday_end_time: coach.monday_end_time,
        tuesday_start_time: coach.tuesday_start_time,
        tuesday_end_time: coach.tuesday_end_time,
        wednesday_start_time: coach.wednesday_start_time,
        wednesday_end_time: coach.wednesday_end_time,
        thursday_start_time: coach.thursday_start_time,
        thursday_end_time: coach.thursday_end_time,
        friday_start_time: coach.friday_start_time,
        friday_end_time: coach.friday_end_time,
        saturday_start_time: coach.saturday_start_time,
        saturday_end_time: coach.saturday_end_time
    });

    const weekdays = {
        'monday': 'Lunes',
        'tuesday': 'Martes',
        'wednesday': 'Miércoles',
        'thursday': 'Jueves',
        'friday': 'Viernes',
        'saturday': 'Sábado'
    };

    const submit = (e) => {
        e.preventDefault();
        if (coach.id) {
            put(route('coaches.update', coach));
        } else {
            post(route('coaches.store'));
        }
    }

    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div>
                <strong className='text-lg'>Información del asesor</strong>
            </div>
            <div>
                <InputLabel htmlFor="school_id" value="Matrícula" />

                <TextInput
                    id="school_id"
                    className="mt-1 block w-full"
                    value={data.school_id}
                    onChange={(e) => setData('school_id', e.target.value)}
                    required
                />

                <InputError className="mt-2" message={errors.school_id} />
            </div>
            <div>
                <InputLabel htmlFor="name" value="Nombre" />

                <TextInput
                    id="name"
                    className="mt-1 block w-full"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />

                <InputError className="mt-2" message={errors.name} />
            </div>
            <div>
                <InputLabel htmlFor="description" value="Descripción de la asesoría" />

                <TextInput
                    id="school_id"
                    className="mt-1 block w-full"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    required
                />

                <InputError className="mt-2" message={errors.description} />
            </div>
            <div>
                <strong className='text-lg'>Horario</strong>
            </div>
            {Object.keys(weekdays).map(day => (
                <div key={day} className='flex items-center space-x-4'>
                    <label className="flex items-center space-x-4">
                        <Checkbox
                            name={`is_available_${day}`}
                            checked={data[`is_available_${day}`]}
                            onChange={(e) => setData(`is_available_${day}`, e.target.checked)}
                        />
                        <span>{weekdays[day]}</span>
                    </label>
                    <InputError className="mt-2" message={errors[`is_available_${day}`]} />
                    {data[`is_available_${day}`] && <>
                        <label htmlFor={`${day}_start_time`}>De</label>
                        <TextInput
                            id={`${day}_start_time`}
                            type="time"
                            className="mt-1 block w-full"
                            value={data[`${day}_start_time`]}
                            onChange={(e) => setData(`${day}_start_time`, e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors[`${day}_start_time`]} />
                    </>}
                    {data[`is_available_${day}`] && <>
                        <label htmlFor={`${day}_end_time`}>A</label>
                        <TextInput
                            id={`${day}_end_time`}
                            type="time"
                            className="mt-1 block w-full"
                            value={data[`${day}_end_time`]}
                            onChange={(e) => setData(`${day}_end_time`, e.target.value)}
                            required
                        />
                        <InputError className="mt-2" message={errors[`${day}_end_time`]} />
                    </>}
                </div>
            ))}
            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Guardar</PrimaryButton>

                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600">Guardado correctamente.</p>
                </Transition>
            </div>
        </form>
    );
}

EditCoachForm.propTypes = {
    coach: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        school_id: PropTypes.string,
        description: PropTypes.string,
        is_available_monday: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        is_available_tuesday: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        is_available_wednesday: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        is_available_thursday: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        is_available_friday: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        is_available_saturday: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
        monday_start_time: PropTypes.string,
        monday_end_time: PropTypes.string,
        tuesday_start_time: PropTypes.string,
        tuesday_end_time: PropTypes.string,
        wednesday_start_time: PropTypes.string,
        wednesday_end_time: PropTypes.string,
        thursday_start_time: PropTypes.string,
        thursday_end_time: PropTypes.string,
        friday_start_time: PropTypes.string,
        friday_end_time: PropTypes.string,
        saturday_start_time: PropTypes.string,
        saturday_end_time: PropTypes.string
    })
};
