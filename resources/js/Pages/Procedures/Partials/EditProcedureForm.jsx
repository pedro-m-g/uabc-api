import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import EditableList from '@/Components/EditableList';
import { Transition } from '@headlessui/react';

export default function EditProcedureForm({ procedure }) {
    const { data, setData, post, put, errors, processing, recentlySuccessful } = useForm({
        title: procedure.title,
        steps: procedure.steps
    });

    const submit = (e) => {
        e.preventDefault();
        if (procedure.id) {
            put(route('procedures.update', procedure));
        } else {
            post(route('procedures.store'));
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

            <div>
                <EditableList
                    value={data.steps}
                    onChange={(newList) => setData('steps', newList)}
                    errors={data.errors?.steps}
                />
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
