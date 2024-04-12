import supabase from "./supabase";

export const getCabins = async () => {
  // supabase provided code
  const { data, error } = await supabase.from("cabins").select("*");
  //

  if (error) {
    console.log(error);
    throw new Error("Couldn't Load Cabins");
  }

  return data;
};

export const deleteCabin = async (id) => {
  // supabase doc provided code
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  //

  if (error) {
    console.log(error);
    throw new Error("Couldn't Delete Cabin");
  }

  return data;
};
