import SecondaryButton from './SecondaryButton';
import InputLabel from './InputLabel';
import TextInput from './TextInput';
import InputError from './InputError';

export default function EditableList({ value, onChange, errors }) {
    const maxSteps = 10;

    const editListItem = (index, item) =>
        value.map((oldItem, oldIndex) =>
            index === oldIndex ? item : oldItem);

    const addListItem = () => {
        if (value.length >= maxSteps) {
            return value;
        }
        return [...value, ''];
    };

    return (
        <div className='space-y-4'>
            {value.map((_, index) => (
                <div key={index}>
                    <div>
                        <InputLabel htmlFor={`steps.${index + 1}`} value={`Paso #${index + 1}`} />

                        <TextInput
                            id={`steps.${index + 1}`}
                            className="mt-1 block w-full"
                            value={value[index]}
                            onChange={(e) => onChange(editListItem(index, e.target.value))}
                            required
                        />

                        <InputError className="mt-2" message={errors?.steps?.[index]} />
                    </div>
                </div>
            ))}
            <div>
                <SecondaryButton
                    disabled={value.length >= maxSteps}
                    onClick={() => onChange(addListItem())}
                >
                    Agregar
                </SecondaryButton>
            </div>
        </div>
    );
}
