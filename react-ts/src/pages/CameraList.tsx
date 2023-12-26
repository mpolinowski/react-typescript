import { Link, useSearchParams } from 'react-router-dom'
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
import { ScrollCards } from '@/components/camera_cards/ScrollCards'
import { Vault } from '@/components/login/Vault'

export function CameraList() {
    const [searchParams] = useSearchParams();

    function getFilteredCameras() {
        const search = searchParams.get('search');
        if (search === null || search === "") {
        return cameras;
    } else {
        return cameras.filter(
            (camera) =>
            camera.name
                .toLowerCase()
                .indexOf(search.toLowerCase()) > -1
            );
        }
    }

    return (
        <Vault>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12'>
            { getFilteredCameras().map((camera) => (
                    <Card className="w-fill" key={ camera.id }>
                        <CardHeader>
                            <CardTitle>{ camera.name }</CardTitle>
                            <CardDescription>{ camera.model } | { camera.region }</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollCards events={camera.events} />
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button variant="outline">Control</Button>
                            <a href={ 'http://' + camera.ip + ':' + camera.httpport } target='_blank'>
                                <Button variant="outline">WebUI</Button>
                            </a>
                            <Link
                                to={`/camera/${camera.id}`}
                                className="p-1 text-base hover:underline"
                            >
                                <Button>Recordings</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Vault>
    );
}