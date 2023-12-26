import { useRouteError } from 'react-router-dom';

import { NavBar } from '@/components/navbar/NavBar'

export function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <NavBar />
            <div className="text-center p-5 text-xl">
                <h1 className="text-xl">
                    Sorry, an error has occurred
                </h1>
                {isError(error) && (
                    <p className="text-base">
                        {error.statusText}
                    </p>
                )}
            </div>
        </>
    );
}

function isError(error: any): error is { statusText: string } {
    return "statusText" in error;
}