import React, {Component} from 'react'
import TrackPlayer from 'react-native-track-player'

class TrackSeeker extends Component {
  state = { isLoading: true}

  async componentDidMount(){
    console.log('tracker seeker')
    SoundPlayer.playSoundFile('tone', 'mp3')
    const sound = new Sound('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')

    sound.play()
  }

  render() {
    return <div>tracker seeker</div>
  }

}

export default TrackSeeker