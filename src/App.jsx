import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MediaTypeProvider } from "./MediaType.provider";

import { ROUTE } from "./Routes.constants";

import PatientDetail from "./Routes/PatientDetails/PatientDetails.jsx";
import Layout from "./Components/Layout/index.js";
import PageNotFound from "./Routes/PageNotFound/index.js";
import PageComingSoon from "./Routes/PageComingSoon/PageComingSoon.jsx";

export function App() {
  return (
    <MediaTypeProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"*"} element={<PageNotFound />} />
          <Route element={<Layout />}>
            <Route path={"/"} element={<PatientDetail />} />
            <Route path={ROUTE.PATIENT_DETAILS} element={<PatientDetail />} />
            <Route
              path={ROUTE.SERVICE}
              element={<PageComingSoon title={"Service"} />}
            />
            <Route
              path={ROUTE.TASKS}
              element={<PageComingSoon title={"Tasks"} />}
            />
            <Route
              path={ROUTE.DOCTORS}
              element={<PageComingSoon title={"Doctors"} />}
            />
            <Route
              path={ROUTE.HOSPITAL_USER}
              element={<PageComingSoon title={"Users"} />}
            />
            <Route
              path={ROUTE.NURSE}
              element={<PageComingSoon title={"Nurse"} />}
            />
            <Route
              path={ROUTE.SERVER}
              element={<PageComingSoon title={"Server"} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </MediaTypeProvider>
  );
}
