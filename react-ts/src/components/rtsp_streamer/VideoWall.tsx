import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { RTSPStream } from '@/components/rtsp_streamer/VideoPlayer'
import image from "@/assets/video_background.png"

export function VideoWall(id: {camera: string}) {
  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Latest Recording</CardTitle>
        <CardDescription>Camera: {id.camera}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2">
          <div><img src={image} alt="Video background" /></div>
          <div><img src={image} alt="Video background" /></div>
          <div><img src={image} alt="Video background" /></div>
          <div className="col-span-2 row-span-2">
            <RTSPStream src="http://localhost:8083/stream/pattern/channel/0/hls/live/index.m3u8" />
          </div>
          <div><img src={image} alt="Video background" /></div>
          <div><img src={image} alt="Video background" /></div>
        </div>
      </CardContent>
    </Card>
  );
}