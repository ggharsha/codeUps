import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    }
  }

  flipCard() {
    this.setState({isFlipped: !this.state.isFlipped});
    console.log('test')
  }

  render() {
    const { title, body} = this.props;

    return(
      <div className='card'>
        <div 
          className={this.state.isFlipped ? 'card-inner is-flipped' : 'card-inner'} 
          onClick={() => this.flipCard()}
        >
          <div className='card-face card-face-front'>
            <h1>{title}</h1>
          </div>
          <div className='card-face card-face-back'>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;