import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { RTSPStream } from '@/components/rtsp_streamer/VideoPlayer'

export function VideoWall(id: {camera: string}) {
  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Live Video</CardTitle>
        <CardDescription>Camera: {id.camera}</CardDescription>
      </CardHeader>
      <CardContent>
        <RTSPStream src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8" />
        {/* <RTSPStream src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8" /> */}
      </CardContent>
    </Card>
  );
}