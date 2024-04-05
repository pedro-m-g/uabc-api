import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import MarkdownEditor from '@uiw/react-markdown-editor';
import { Transition } from '@headlessui/react';

export default function EditArticleForm({ article }) {
    const today = new Date().toISOString().split('T')[0];

    const { data, setData, post, put, errors, processing, recentlySuccessful } = useForm({
        title: article.title,
        content: article.content,
        published_at: article.published_at || today
    });

    const submit = (e) => {
        e.preventDefault();
        if (article.id) {
            put(route('news.update', article));
        } else {
            post(route('news.store'));
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
                <InputLabel htmlFor="published_at" value="Fecha de publicación" />

                <TextInput
                    id="published_at"
                    className="mt-1 block w-full"
                    type="date"
                    min={today}
                    value={data.published_at}
                    onChange={(e) => setData('published_at', e.target.value)}
                    required
                />

                <InputError className="mt-2" message={errors.title} />
            </div>
            <div>
                <InputLabel htmlFor="content" value="Contenido" />

                <MarkdownEditor
                    id='content'
                    className='mt-1 block w-full h-96'
                    value={data.content}
                    onChange={(value) => setData('content', value)}
                    required
                />

                <InputError className="mt-2" message={errors.content} />
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
