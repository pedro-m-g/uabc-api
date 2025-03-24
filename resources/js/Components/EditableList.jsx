import SecondaryButton from './SecondaryButton';
import DangerButton from './DangerButton';
import TextInput from './TextInput';
import InputError from './InputError';
import PropTypes from 'prop-types';

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

    const deleteListItem = (index) =>
        value.filter((_, oldIndex) => oldIndex !== index);

    return (
        <div className='space-y-4'>
            {value.map((step, index) => (
                <div key={`${index + 1}_step`}>
                    <div className='flex'>
                        <div
                            className="flex items-center justify-center px-4 bg-blue-400 text-white"
                        >
                            <span>{index + 1}</span>
                        </div>
                        <TextInput
                            id={`steps.${index + 1}`}
                            className='flex-1'
                            value={step}
                            onChange={(e) => onChange(editListItem(index, e.target.value))}
                            required
                        />
                        <div className='flex items-stretch'>
                            <DangerButton
                                disabled={index === 0 && value.length === 1}
                                onClick={(evt) => {
                                    evt.preventDefault();
                                    onChange(deleteListItem(index))
                                }}
                                tyoe="button"
                            >
                                &times;
                            </DangerButton>
                        </div>
                    </div>
                    <div>
                        <InputError
                            message={errors?.steps?.[index]}
                        />
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

EditableList.propTypes = {
    value: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    errors: PropTypes.shape({
        steps: PropTypes.arrayOf(PropTypes.string)
    })
};
