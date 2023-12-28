import ReactHlsPlayer from 'react-hls-player'

// export function HLSPlayer( video: URL ) {
export function HLSPlayer( video: { url: string } ) {
  
  return (
    <>
      <ReactHlsPlayer
          src={video.url.href}
          autoPlay={false}
          controls={true}
          width="100%"
          height="auto"
          hlsConfig={{
            maxLoadingDelay: 4,
            minAutoBitrate: 0,
            lowLatencyMode: true,
          }}
      />
    </>
  );
}

// href: { url: string }