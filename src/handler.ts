import { Router } from 'itty-router'

import discoveryRoute from "./discovery/discover.route";

const router = Router();

//set Routes
[...discoveryRoute].map(route => {
  const httpAction = router[route.method];
  httpAction(route.path, route.handler);
})

//Handling everything else
//router.get('*', () => new Response("Not Allowed!", { status: 403 }))

export const handleRequest = (request: Request) => router.handle(request)
