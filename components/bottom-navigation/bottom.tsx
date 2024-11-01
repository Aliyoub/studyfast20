import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import BottomNavigation from "./bottom-navigation";
import BottomControl from "./bottom-control";
import BottomNavigation2 from "./bottom-navigation2";

const Bottom = () => {
  const controlStateFromStore = useSelector(
    (state: RootState) => state.controlState.value
  );
  return (
    <div>
      {controlStateFromStore === "" || controlStateFromStore === "back" ? 
        <BottomNavigation2 /> : <BottomControl />
      }
    </div>
  );
};

export default Bottom;
