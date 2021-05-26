import React from 'react'

class PlayedVideo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let video = this.props.selectedVideo;
        let embed;

        if (video != null){
            var url = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
            embed = <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }

        return (
            <div>{embed}</div>
        )
    }
}

export default PlayedVideo;