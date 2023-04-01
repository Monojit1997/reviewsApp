// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {position: 0}

  previous = () => {
    this.setState(prevState => ({position: prevState.position - 1}))
  }

  next = () => {
    this.setState(prevState => ({position: prevState.position + 1}))
  }

  render() {
    const {position} = this.state
    const {reviewsList} = this.props
    const searchResults = reviewsList[position]

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Review</h1>
          <div className="profile-container">
            <button
              type="button"
              onClick={`${position < 0 ? null : '{this.previous}'}`}
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="profile">
              <img src={searchResults.imgUrl} alt={searchResults.username} />
              <h1 className="heading">{searchResults.username}</h1>
              <p className="description">{searchResults.companyName}</p>
              <p className="description">{searchResults.description}</p>
            </div>
            <button
              type="button"
              onClick={`${position < 0 ? null : '{this.next}'}`}
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
