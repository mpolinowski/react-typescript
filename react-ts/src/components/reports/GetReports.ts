import { ReportData } from './types'

export async function getReports() {
    const response = await fetch(
        // add '!' to assert that expression can’t be null or undefined
        import.meta.env.VITE_API_URL!
    );
    const body = (await response.json()) as unknown
    // type assertion for API response
    assertIsReports(body);
    return body;
}


export function assertIsReports(
    reportData: unknown
): asserts reportData is ReportData[] {
    if (!Array.isArray(reportData)) {
        throw new Error("ERROR :: Report isn't an array");
    }
    if (reportData.length === 0) {
        return
    }
    reportData.forEach((report) => {
        if (!('id' in report)) {
            throw new Error("ERROR :: Report doesn't contain an id");
        }
        if (typeof report.id !== 'string') {
            throw new Error('ERROR :: id is not a string');
        }
        if (!('title' in report)) {
            throw new Error("ERROR :: Report doesn't contain title");
        }
        if (typeof report.title !== 'string') {
            throw new Error('ERROR :: Title is not a string');
        }
        if (!('description' in report)) {
            throw new Error("ERROR :: Report doesn't contain description");
        }
        if (typeof report.description != 'string') {
            throw new Error('ERROR :: Description is not a string');
        }
    })
}