import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  // const { animal, breed, city, state, description, name } = props;
  return (
    <div className="details">
      <h1>{id}</h1>
      {/* <Carousel media={props.media} />
      <div>
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
        <button>Adopt {name}</button>
        <p>{description}</p>
      </div> */}
    </div>
  );
}

export default Details;