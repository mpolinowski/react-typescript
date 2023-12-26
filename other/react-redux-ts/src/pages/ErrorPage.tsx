import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
    const error = useRouteError();
    return (
        <>
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