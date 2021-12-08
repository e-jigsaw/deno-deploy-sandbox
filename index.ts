import { cron } from "https://deno.land/x/deno_cron@v1.0.0/cron.ts";

cron('0 * * * * *', () => {
  console.log(new Date())
})
