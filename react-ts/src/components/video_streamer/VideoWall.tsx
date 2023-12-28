import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { HLSPlayer } from '@/components/video_streamer/HLSPlayer'
import image from "@/assets/video_background.png"

const url: URL = new URL("https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8")

export function VideoWall() {
  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Camera Live Video</CardTitle>
        <CardDescription>Embedded HLS stream unsing hls.js</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2.5">
          <div><img src={image} alt="Video background" /></div>
          <div><img src={image} alt="Video background" /></div>
          <div><img src={image} alt="Video background" /></div>
          <div className="col-span-2 row-span-2">
            <HLSPlayer url={url} />
          </div>
          <div><img src={image} alt="Video background" /></div>
          <div><img src={image} alt="Video background" /></div>
        </div>
      </CardContent>
    </Card>
  );
}