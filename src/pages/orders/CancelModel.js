import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import "../../pages/view.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function createData(srno, name, qty, amount) {
  return { srno, name, qty, amount };
}

const rows = [
  createData(1, "Pizza ", 10, 1000),
  createData(2, "Burger", 20, 1000),
];

const ConfirmModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <button
        style={{ color: "white", backgroundColor: "#ff5c8e" }}
        type="button"
        onClick={handleOpen}
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
        Cancel
      </button>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
           {/*<div class="flex justify-end active">
            <div class="backIcon">
             <button onClick={handleClose}>
                <AiOutlineRollback />
  </button>
            </div>
          </div>*/}
          <h1 class="font-bold leading-tight text-4xl mt-0 mb-0 text-blue-600">
            Order Cancellation
          </h1>
          <h4>
              Order NO: F02222200000
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.srno}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
                </TableContainer>
          <div style={{ paddingTop: 15 }}></div>
          <div class="flex space-x-2 justify-end">
            <button type="button"  class="backButton" onClick={handleClose}>
              Cancel
                </button>
            <button type="button" class="addButton">
              Confirm
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmModal;
