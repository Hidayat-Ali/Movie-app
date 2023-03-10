import React from "react";

const MovieCard = (props) => {
  const { data } = props;
  // console.log(data)

  return (
 
     
    <div className="container">
    <div className="row ">
      <div className="col">
        <div className="card">
          <img src={data.Poster} alt={data.Title} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{data.Title}</h5>
            <p className="card-text">{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      
  );
};

export default MovieCard;
