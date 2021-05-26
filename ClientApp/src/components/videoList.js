import React from 'react'
import PlayedVideo from './playedVideo'

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };
    }

    render() {

        var videos = this.state.videos.map(v =>
            <div>
                <h3>{v.snippet.title}</h3>
                <img src={v.snippet.thumbnails.high.url} onClick={() => this.setState({...this.state, selectedVideo: v})} />
            </div>
        );

        return (
            <div>
                <div><PlayedVideo selectedVideo={this.state.selectedVideo} /></div>
                <div>{videos}</div>
            </div>
        )
    }

    componentDidMount() {
        var key = "Your API KEY";
        var q = "trial bike";
        var url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${q}&key=${key}`;

        fetch(url)
            .then(response => response.json())
            .then(result => this.setState({ ...this.state, videos: result.items }));
    }
}


export default VideoList;