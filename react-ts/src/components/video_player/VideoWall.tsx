import { useRef } from 'react'
import videojs from 'video.js'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { VideoPlayer } from '@/components/video_player/VideoPlayer'
import image from "@/assets/video_background.png"

const videoJsOptions = {
  autoplay: false,
  controls: true,
  responsive: true,
  fluid: true,
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4"
    }
  ]
};

export function VideoWall(id: {camera: string}) {

  const playerRef = useRef(null)

  const handlePlayerReady = (player) => {
    playerRef.current = player

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting')
    })

    player.on('dispose', () => {
      videojs.log('player will dispose')
    })
  }

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
            <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
          </div>
          <div><img src={image} alt="Video background" /></div>
          <div><img src={image} alt="Video background" /></div>
        </div>
      </CardContent>
    </Card>
  );
}