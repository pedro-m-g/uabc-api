import { Link, Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Welcome() {
    return (
        <Guest>
            <Head title='Inicio' />
            <main className='py-12'>
                <h1 className='text-4xl text-center'>Universidad Autónoma de Baja California</h1>
                <h2 className='text-2xl text-center mt-4'>Facultad de Ciencias</h2>
                <div className='text-center mt-8'>
                    <Link href={route('login')}>
                        <PrimaryButton>
                            Iniciar sesión
                        </PrimaryButton>
                    </Link>
                </div>
            </main>
        </Guest>
    );
}
