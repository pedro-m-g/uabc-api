import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, procedure }) {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    <Link href={route('procedures.index')}>
                        <span className="underline">Trámites</span>
                    </Link>
                    &nbsp;&gt; Trámite #{procedure.id}
                </h2>
            }
        >
            <Head title={`Trámites - Trámite #${procedure.id}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-2xl">{procedure.title}</h1>
                            <div className="mt-4 space-y-2">
                                {procedure.steps.map((step, index) => (
                                    <div key={index} className="flex">
                                        <div
                                            className="flex items-center justify-center px-4 py-2 bg-blue-400 text-white"
                                        >
                                            <span>{index + 1}</span>
                                        </div>
                                        <div className="flex items-center flex-1 px-2">
                                            <span>{step}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
