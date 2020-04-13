import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFound: false,
      loading: true,
    };
  }

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      if (animal) {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
          isFound: true,
        });
      } else {
        this.setState({ loading: false, isFound: false });
      }
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    if (!this.state.loading && !this.state.isFound) {
      return <h1>Pet info not found</h1>;
    }

    const { animal, name, location, description, breed, media } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Detail;
