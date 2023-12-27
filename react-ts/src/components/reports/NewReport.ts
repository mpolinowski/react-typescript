import { NewReportData, SavedReportData } from './types'

export async function saveReport( newReportData: NewReportData ) {
    const response = await fetch(
        import.meta.env.VITE_API_URL!,
        {
            method: 'POST',
            body: JSON.stringify(newReportData),
            headers: {'Content-Type': 'application/json'}
        }
    )
    const body = (await response.json()) as unknown;
    assertIsSavedReport(body);

    return { ...newReportData, ...body };
}

function assertIsSavedReport( post: any ):
    asserts post is SavedReportData {
        if (!('id' in post)) {
            throw new Error("ERROR :: Post doesn't contain an id")
        }
        if (typeof post.id !== 'number') {
            throw new Error('ERROR :: id is not a number');
        }
}