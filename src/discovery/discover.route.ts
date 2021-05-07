import discoveryController from "./discover.controller";

const routes: any = [
    {
        method: "get",
        path: "/discovery/pincode",
        handler: discoveryController.getSlotsByPins
    },
    {
        method: "post",
        path: "/discovery/districts",
        handler: discoveryController.getSlotsByDistricts
    }
];

export default routes;