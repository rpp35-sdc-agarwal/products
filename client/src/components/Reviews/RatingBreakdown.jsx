import React from 'react';
import { sampleMeta } from './SampleData.js';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metaData: 0,
      avgScore: 0,
      starVal:  0,
      recommended: null,
      revBreakdown: {}
    };
    this.avgScore = this.avgScore.bind(this);
    this.breakdownObj = this.breakdownObj.bind(this);
    this.starPercent = this.starPercent.bind(this);
    this.recommend = this.recommend.bind(this);

  }

  // Each rating breakdown, consisting of the label, the bar, and the count, will act as a filter. Clicking on the breakdown for a star count will filter the reviews list so that only reviews of that rating display.  Hovering over this breakdown will change the background color to indicate it is actionable.
  // The filters will be additive.  If the list has already been filtered for 1 star reviews, clicking on the “2 star” breakdown will update the reviews list such that 1 and 2 star reviews are displayed.
  // The filters will be toggled on and off with each click.  Clicking a second time on a rating breakdown will remove the filter for that rating type.  If this action removes the last or only filter, then the list should return to its default state and all reviews should be shown.
  // Once one or more filters has been applied, a message will appear below the “Rating Breakdown” title.  It will state the filters that have been currently applied.   It will also include a link to “Remove all filters”.  Clicking on this link will remove any filters applied and return the list to the default state.


  componentDidUpdate(oldProps) {
    if (oldProps.metaData !== this.props.metaData) {
      this.setState((state) => {
        return { metaData: this.props.metaData }
      },
      () => {this.avgScore(this.state.metaData.ratings);}
      );
    }
  }

  starPercent(avgScore) {
    var starAvgScore = (avgScore / 5) * 100;
    return starAvgScore;
  }

  recommend() {
    var recTrue = parseInt(this.state.metaData.recommended.true);
    var recFalse = parseInt(this.state.metaData.recommended.false);
    if (!recTrue) {
      recTrue = 0;
    } else if (!recFalse) {
      recFalse = 0
    } else if (recTrue === 0 && recFalse === 0) {
      return 0;
    }
    var reco = (recTrue/(recTrue + recFalse)) * 100;
    return reco;
  }


  avgScore(allScores) {
    if (Object.keys(allScores).length === 0) {
      return
    }
    //store the ratings in a results array
    var ratings = [];
    var total = 0;
    //determine the number of ratings, total and the amount corresponding to each value
    //iterate through the object
    for (var rating in allScores) {
      //multiply the key by its value
      var ratingProduct = rating * allScores[rating];
      //add the amount of ratings to total
      total = total + parseInt(allScores[rating]);
      //push the result into the ratings array
      ratings.push(ratingProduct);
    }
    //add those values together
    ratings = ratings.reduce((previousVal, currentVal) => { return previousVal + currentVal });
    //divide them by the total number of ratings
    this.setState({
        avgScore: (ratings / total).toFixed(2),
        revBreakdown: this.breakdownObj(total, allScores),
        starVal: this.starPercent(ratings / total).toFixed(2),
        recommended: this.recommend().toFixed(0)
    });

    this.props.setAvg((ratings / total).toFixed(2), total);
  }

  breakdownObj(total, scores) {
    //look through all  the scores
    var storage = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    }
    for (var score in scores) {
      //calculate the percentage of total reviews for each score
      //store the percentages in an object
      storage[score] = ((scores[score] / total) * 100).toFixed(2);
    }
    //return the storage obj
    return storage;
  }

  render() {
    return (
      <div data-testid="test_revRatingBreakdown" className="RatingBreakdown">
        <h3>Ratings and Reviews</h3>
        <h1>{this.state.avgScore}</h1><span>{this.state.starVal}</span>
        <div>{this.state.recommended}% recommended</div>
        <div>
          score breakdown bars
          <div className='5' onClick={this.props.filterHandle}>5: {this.state.revBreakdown[5]}</div>
          <div className='4' onClick={this.props.filterHandle}>4: {this.state.revBreakdown[4]}</div>
          <div className='3' onClick={this.props.filterHandle}>3: {this.state.revBreakdown[3]}</div>
          <div className='2' onClick={this.props.filterHandle}>2: {this.state.revBreakdown[2]}</div>
          <div className='1' onClick={this.props.filterHandle}>1: {this.state.revBreakdown[1]}</div>
        </div>
      </div>
    )
  }
}

export default RatingBreakdown;