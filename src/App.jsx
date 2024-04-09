import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MediaTypeProvider } from "./MediaType.provider";
// import Loader from "./Components/Loader";

import { ROUTE } from "./Routes.constants";

import PatientDetail from "./Routes/PatientDetails/PatientDetails.jsx";
import Layout from "./Components/Layout/index.js";

// const SplashScreen = lazy(() => import("./Routes/SplashScreen"));

export function App() {
  return (
    <MediaTypeProvider>
      <BrowserRouter>
        {/* <Suspense
          fallback={
            <Loader
              hasWrapper={true}
              classList={["md blue"]}
              customHeight={"100vh"}
            />
          }
        > */}
        <Routes>
          {/* <Route path={"*"} element={<PageNotFound />} /> */}
          {/* <Route path={ROUTE.SPLASH_SCREEN} element={<SplashScreen />} /> */}
          {/* <Route path={ROUTE.OAUTH_LOGIN} element={<RCLogin />} /> */}
          <Route element={<Layout />}>
            <Route path={"/"} element={<PatientDetail />} />
            <Route path={ROUTE.PATIENT_DETAILS} element={<PatientDetail />} />
            <Route path={ROUTE.SERVICE} element={<PatientDetail />} />
            <Route path={ROUTE.TASKS} element={<PatientDetail />} />
          </Route>
        </Routes>
        {/* </Suspense> */}
      </BrowserRouter>
    </MediaTypeProvider>
  );
}
