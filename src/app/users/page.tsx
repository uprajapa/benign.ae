import { createClient } from "../../../utils/supabase/server";

export default async function Users() {
  const supabase = await createClient();
  const { data : users }  = await supabase.from("users").select();
  console.log(users);
  return <>{JSON.stringify(users)}</>
}
