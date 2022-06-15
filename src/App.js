import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Merchant,
  Calendar,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";

// Authentication
import Auth from "./pages/login/Login";

//MainPage
import ManageItem from "./pages/manageItem/ManageItem";
import Orders from "./pages/orders/Orders";
import Employees from "./pages/employee/Employees";
import Voucher from "./pages/voucher/Voucher";
import Invoice from "./pages/invoice/Invoice";
import DeliveryRate from "./pages/deliveryRate/DeliveryRate";
import MerchantOffer from "./pages/merchantOffer/MerchantOffer";
{/*import MerchantType from "./pages/merchantType/MerchantType";*/}

import { useStateContext } from "./contexts/ContextProvider";


import ConfirmOrder from "./pages/orders/ConfirmOrder";
// import DeleteIcon from "./pages/orders/DeleteIcon";

//AddPanels
import AddManageItem from "./pages/manageItem/AddManageItem";
import AddEmployee from "./pages/employee/AddEmployee";
import AddVoucher from "./pages/voucher/AddVoucher";
import AddInvoice from "./pages/invoice/AddInvoice";
import AddDelivery from "./pages/deliveryRate/AddDelivery";
import AddMerchantType from "./pages/merchantType/AddMerchantType";

//ViewPabels
import ViewManageItem from "./pages/manageItem/ViewManageItem";
import ViewEmployee from "./pages/employee/ViewEmployee";
import ViewOrder from "./pages/orders/ViewOrder";
import ViewMerchant from "./pages/merchantOffer/ViewMerchant";
import ViewVoucher from "./pages/voucher/ViewVoucher"
import ViewDelivery from "./pages/deliveryRate/ViewDelivery"

//EditPanels

import EditManageItem from "./pages/manageItem/EditManageItem";
import EditOrder from "./pages/orders/EditOrder";
import EditEmployee from "./pages/employee/EditEmployee";
import EditVoucher from "./pages/voucher/EditVoucher";
import EditDelivery from "./pages/deliveryRate/EditDelivery";
import EditMerchantOffer from "./pages/merchantOffer/EditMerchantOffer";



const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: "50%" }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={<Merchant />} />
                <Route path="/merchant" element={<Merchant />} />

                {/* authentication */}
                <Route path="/login" element={<Auth />} />

                {/* pages  */}

                <Route path="/manageItem" element={<ManageItem />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/voucher" element={<Voucher />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/deliveryrate" element={<DeliveryRate />} />
                <Route path="/merchantoffer" element={<MerchantOffer />} />
                {/*<Route path="/MerchantType" element={<MerchantType />} />*/}

                <Route path="/Orders/ConfirmOrder" element={<ConfirmOrder/>}/>
                {/* <Route path="/Orders/DeleteIcone" element={< DeleteIcon/>}/> */}


                {/* apps  */}
                {/* <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} /> */}

                {/* AddPath  */}
                <Route path="/manageItem/add" element={<AddManageItem />} />
                <Route path="/employees/add" element={<AddEmployee />} />
                <Route path="/voucher/add" element={<AddVoucher />} />
                <Route path="/invoice/add" element={<AddInvoice />} />
                <Route path="/deliveryrate/add" element={<AddDelivery />} />
                <Route path="/MerchantType/add" element={<AddMerchantType/>} />




                {/* ViewPath  */}
                <Route path="/manageItem/view" element={<ViewManageItem />} />
                <Route path="/Employee/view" element={<ViewEmployee />} />
                <Route path="/Order/view" element={<ViewOrder/>}/>
                <Route path="/Voucher/view" element={<ViewVoucher/>}/>
                <Route path="/merchantoffer/view" element={<ViewMerchant/>}/>
                <Route path="/DeliveryRate/view" element={<ViewDelivery/>}/>

                {/* EditPath  */}
                <Route path="/manageItem/edit" element={<EditManageItem />} />
                <Route path="/orders/edit" element={<EditOrder />} />
                <Route path="/employees/edit" element={<EditEmployee />} />
                <Route path="/voucher/edit" element={<EditVoucher />} />
                <Route path="/deliveryrate/edit" element={<EditDelivery />} />
                <Route
                  path="/merchantoffer/edit"
                  element={<EditMerchantOffer />}
                />

                {/* charts  */}
                {/* <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
