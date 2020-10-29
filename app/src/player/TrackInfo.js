import React, {Component} from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Badge, CardImgOverlay
} from 'reactstrap';
import TrackSeeker from './TrackSeeker'

class TractInfo extends Component {
  state = {
  trackInfo: {
    image: '',
    name: 'track name',
    author: 'tract author',
    album: 'track album',
    genre: ['genre 1', 'genre 2']
  },
  isLoading: true
  }
  async componentDidMount() {
    console.log('tract metadata')
  }

  render() {
    const info = this.state.trackInfo
    return <Card className="text-centre" inverse color="warning">
    <CardImg top src="https://images.unsplash.com/photo-1603978342779-b882c0f036e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="track image"/>
    <TrackSeeker />
    <CardBody>
    <CardTitle>{info.name}</CardTitle>
    <CardSubtitle>{info.author}</CardSubtitle>
    {info.genre.map(g =>
      <div><Badge color="primary" pill >{g}</Badge></div>
    )
    }
    </CardBody>
    </Card>
  }
}

export default TractInfo