import { useParams } from 'react-router-dom';

export function UserDetails() {
    const { name } = useParams<{ name: string }>();
    return (
        <div className="flex flex-col py-10 max-w-md mx-auto">
            <h2 className="text-3xl font-bold underlinemb-3">
                User Details
            </h2>
            <p>Username: { name }</p>
        </div>
    );
}