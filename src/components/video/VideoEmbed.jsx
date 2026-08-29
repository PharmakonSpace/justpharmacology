export default function VideoEmbed({video}){
  if(!video?.youtubeId) return <div className="video-empty"><b>Video coming soon</b><span>Add the real YouTube video ID when the lesson video is ready.</span></div>;
  return <div className="video-wrap"><iframe src={`https://www.youtube.com/embed/${video.youtubeId}`} title={video.title || 'Just Pharmacology lesson video'} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div>;
}
