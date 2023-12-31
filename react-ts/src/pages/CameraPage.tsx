import { Suspense } from 'react'

import {
    useParams,
    useLoaderData,
    Await,
    Link
} from 'react-router-dom'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { cameras } from '@/data/cameras'
import { Vault } from '@/components/login/Vault'
import { VideoWall } from '@/components/video_player/VideoWall'

import { ReportList } from '@/components/reports/ReportList'
import { assertIsReports } from '@/components/reports/GetReports'
import { ReportData } from '@/components/reports/types'

type Params = {
    id: string;
};

export function CameraPage() {
    const params = useParams<Params>();
    // get camera ID from URL param
    const id = params.id === undefined ? undefined : parseInt(params.id)
    // find corresponding camera
    const camera = cameras.find(
            (camera) => camera.id === id
        )
    
    // get camera reports from react-router route
    const data = useLoaderData()
    assertIsData(data)
        
    return (
        <div className="text-center p-5 text-xl">
            {camera === undefined ? (
                <h1 className="text-xl">
                    ERROR :: Camera not available
                </h1>
        ) : (
        <Vault>
            <>

                <Card>
                    <CardHeader>
                        <CardTitle>{ camera.name }</CardTitle>
                        <CardDescription>
                            <div>
                                <Badge variant="outline">{ camera.model }</Badge>
                                <Badge variant="outline">{ camera.type }</Badge>
                                <Badge variant="outline">{ camera.region }</Badge>
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Alarm Recordings: { camera.recordings }</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Enhance</Button>
                        <a href={ 'http://' + camera.ip + ':' + camera.httpport } target='_blank'>
                            <Button variant="outline">WebUI</Button>
                        </a>
                        <Link to='/camera-list'>
                            <Button>Return</Button>
                        </Link>
                    </CardFooter>
                </Card>

                <VideoWall camera= { camera.name } />


                <Card className='mt-12'>
                    <CardHeader>
                        <CardTitle>{ camera.name } Recorded Events:</CardTitle>
                        <CardDescription>
                            The following events have been recorded for the selected camera. The data is fetched using React Router and an JSON REST API.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Suspense fallback={<div>Fetching...</div>}>
                            <Await resolve={data.reports}>
                            {(reports) => {
                                // console.log(reports)
                                assertIsReports(reports)
                                return <ReportList reports={reports} />
                            }}
                            </Await>
                        </Suspense>
                    </CardContent>
                </Card>
            </>
        </Vault>
        )}
    </div>
)}

type Data = {
    reports: ReportData[];
}

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data !== 'object') {
    throw new Error("ERROR :: Sent report data isn't an object");
  }
  if (data === null) {
    throw new Error('ERROR :: Report data is null');
  }
  if (!('reports' in data)) {
    throw new Error("ERROR :: data doesn't contain reports");
  }
}
