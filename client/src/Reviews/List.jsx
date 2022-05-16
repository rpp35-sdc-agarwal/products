import React from 'react';
import Tile from './Tile.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  //call to the backend and store the returned data in state when the entire component mounts

  render() {
    return (
      <div className="List">
        List
        <div>
          {/* {this.state.reviews.results.map((review) => {
            return (
              <Tile review={review}/>
            )
          })} */}
        </div>
        {
        //dynamically render 2 tiles
        //create a More Reviews button (add functionality in next iteration)
        //create an add review button next to the more reviews button
       }
       <button>More Reviews</button><button>Write A Review</button>
      </div>
    )
  }
}

export default List;