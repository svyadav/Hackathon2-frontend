// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";
// const Theatre = () => {
//   const navigate = useNavigate();



//   return (
//     <>
//       <div className="movie-hall">
//         <div className="book-title">
//           <div>
//             <h1 class="fav-seat">Book your favourite seat</h1>
//           </div>
//           <div>
//             <Button
//               class="all-theatre"
//               variant="primary"
//               onClick={() => navigate("/theatreDetails")}
//             >
//               AllTheatre
//             </Button>
//             </div>
        
//         </div>

//         <div className="movie-container">
//           <label>Select a movie</label>
//           <select id="movie">
//             <option value="10">Dabbang ($10)</option>
//             <option value="20">Chak de India ($20)</option>
//             <option value="25">Bhahubali ($25)</option>
//             <option value="15">Raone ($15)</option>
//           </select>
//         </div>
//         <ul className="showcase">
//           <li>
//             <div className="seat"></div>
//             <small>N/A</small>
//           </li>
//           <li>
//             <div className="seat selected"></div>
//             <small>selected</small>
//           </li>
//           <li>
//             <div className="seat occupied"></div>
//             <small>Occupied</small>
//           </li>
//         </ul>
//         <div className="seat-container">
//           <div className="screen"></div>
//           <div className="movie-row">
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat occupied"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//           </div>
//           <div className="movie-row">
//             <div className="seat"></div>
//             <div className="seat occupied"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//           </div>
//           <div className="movie-row">
//             <div className="seat"></div>
//             <div className="seat occupied"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat occupied"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat occupied"></div>
//           </div>
//           <div className="movie-row">
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//           </div>
//           <div className="movie-row">
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//           </div>
//           <div className="movie-row">
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//             <div className="seat"></div>
//           </div>
//         </div>
//         <p className="text">
//           you have selected <span id="count">0 </span> seats for a price of ${" "}
//           <span id="total"> 0</span>
//         </p>
//       </div>
//     </>
//   );
// };

// export default Theatre;
