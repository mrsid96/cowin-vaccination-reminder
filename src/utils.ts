const generateResponse = (body: any) =>
  new Response(JSON.stringify(body), {
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })

export default {
  generateResponse,
}
