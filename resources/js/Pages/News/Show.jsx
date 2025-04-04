import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import PropTypes from "prop-types";

export default function Show({ auth, id, title, content }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link href={route('news.index')}>
                        <span className="underline">Noticias</span>
                    </Link>
                    &nbsp;&gt; Artículo #{id}
                </h2>
            }
        >
            <Head title={`Noticias - Artículo #${id}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 prose">
                            <h1>{title}</h1>
                            <div dangerouslySetInnerHTML={{__html: content}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

Show.propTypes = {
    auth: PropTypes.shape({
        user: PropTypes.object
    }),
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string
};
