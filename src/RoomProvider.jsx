// import { RoomContext } from "./context";
const RoomProvider = () => {
  return (
    <RoomContext.Provider value={"hello"}>
      {props.children}
    </RoomContext.Provider>
  );
};

// export default RoomProvider;
