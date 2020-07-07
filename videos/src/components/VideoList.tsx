import React from "react";
import VideoItem from "./VideoItem";

interface Props {
	videos: any[];
	onVideoSelect: (video: any) => void;
}

const VideoList = ({ videos, onVideoSelect }: Props) => {
	const renderedList = videos.map((video) => {
		return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
	});

	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
