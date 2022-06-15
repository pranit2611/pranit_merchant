import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { createContext, useContext, useState } from "react";
import "../../pages/view.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as ReactDOM from "react-dom";

//icon
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// function createData(srno, name, qty, unit, amount) {
//   return { srno, name, qty, unit, amount };
// }

const rows = [
  createData(1, 1, "Pizza GardenDelight", 4, 450),
  createData(2, 2, "Veg Cheese Burger", 2, 80),
];

function priceRow(qty, unit) {
  return qty * unit;
}

const handleDecrement = (id, e) => {
  rows.map((row) => {
    if (id === row.id) {
      row.qty = row.qty - 1;
      row.price = row.qty * row.unit;
      invoiceSubtotal = subtotal(rows);
      console.log(row.qty);
      console.log(row.price);
      console.log(invoiceSubtotal);
    }
  });
};

const handleIncrement = (id, e) => {
  rows.map((row) => {
    if (id === row.id) {
      row.qty = row.qty + 1;
      row.price = row.qty * row.unit;
      invoiceSubtotal = subtotal(rows);
      console.log(row.qty);
      console.log(row.price);
      console.log(invoiceSubtotal);
    }
  });
};

function createData(id, srno, name, qty, unit) {
  const price = priceRow(qty, unit);
  return { id, srno, name, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

let invoiceSubtotal = subtotal(rows);

const ConfirmModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //UseState
  // const [quantity, setQuantity] = useState([]);

  // const handleIncrement = (qty) => {
  //   setQuantity((rows) =>
  //     rows.map((row) => {
  //       qty === row.qty ? { ...row, qty: row.qty + 1 } : row;
  //     })
  //   );
  // };

  // const handleDecrement = (qty) => {
  //   setQuantity((rows) =>
  //     rows.map((row) => {
  //       qty === row.qty ? { ...row, qty: row.qty - 1 } : row;
  //     })
  //   );
  // };

  // const handleDecrement = (card_id) => {
  //   createData((rows) =>
  //     rows.map((row) => {
  //       card_id === row.id ? { ...row, qty: row.qty - 1 } : row;
  //     })
  //   );
  // };

  // const handleIncrement = (card_id) => {
  //   createData((rows) =>
  //     rows.map((row) => {
  //       card_id === row.id ? { ...row, qty: row.qty + 1 } : row;
  //     })
  //   );
  // };

  // var ReactDOM = require("react-dom");

  const handleChange = (e) => {
    createData(e.target.value);
    e.preventDefault();
  };

  // function changeHandle(e) {
  //   e.preventDefault();
  //   createData(e.target.value);
  // }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <button
        style={{ color: "white", backgroundColor: "#8be78b" }}
        type="button"
        onClick={() => handleOpen()}
        class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
      >
        Confirm
      </button>
      <Modal
        open={open}
        onChange={() => handleChange(e)}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="flex justify-end active">
            <div class="backIcon">
              <button onClick={handleClose}>
                <AiOutlineRollback />
              </button>
            </div>
          </div>
          <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
            Order Confirmation
          </h4>
          <form>
            <div className="grid xl:grid-cols-2  m:gap-2">
              <div class="relative z-0 p-2 w-full mb-6 group">
                <label
                  for="orderno"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  Order No
                </label>
                <input
                  type="text"
                  class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="orderno"
                  placeholder="F02222200000"
                />
              </div>
              <div class="relative z-0 p-2 w-full mb-6 group">
                <label
                  for="date"
                  class="form-label inline-block mb-2 text-gray-700"
                >
                  Pick Up Date & Time
                </label>
                <input
                  type="datetime-local"
                  class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="date"
                  placeholder="Select Data & Time"
                />
              </div>
            </div>
          </form>
          <TableContainer onChange={() => handleChange()} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Unit Price</TableCell>
                  <TableCell align="center">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, id) => (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.srno}
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell
                      align="center"
                      // style={{
                      //   marginLeft: 50,
                      //   marginTop: 30,
                      //   display: "flex",
                      // }}
                    >
                      <div
                        className="input-group"
                        style={{ display: "flex", marginLeft: 35 }}
                      >
                        <button
                          style={{
                            marginRight: 20,
                            fontSize: 28,
                            color: "#ff5c8e",
                          }}
                          type="button"
                          className="input-group-text"
                        >
                          <AiFillMinusCircle
                            onClick={() => handleDecrement(row.id)}
                          />
                          {/* <AiFillMinusCircle
                            onClick={() => handleDecrement(row.name)}
                            style={{
                              marginRight: 20,
                              fontSize: 25,
                              color: "#ff5c8e",
                            }}
                          /> */}
                        </button>
                        <div
                          className="form-control text-center"
                          style={{
                            fontWeight: "bold",
                            alignContent: "center",
                            padding: 10,
                          }}
                        >
                          {row.qty}
                        </div>
                        <button
                          style={{
                            marginLeft: 20,
                            fontSize: 28,
                            color: "#8be78b",
                          }}
                          type="button"
                          className="input-group-text"
                        >
                          <AiFillPlusCircle
                            onClick={() => handleIncrement(row.id)}
                          />
                          {/* <AiFillPlusCircle
                            onClick={() => handleIncrement(row.name)}
                            style={{
                              marginLeft: 20,
                              fontSize: 25,
                              color: "#8be78b",
                            }}
                          /> */}
                        </button>
                      </div>
                    </TableCell>
                    <TableCell align="center">{row.unit}</TableCell>
                    <TableCell align="center">{row.price}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell style={{ fontWeight: "bold" }} align="center">
                    Subtotal
                  </TableCell>
                  <TableCell
                    style={{ fontWeight: "bold", color: "#03c9d7" }}
                    align="center"
                  >
                    {invoiceSubtotal}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <div style={{ paddingTop: 15 }}></div>
          <div class="flex space-x-2 justify-end">
            <button
              type="button"
              class="backButton"
              style={{ width: "15%" }}
              onClick={handleClose}
            >
              Back
            </button>
            <button type="button" class="addButton" style={{ width: "15%" }}>
              Confirm
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmModal;


// import * as React from "react";

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import { Link } from "react-router-dom";
// import { AiOutlineRollback } from "react-icons/ai";
// import "../../pages/view.css";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 800,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// function createData(srno, name, UnitPrice, amount) {
//   return { srno, name, UnitPrice, amount };
// }

// const rows = [
//   createData(1, "Pizza ", 1000 , 1000),
//   createData(2, "maggi ", 1000 , 1000),
// ];

// const ConfirmModal = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [Quantity, setQuentity]= React.useState(1)
//   const [Amount, setAmount]= React.useState(1000)

// // increment and decrement using hooks start

//   const handleDecrement =()=>{
//     if(Quantity>1){
//     setQuentity(prevCount=> prevCount-1);
//     setAmount(prevAmount=> prevAmount-1000 );
//   }
//   }
//   const handleIncrement =()=>{
    
//     setQuentity(prevCount=> prevCount+1);
//     setAmount(prevAmount=> prevAmount+1000 );
  
//   }
//   // increment and decrement using hooks end
//   return (
//     <div>
//       {/* <Button onClick={handleOpen}>Open modal</Button> */}
//       <button
//         style={{ color: "white", backgroundColor: "#8be78b" }}
//         type="button"
//         onClick={handleOpen}
//         class="px-6
//       py-2.5
//       bg-blue-600
//       text-white
//       font-medium
//       text-xs
//       leading-tight
//       uppercase
//       rounded
//       shadow-md
//       hover:bg-blue-700 hover:shadow-lg
//       focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
//       active:bg-blue-800 active:shadow-lg
//       transition
//       duration-150
//       ease-in-out"
//       >
//         Confirm
//       </button>
//        <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//           <Box sx={style}>
//            {/*<div class="flex justify-end active">
//             <div class="backIcon">
//              <button onClick={handleClose}>
//                 <AiOutlineRollback />
//   </button>
//             </div>
//           </div>*/}
//           <h4 class="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
//             Order Confirmation
//           </h4>
//           <form>
//             <div className="grid xl:grid-cols-2  m:gap-2">
//               <div class="relative z-0 p-2 w-full mb-6 group">
//                 <label
//                   for="orderno"
//                   class="form-label inline-block mb-2 text-gray-700"
//                 >
//                   Order No
//                 </label>
//                 <input
//                   type="text"
//                   class="form-control
//         block
//         w-full
//         px-3
//         py-1.5
//         text-base
//         font-normal
//         text-gray-700
//         bg-white bg-clip-padding
//         border border-solid border-gray-300
//         rounded
//         transition
//         ease-in-out
//         m-0
//         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                   id="orderno"
//                   placeholder="F02222200000"
//                 />
//               </div>
//               <div class="relative z-0 p-2 w-full mb-6 group">
//                 <label
//                   for="date"
//                   class="form-label inline-block mb-2 text-gray-700"
//                 >
//                   Pick Up Date & Time
//                 </label>
//                 <input
//                   type="datetime-local"
//                   class="form-control
//         block
//         w-full
//         px-3
//         py-1.5
//         text-base
//         font-normal
//         text-gray-700
//         bg-white bg-clip-padding
//         border border-solid border-gray-300
//         rounded
//         transition
//         ease-in-out
//         m-0
//         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//                   id="date"
//                   placeholder="Select Data & Time"
//                 />
//               </div>
//             </div>
//           </form>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell align="Center">#</TableCell>
//                   <TableCell align="Center">Name</TableCell>
//                   <TableCell align="Center">Quantity</TableCell>
//                   <TableCell align="Center">Unit Price</TableCell>
//                   <TableCell align="Center">Amount</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {rows.map((row) => (
//                   <TableRow
//                     key={row.name}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     <TableCell component="th" scope="row">
//                       {row.srno}
//                     </TableCell>
//                     <TableCell align="Center">{row.name}</TableCell>
//                     <TableCell align="center">
//                     <div
//                         className="input-group"
//                         style={{ display: "flex", marginLeft: 35 }}
//                       >
//                         <button
//                           style={{
//                             marginright: 20,
//                             fontSize: 28,
//                             color: "#ff5c8e",
//                           }}
//                           type="button"
//                           onClick={() => handleDecrement(row.srno)}
//                           className="input-group-text"
//                         >
//                           <AiFillMinusCircle />
//                           {/* <AiFillMinusCircle
//                             onClick={() => handleDecrement(row.name)}
//                             style={{
//                               marginCenter: 20,
//                               fontSize: 25,
//                               color: "#ff5c8e",
//                             }}
//                           /> */}
//                         </button>
//                         <div
//                           className="form-control text-Center"
//                           style={{
//                             fontWeight: "bold",
//                             alignContent: "Center",
//                             padding: 10,
//                           }}
//                         >
//                           {Quantity}
//                         </div>
//                         <button
//                           style={{
//                             marginCenter: 20,
//                             fontSize: 28,
//                             color: "#8be78b",
//                           }}
//                           type="button"
//                           onClick={() => handleIncrement(row.srno)}
//                           className="input-group-text"
//                         >
//                           <AiFillPlusCircle />
//                           {/* <AiFillPlusCircle
//                             onClick={() => handleIncrement(row.name)}
//                             style={{
//                               marginLeft: 20,
//                               fontSize: 25,
//                               color: "#8be78b",
//                             }}
//                           /> */}
//                         </button>
//                       </div>
//                     </TableCell>
//                     <TableCell align="Center">{row.UnitPrice}</TableCell>
//                     <TableCell align="Center">{Amount}</TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <div style={{ paddingTop: 15 }}></div>
//           <div class="flex space-x-2 justify-end">
//             <button type="button" class="backButton" onClick={handleClose}>
//               Close
//                 </button>
//             <button type="button" class="addButton">
//               Confirm
//             </button>
//           </div>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default ConfirmModal;
