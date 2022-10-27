// import { FaAffiliatetheme, FaChair } from "react-icons/fa";
// import Button from "react-bootstrap/Button";
// import { BiSquareRounded } from "react-icons/bi";

// import React, { useState } from "react";
// const NewBook = () => {
//   const [row1, setRow1] = useState([
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: false, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//   ]);

//   const [row2, setRow2] = useState([
//     { empty: false, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: false, selected: false },
//     { empty: true, selected: false },
//     { empty: false, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//   ]);

//   const [row3, setRow3] = useState([
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//     { empty: false, selected: false },
//     { empty: true, selected: false },
//     { empty: false, selected: false },
//     { empty: true, selected: false },
//     { empty: true, selected: false },
//   ]);

//   const onSelectRow1 = (index) => {
//     let tempRow = [];
//     tempRow = row1;
//     tempRow.map((item, ind) => {
//       if (index == ind) {
//         if (item.selected == true) {
//           item.selected = false;
//           item.empty = true;
//         } else {
//           item.selected = true;
//           item.empty = false;
//         }
//       }
//     });

//     let tempSeats = [];
//     tempRow.map((item) => {
//       tempSeats.push(item);
//     });
//     setRow1(tempSeats);
//   };

//   const onSelectRow2 = (index) => {
//     let tempRow = [];
//     tempRow = row2;
//     tempRow.map((item, ind) => {
//       if (index == ind) {
//         if (item.selected == true) {
//           item.selected = false;
//           item.empty = true;
//         } else {
//           item.selected = true;
//           item.empty = false;
//         }
//       }
//     });

//     let tempSeats = [];
//     tempRow.map((item) => {
//       tempSeats.push(item);
//     });
//     setRow2(tempSeats);
//   };

//   const onSelectRow3 = (index) => {
//     let tempRow = [];
//     tempRow = row3;
//     tempRow.map((item, ind) => {
//       if (index == ind) {
//         if (item.selected == true) {
//           item.selected = false;
//           item.empty = true;
//         } else {
//           item.selected = true;
//           item.empty = false;
//         }
//       }
//     });

//     let tempSeats = [];
//     tempRow.map((item) => {
//       tempSeats.push(item);
//     });
//     setRow3(tempSeats);
//   };
//   return (
//     <>
//       <div className="movie-container">
//         <div className="content">
//           <div className="seats">
//             <div>
//               {row1.map((item, index) => {
//                 return (
//                   <div key={index}>
//                     <div
//                       onClick={() => {
//                         if (item.selected == false && item.empty == false) {
//                           alert("Already booked");
//                         } else {
//                           onSelectRow1(index);
//                         }
//                       }}
//                     >
//                       {item.empty == false && item.selected == true ? (
//                         <div>
//                           <BiSquareRounded
//                             style={{ backgroundColor: "green", margin: "5px" }}
//                           />
//                         </div>
//                       ) : item.empty == true && item.selected == false ? (
//                         <div>
//                           <BiSquareRounded style={{ margin: "5px" }} />
//                         </div>
//                       ) : item.empty == false && item.selected == false ? (
//                         <div>
//                           <BiSquareRounded
//                             style={{ backgroundColor: "8e8e8e", margin: "5px" }}
//                           />
//                         </div>
//                       ) : null}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//             <div>
//               {row2.map((item, index) => {
//                 return (
//                   <div key={index}>
//                     <div
//                       onClick={() => {
//                         if (item.selected == false && item.empty == false) {
//                           alert("Already booked");
//                         } else {
//                           onSelectRow2(index);
//                         }
//                       }}
//                     >
//                       {item.empty == false && item.selected == true ? (
//                         <div>
//                           <BiSquareRounded
//                             style={{ backgroundColor: "green", margin: "5px" }}
//                           />
//                         </div>
//                       ) : item.empty == true && item.selected == false ? (
//                         <div>
//                           <BiSquareRounded style={{ margin: "5px" }} />
//                         </div>
//                       ) : item.empty == false && item.selected == false ? (
//                         <div>
//                           <BiSquareRounded
//                             style={{ backgroundColor: "8e8e8e", margin: "5px" }}
//                           />
//                         </div>
//                       ) : null}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//             <div>
//               {row3.map((item, index) => {
//                 return (
//                   <div key={index}>
//                     <div
//                       onClick={() => {
//                         if (item.selected == false && item.empty == false) {
//                           alert("Already booked");
//                         } else {
//                           onSelectRow3(index);
//                         }
//                       }}
//                     >
//                       {item.empty == false && item.selected == true ? (
//                         <div>
//                           <BiSquareRounded
//                             style={{ backgroundColor: "green", margin: "5px" }}
//                           />
//                         </div>
//                       ) : item.empty == true && item.selected == false ? (
//                         <div>
//                           <BiSquareRounded style={{ margin: "5px" }} />
//                         </div>
//                       ) : item.empty == false && item.selected == false ? (
//                         <div>
//                           <BiSquareRounded
//                             style={{ backgroundColor: "8e8e8e", margin: "5px" }}
//                           />
//                         </div>
//                       ) : null}
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewBook;
