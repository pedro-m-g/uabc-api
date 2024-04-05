import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';

export default function EditCalendarActivity({ activity }) {
    const { data, setData, post, put, errors, processing, recentlySuccessful } = useForm({
        title: activity.title,
        start_date: activity.start_date,
        start_time: activity.start_time,
        end_date: activity.end_date,
        end_time: activity.end_time,
        is_all_day: activity.is_all_day
    });

    const submit = (e) => {
        e.preventDefault();
        if (activity.id) {
            put(route('calendar.update', activity));
        } else {
            post(route('calendar.store'));
        }
    }

    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div>
                <InputLabel htmlFor="title" value="Título" />

                <TextInput
                    id="title"
                    className="mt-1 block w-full"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    required
                />

                <InputError className="mt-2" message={errors.title} />
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <InputLabel htmlFor="start_date" value="Fecha de inicio" />

                    <TextInput
                        id="start_date"
                        className="mt-1 block w-full"
                        type="date"
                        value={data.start_date}
                        onChange={(e) => setData('start_date', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.start_date} />
                </div>
                <div>
                    <InputLabel htmlFor="end_date" value="Fecha de fin" />

                    <TextInput
                        id="end_date"
                        className="mt-1 block w-full"
                        type="date"
                        value={data.end_date}
                        onChange={(e) => setData('end_date', e.target.value)}
                        required
                    />

                    <InputError className="mt-2" message={errors.end_date} />
                </div>
            </div>
            {!data.is_all_day && <div className='grid grid-cols-2 gap-4'>
                <div>
                    <InputLabel htmlFor="start_time" value="Hora de inicio" />

                    <TextInput
                        id="start_time"
                        className="mt-1 block w-full"
                        type="time"
                        value={data.start_time}
                        onChange={(e) => setData('start_time', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.start_time} />
                </div>
                <div>
                    <InputLabel htmlFor="end_time" value="Hora de fin" />

                    <TextInput
                        id="end_time"
                        className="mt-1 block w-full"
                        type="time"
                        value={data.end_time}
                        onChange={(e) => setData('end_time', e.target.value)}
                    />

                    <InputError className="mt-2" message={errors.end_time} />
                </div>
            </div>}
            <div className="block mt-4">
                <label className="flex items-center">
                    <Checkbox
                        name="is_all_day"
                        checked={data.is_all_day}
                        onChange={(e) => setData('is_all_day', e.target.checked)}
                    />
                    <span className="ms-2 text-sm text-gray-600">Todo el dia</span>
                </label>
            </div>
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
