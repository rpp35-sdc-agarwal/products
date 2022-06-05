import React from 'react';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      Size:'None selected',
      Width:'None selected',
      Comfort:'None selected',
      Quality:'None selected',
      Length:'None selected',
      Fit:'None selected',
      SizeRating: null,
      WidthRating: null,
      ComfortRating: null,
      QualityRating: null,
      LengthRating: null,
      FitRating: null
    }
    this.characteristicHandler = this.characteristicHandler.bind(this);
  }

  characteristicHandler(e) {
    var character = e.target.id;
    var value = e.target.value.slice(1);
    var rateName = e.target.id + 'Rating';
    var rating = e.target.value.slice(0, 1);
    console.log(rating)
    this.setState({
      [character]: value,
      [rateName]: rating
    }, this.props.sensor(e, rating));
  }

  renderCharacter(characters) {
    var elements = [];
    var newState = {};
    var descriptors = {
      Size: ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
      Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
      Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Too wide'],
      Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
      Length: ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
      Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
    }
    for (var character in characters) {
      var characteristic = (
        <div key={characters[character].id}>
          <div>{character}</div>
          <div>{this.state[character]}</div>
          <div>
            <input type="radio" name="character"  id={character} value={1 + descriptors[character][0]} onClick={this.characteristicHandler}/>
            <label htmlFor="character">1</label>
            <input type="radio" name="character"  id={character} value={2 + descriptors[character][1]} onClick={this.characteristicHandler}/>
            <label htmlFor="character">2</label>
            <input type="radio" name="character"  id={character} value={3 + descriptors[character][2]} onClick={this.characteristicHandler}/>
            <label htmlFor="character">3</label>
            <input type="radio" name="character"  id={character} value={4 + descriptors[character][3]} onClick={this.characteristicHandler}/>
            <label htmlFor="character">4</label>
            <input type="radio" name="character"  id={character} value={5 + descriptors[character][4]} onClick={this.characteristicHandler}/>
            <label htmlFor="character">5</label>
          </div>
          <span>{descriptors[character][0]}</span><span>{descriptors[character][4]}</span>
        </div>
      );
        elements.push(characteristic);
    }
    return elements;
  }

  render() {
    return (
      <fieldset>
        <legend>How would you rate these characteristics?</legend>
        {this.renderCharacter(this.props.characteristics)}
      </fieldset>
    )
  }
}

export default Characteristics;