export default function VideoEmbed({video}){
  if(!video?.youtubeId) return <div className="video-empty"><b>Video coming soon</b><span>..</span></div>;
  return <div className="video-wrap"><iframe src={`https://www.youtube.com/embed/${video.youtubeId}`} title={video.title || 'Just Pharmacology lesson video'} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div>;
}
