import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

console.log("Listening on http://localhost:8000");
serve(async (_req) => {
  await fetch(Deno.env.get('DISCORD_WEBHOOK_POE'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: 'hello'
    })
  })
  return new Response("ok", {
    headers: { "content-type": "text/plain" },
  });
});
