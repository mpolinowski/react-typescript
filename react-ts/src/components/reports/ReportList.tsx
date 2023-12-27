import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { ReportData } from './types'

type Props = {
    reports: ReportData[];
}

export function ReportList({ reports }: Props) {
    return (
        <Card className="w-full mt-16">
            <CardHeader>
                <CardTitle>Surveillance Log</CardTitle>
                <CardDescription>Recorded camera events</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>Latest Events</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead>Camera</TableHead>
                        <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reports.map((report) => (
                        <TableRow key={report.id}>
                            <TableCell className="font-bold text-left">{report.title}</TableCell>
                            <TableCell className="text-left">{report.description}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )   
}
