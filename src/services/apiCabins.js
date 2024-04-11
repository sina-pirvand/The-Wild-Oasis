import supabase from "./supabase";

export const getCabins = async () => {
  // supabase provided code
  const { data, error } = await supabase.from("cabins").select("*");
  //

  if (error) {
    console.log(error);
    throw new Error("Couldn't Load Cbins");
  }

  return data;
};
