import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButtonLink from '@/Components/PrimaryButtonLink'
import Table from '@/Components/Table'

export default function Index({ auth, articles }) {
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Noticias</h2>}
        >
            <Head title="Noticias" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <PrimaryButtonLink href={route('news.create')}>
                                Crear artículo
                            </PrimaryButtonLink>
                            <Table
                                header={
                                    <tr className="border border-gray-400 bg-gray-200">
                                        <th className="border border-gray-400">ID</th>
                                        <th className="border border-gray-400">Título</th>
                                        <th className="border border-gray-400">Fecha de publicación</th>
                                        <th className="border border-gray-400">Acciones</th>
                                    </tr>
                                }
                            >
                                {articles.data.map((article) => (
                                    <tr key={article.id}>
                                        <td className="border border-gray-400 px-4">
                                            {article.id}
                                        </td>
                                        <td className="border border-gray-400 px-4 text-ellipsis">
                                            {article.title}
                                        </td>
                                        <td className="border border-gray-400 px-4">
                                            {article.published_at}
                                        </td>
                                        <td className="border border-gray-400 px-4">

                                        </td>
                                    </tr>
                                ))}
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
