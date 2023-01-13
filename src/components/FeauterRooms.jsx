import React, { Component } from "react";
// import Loading from './Loading'
import Room from "./Room";
import Title from "./Title";
import { RoomContext } from "../store/context";

class FeauterRooms extends Component {
  static contextType = RoomContext;
  render() {
    let {loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featuer rooms" />
        <div className="featured-rooms-center">
            {loading ? "" :rooms}
        </div>
      </section>
    );
  }
}

export default FeauterRooms;
