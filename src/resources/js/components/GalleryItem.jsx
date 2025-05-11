import React from "react";

class GalleryItem extends React.Component {
    render() {
        return (
            <div className="gallery__item fadein">
                <img src={this.props.image} />
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default GalleryItem;