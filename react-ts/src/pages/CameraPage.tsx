import { useParams, Link } from 'react-router-dom'

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
            </>
        </Vault>
        )}
    </div>
)}
