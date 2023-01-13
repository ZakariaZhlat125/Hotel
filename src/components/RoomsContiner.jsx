import React from "react";
import RoomsList from "./RoomsList";
import RoomFilter from "./RoomFilter";
import { withRoomConsumer } from "../store/context";
// import Loading from './loagin

const RoomsContiner = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <p>Rooms is loading</p>;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
};

export default withRoomConsumer(RoomsContiner);
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <p>Rooms is loading</p>;
//         }

//         return (
//           <div>
//             hello from room continer
//             <RoomFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default RoomsContiner;
