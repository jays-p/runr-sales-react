// import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
// import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "../../components/ecommerce/StatisticsChart";
// import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
// import RecentOrders from "../../components/ecommerce/RecentOrders";
// import DemographicCard from "../../components/ecommerce/DemographicCard";
// import PageMeta from "../../components/common/PageMeta";
import React, { useState, useEffect } from "react";
import { getDateTab } from "../../utilis";
import ClientTable from "../Tables/ClientTables";


export default function CreatorTable() {
  return (
    <>
    <ClientTable></ClientTable>
    {/* <div className="px-5 py-4">
        <div className="is-flex is-gap-4 is-align-items-center is-justify-content-space-between">
          <div className="card-title">
            <h1 className="fs-5 fw-600 lh-1">Creator</h1>
            <ul className="breadcrumbs mt-1">
              <li>
                <a href="/masters">Masters</a>
              </li>
              <li className="active">Creator</li>
            </ul>
          </div>
          <div className="is-flex is-align-items-center is-justify-content-end is-gap-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              // value={search}
              // onChange={(e) => {
              //   setSearch(e.target.value);
              //   setCurrentPage(1);
              // }}
            />
            <button
              className="btn btn-primary"
              // onClick={() => {
              //   setActiveSidebar({ type: "add", data: null });
              //   setCreatorForm({ name: "", mobile: "", email: "" }); // reset form
              //   setErrors({}); // reset validation errors
              // }}
            >
              Add
            </button>
          </div>
        </div>
      </div> */}
      
    </>
  );
}
