// import React from 'react'

// export default function RootNavigation() {
//   return (
//     <div>RootNavigation</div>
//   )
// }

import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

//The React.lazy() function allows you to render a dynamic import as a normal component.
// It makes it simple to construct components that are loaded dynamically yet rendered as 
//regular components. When the component is rendered, the bundle containing it is automatically loaded.

// const SignIn = React.lazy(() => import("../screens/Account/SignIn"));
// const ResetPassword = React.lazy(
//   () => import("../screens/Account/ResetPassword")
// );
// const SetPassword = React.lazy(() => import("../screens/Account/SetPassword"));
// const ForgotPassword = React.lazy(
//   () => import("../screens/Account/ForgotPassword")
// );
// const NotFound = React.lazy(() => import("../screens/Account/NotFound"));
// const ConsumerList = React.lazy(
//   () => import("../screens/Consumer/ConsumerList")
// );
const Dashboard = React.lazy(() => import("../Screens/Dashboard"));
// const SupplierList = React.lazy(
//   () => import("../screens/Supplier/SupplierList")
// );
// const CategoryProduct = React.lazy(
//   () => import("../screens/CategoryProduct/CategoryProduct")
// );
// const TaxList = React.lazy(() => import("../screens/Tax/TaxList"));
// const UnitList = React.lazy(() => import("../screens/Unit/UnitList"));
// const PurchaseList = React.lazy(
//   () => import("../screens/Purchase/PurchaseList")
// );
// const SaleList = React.lazy(() => import("../screens/Sale/SaleList"));
// const StockList = React.lazy(() => import("../screens/Stock/StockList"));
// const UserList = React.lazy(() => import("../screens/User/UserList"));
// const StaffList = React.lazy(() => import("../screens/Staff/StaffList"));
// const BranchList = React.lazy(() => import("../screens/Branch/BranchList"));
// const BuyerList = React.lazy(() => import("../screens/Buyer/BuyerList"));
// const CategoryList = React.lazy(
//   () => import("../screens/CategoryProduct/CategoryList")
// );
// const MyProfilePage = React.lazy(
//   () => import("../screens/Myprofile/MyProfilePage")
// );
// const GstReport = React.lazy(() => import("../screens/GSTReport/GSTReport"));
// const SupplierSave = React.lazy(
//   () => import("../screens/Supplier/SupplierSave")
// );
// const ProductSave = React.lazy(
//   () => import("../screens/CategoryProduct/ProductSave")
// );
// const TaxSave = React.lazy(() => import("../screens/Tax/TaxSave"));
// const UnitSave = React.lazy(() => import("../screens/Unit/UnitSave"));
// const ManageUser = React.lazy(() => import("../screens/User/ManageUser"));
// const StaffSave = React.lazy(() => import("../screens/Staff/StaffSave"));
// const BranchSave = React.lazy(() => import("../screens/Branch/BranchSave"));
// //const PurchaseSaveNew = React.lazy(() => import('../screens/Purchase/PurchaseSaveNew'));
// const PurchaseSave = React.lazy(
//   () => import("../screens/Purchase/PurchaseSave")
// );
// const SaleSave = React.lazy(() => import("../screens/Sale/SaleSave"));
// const SaleSaveReturn = React.lazy(
//   () => import("../screens/SaleReturn/SaleSaveReturn")
// );
// const SaleListReturn = React.lazy(
//   () => import("../screens/SaleReturn/SaleListReturn")
// );
// //const SaleSaveNew = React.lazy(() => import('../screens/Sale/SaleSaveNew'));
// const UserSave = React.lazy(() => import("../screens/User/UserSave"));
// const InvoiceSetting = React.lazy(
//   () => import("../screens/InvoiceSetting/InvoiceSetting")
// );
// const ConsumerSave = React.lazy(
//   () => import("../screens/Consumer/ConsumerSave")
// );
// const CategorySave = React.lazy(
//   () => import("../screens/CategoryProduct/CategorySave")
// );
// const BuyerSave = React.lazy(() => import("../screens/Buyer/BuyerSave"));
const Navbar = React.lazy(() => import("./Navbar"));

export default function RootNavigation() {
  return <RootNavigator />;
}

function RootNavigator() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route component={Dashboard} path="/" exact={true} />
        </Switch>
      </BrowserRouter>
    </>
  );
}


