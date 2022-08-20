import { buyCake } from "./04CakeActions";
import { connect } from "react-redux";

function CakeContainer(props: any) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOFCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    numOFCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
