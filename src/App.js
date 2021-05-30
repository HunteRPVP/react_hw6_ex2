import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./App.css";

const Season = ({ value }) => {
  // return (
  //   <div className="season">
  //     <img
  //       className="season__img"
  //       src="https://wattention.com/wp-content/uploads/2020/07/winter-001-1.jpg"
  //       alt=""
  //     />
  //     <div className="season__name">Зима</div>
  //   </div>
  // );

  // if (value === 1) {
  //   return (
  //     <div className="season">
  //       <img
  //         className="season__img"
  //         src="https://wattention.com/wp-content/uploads/2020/07/winter-001-1.jpg"
  //         alt=""
  //       />
  //       <div className="season__name">Зима</div>
  //     </div>
  //   );
  // } else if (value === 2) {
  //   return (
  //     <div className="season">
  //       <img
  //         className="season__img"
  //         src="https://wattention.com/wp-content/uploads/2020/07/springs-007.jpg"
  //         alt=""
  //       />
  //       <div className="season__name">Весна</div>
  //     </div>
  //   );
  // } else if (value === 3) {
  //   return (
  //     <div className="season">
  //       <img
  //         className="season__img"
  //         src="https://wattention.com/wp-content/uploads/2018/04/wattention-tohoku-2018-spring-summer-e1524644149383.jpg"
  //         alt=""
  //       />
  //       <div className="season__name">Лето</div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="season">
  //       <img
  //         className="season__img"
  //         src="https://wattention.com/wp-content/uploads/2020/10/yamanashi-Mt.Fuji_and_autumn_leaves_on_the_shore_of_Lake_Kawaguchi-l.jpg"
  //         alt=""
  //       />
  //       <div className="season__name">Осень</div>
  //     </div>
  //   );
  // }

  // switch (value) {
  //   case 1:
  //     return (
  //       <div className="season">
  //         <img
  //           className="season__img"
  //           src="https://wattention.com/wp-content/uploads/2020/07/winter-001-1.jpg"
  //           alt=""
  //         />
  //         <div className="season__name">Зима</div>
  //       </div>
  //     );
  //   case 2:
  //     return (
  //       <div className="season">
  //         <img
  //           className="season__img"
  //           src="https://wattention.com/wp-content/uploads/2020/07/springs-007.jpg"
  //           alt=""
  //         />
  //         <div className="season__name">Весна</div>
  //       </div>
  //     );
  //   case 3:
  //     return (
  //       <div className="season">
  //         <img
  //           className="season__img"
  //           src="https://wattention.com/wp-content/uploads/2018/04/wattention-tohoku-2018-spring-summer-e1524644149383.jpg"
  //           alt=""
  //         />
  //         <div className="season__name">Лето</div>
  //       </div>
  //     );
  //   default:
  //     return (
  //       <div className="season">
  //         <img
  //           className="season__img"
  //           src="https://wattention.com/wp-content/uploads/2020/10/yamanashi-Mt.Fuji_and_autumn_leaves_on_the_shore_of_Lake_Kawaguchi-l.jpg"
  //           alt=""
  //         />
  //         <div className="season__name">Осень</div>
  //       </div>
  //     );
  // }

  // return value === 1 ? (
  //   <div className="season">
  //     <img
  //       className="season__img"
  //       src="https://wattention.com/wp-content/uploads/2020/07/winter-001-1.jpg"
  //       alt=""
  //     />
  //     <div className="season__name">Зима</div>
  //   </div>
  // ) : value === 2 ? (
  //   <div className="season">
  //     <img
  //       className="season__img"
  //       src="https://wattention.com/wp-content/uploads/2020/07/springs-007.jpg"
  //       alt=""
  //     />
  //     <div className="season__name">Весна</div>
  //   </div>
  // ) : value === 3 ? (
  //   <div className="season">
  //     <img
  //       className="season__img"
  //       src="https://wattention.com/wp-content/uploads/2018/04/wattention-tohoku-2018-spring-summer-e1524644149383.jpg"
  //       alt=""
  //     />
  //     <div className="season__name">Лето</div>
  //   </div>
  // ) : (
  //   <div className="season">
  //     <img
  //       className="season__img"
  //       src="https://wattention.com/wp-content/uploads/2020/10/yamanashi-Mt.Fuji_and_autumn_leaves_on_the_shore_of_Lake_Kawaguchi-l.jpg"
  //       alt=""
  //     />
  //     <div className="season__name">Осень</div>
  //   </div>
  // );

  // return (
  //   <div className="season">
  //     {value === 1 ? (
  //       <Fragment>
  //         <img
  //           className="season__img"
  //           src="https://wattention.com/wp-content/uploads/2020/07/winter-001-1.jpg"
  //           alt=""
  //         />
  //         <div className="season__name">Зима</div>
  //       </Fragment>
  //     ) : value === 2 ? (
  //       <Fragment>
  //         <img
  //           className="season__img"
  //           src="https://wattention.com/wp-content/uploads/2020/07/springs-007.jpg"
  //           alt=""
  //         />
  //         <div className="season__name">Весна</div>
  //       </Fragment>
  //     ) : value === 3 ? (
  //       <Fragment>
  //         <img
  //           className="season__img"
  //           src="https://wattention.com/wp-content/uploads/2018/04/wattention-tohoku-2018-spring-summer-e1524644149383.jpg"
  //           alt=""
  //         />
  //         <div className="season__name">Лето</div>
  //       </Fragment>
  //     ) : (
  //       <Fragment>
  //         <img
  //           className="season__img"
  //           src="https://wattention.com/wp-content/uploads/2020/10/yamanashi-Mt.Fuji_and_autumn_leaves_on_the_shore_of_Lake_Kawaguchi-l.jpg"
  //           alt=""
  //         />
  //         <div className="season__name">Осень</div>
  //       </Fragment>
  //     )}
  //   </div>
  // );

  // return (
  //   <div className="season">
  //     <img
  //       className="season__img"
  //       src={
  //         value === 1
  //           ? "https://wattention.com/wp-content/uploads/2020/07/winter-001-1.jpg"
  //           : value === 2
  //           ? "https://wattention.com/wp-content/uploads/2020/07/springs-007.jpg"
  //           : value === 3
  //           ? "https://wattention.com/wp-content/uploads/2018/04/wattention-tohoku-2018-spring-summer-e1524644149383.jpg"
  //           : "https://wattention.com/wp-content/uploads/2020/10/yamanashi-Mt.Fuji_and_autumn_leaves_on_the_shore_of_Lake_Kawaguchi-l.jpg"
  //       }
  //       alt=""
  //     />
  //     <div className="season__name">
  //       {value === 1
  //         ? "Зима"
  //         : value === 2
  //         ? "Весна"
  //         : value === 3
  //         ? "Лето"
  //         : "Осень"}
  //     </div>
  //   </div>
  // );

  return (
    <div className="season">
      {value === 1 && (
        <Fragment>
          <img
            className="season__img"
            src="https://wattention.com/wp-content/uploads/2020/07/winter-001-1.jpg"
            alt=""
          />
          <div className="season__name">Зима</div>
        </Fragment>
      )}
      {value === 2 && (
        <Fragment>
          <img
            className="season__img"
            src="https://wattention.com/wp-content/uploads/2020/07/springs-007.jpg"
            alt=""
          />
          <div className="season__name">Весна</div>
        </Fragment>
      )}
      {value === 3 && (
        <Fragment>
          <img
            className="season__img"
            src="https://wattention.com/wp-content/uploads/2018/04/wattention-tohoku-2018-spring-summer-e1524644149383.jpg"
            alt=""
          />
          <div className="season__name">Лето</div>
        </Fragment>
      )}
      {value === 4 && (
        <Fragment>
          <img
            className="season__img"
            src="https://wattention.com/wp-content/uploads/2020/10/yamanashi-Mt.Fuji_and_autumn_leaves_on_the_shore_of_Lake_Kawaguchi-l.jpg"
            alt=""
          />
          <div className="season__name">Осень</div>
        </Fragment>
      )}
    </div>
  );
};

Season.propTypes = {
  value: PropTypes.number.isRequired,
};

function App() {
  return <Season value={4} />;
}

export default App;
