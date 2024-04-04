import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Escritorio</h2>}
        >
            <Head title="Escritorio" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <p>
                                Hola de nuevo
                                <strong>&nbsp;{auth.user.name}</strong>
                            </p>
                            <div className='my-8 grid gap-8 grid-cols-3'>
                                <PrimaryButton>
                                    Noticias
                                </PrimaryButton>
                                <PrimaryButton>
                                    Calendario de actividades
                                </PrimaryButton>
                                <PrimaryButton>
                                    Asesorías
                                </PrimaryButton>
                                <PrimaryButton>
                                    Trámites escolares
                                </PrimaryButton>
                                <PrimaryButton>
                                    Programas de Servicio Social
                                </PrimaryButton>
                                <PrimaryButton>
                                    Modalidades de aprendizaje y prácticas profesionales
                                </PrimaryButton>
                                <PrimaryButton>
                                    Ofertas laborales
                                </PrimaryButton>
                                <PrimaryButton>
                                    Proyectos de investigación
                                </PrimaryButton>
                                <PrimaryButton>
                                    Proyectos cimarrones
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
