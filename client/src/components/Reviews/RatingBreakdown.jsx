import React from 'react';
import { sampleMeta } from './SampleData.js';

class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metaData: null,
      avgScore: null,
      starVal: null,
      recommended: null,
      revBreakdown: {}
    };
    this.avgScore = this.avgScore.bind(this);
    this.breakdownObj = this.breakdownObj.bind(this);
    this.starPercent = this.starPercent.bind(this);
    this.recommend = this.recommend.bind(this);
  }



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
    var reco = (recTrue/(recTrue + recFalse)) * 100;
    return reco;
  }

  avgScore(allScores) {
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

    this.props.setAvg((ratings / total).toFixed(2));
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
          <div>5: {this.state.revBreakdown[5]}</div>
          <div>4: {this.state.revBreakdown[4]}</div>
          <div>3: {this.state.revBreakdown[3]}</div>
          <div>2: {this.state.revBreakdown[2]}</div>
          <div>1: {this.state.revBreakdown[1]}</div>
        </div>
      </div>
    )
  }
}

export default RatingBreakdown;