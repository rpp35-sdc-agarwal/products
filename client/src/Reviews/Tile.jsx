import React from 'react';

// Star Rating - This will be the rating given to the product by this individual review.
//The rating will be displayed in the format of solid or outlined stars, where the solid stars represent the review score.
//A total of 5 stars should always appear, and the amount filled in should correspond to the average score.
// The visual for rating should be representative of up to a quarter of a review point.  For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars.

// Date of review - The date the review was written should appear in the format “Month DD, YYYY”

// Review Summary - Reviews submitted will have a one sentence summary. This single sentence will be capped at 60 characters.
// On the review tile, this summary will appear in bold font above the full review.
// Review Body - The review body will be a free-form multimedia input where the user can submit text and images regarding their experience with the product.
// The text submitted as part of the review will be between 50 and 1000 characters long.
// Users should be able to submit up to 5 images along with a single review.
// By default the first 250 characters of the review should display.  If the review is longer than 250 characters, below the body a link reading “Show more” will appear.  Upon clicking this link, the review tile should expand and the rest of the review should display.
// Any images that were submitted as part of the review should appear as thumbnails below the review text. Upon clicking a thumbnail, the image should open in a modal window, displaying at full resolution.  The only functionality available within this modal should be the ability to close the window.

// Recommend - If the reviewer recommends buying the product, the text “I recommend this product” and a checkmark icon will display below the review.  If the reviewer does not recommend the product, nothing will display here.

// Reviewer name - The username for the reviewer will appear.  Only the username will appear. No email addresses or other personal information will display.

// Response to Review - Our internal sales team has the ability to respond to any reviews written.  If the review has a corresponding response, this should appear below the reviewer name.  The response should be preceded by the text “Response from seller”, and should be visually distinguished from the rest of the review.

// Rating Helpfulness - Any user on the site will have the ability to provide feedback on whether reviews are helpful.  At the bottom of the review tile the text “Helpful?” will precede a links “Yes (#)”.   Following “Yes” will be the count of users that have selected that button.  Clicking the link should cast a vote for that selection.

// A user on the site does not need to be logged in to provide feedback on helpfulness.
// A user can provide feedback on any review.  However, they can only make one submission for each review. If the user selects either “Yes”, they should not be able to select “Yes” again.


class Tile extends React.component {
  constructor(props) {
    super(props),
    this.state = {
      //all the reviews from the api call will be here
      reviews: this.props.reviews || null
    }
  }


  render() {
    return (
      <div className="rev-tile">
        <div className="rev-stars"><span className="rev-username rev-date"></span></div>
        <div className="rev-summary"></div>
        <div className="rev-body"></div>
        <div className="rev-response"></div>
        <div className="rev-helpfulness"></div>
      </div>
    )
  }
}