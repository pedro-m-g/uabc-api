import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import EditArticleForm from "./Partials/EditArticleForm";

export default function Create({ auth }) {
    const article = {
        id: '',
        title: '',
        content: '',
        published_at: ''
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link href={route('news.index')}>
                        <span className="underline">Noticias</span>
                    </Link>
                    &nbsp;&gt; Crear arículo
                </h2>
            }
        >
            <Head title="Noticias - Crear artículo" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <EditArticleForm
                                article={article}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
