export const ROUTE = {
  LOGIN: "/login",
  PATIENT_DETAILS: "/patient",
};

export const BOTTOM_NAV_ARRAY = [
  /**
   * if re-indexing needed, please check
   * the usages of BOTTOM_NAV_ARRAY for RBAC(entire code)
   */
  {
    name: "Patient",
    path: ROUTE.PATIENT_DETAILS,
    icon: "SVG-patient",
  },
];
