import supabase from "./supabase";

// READ CABINS
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

// DELETE CABIN
export const deleteCabin = async (id) => {
  // supabase doc provided code
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  //

  if (error) {
    throw new Error("Couldn't Delete Cabin");
  }

  return data;
};

// CREATE NEW CABIN
export const createCabin = async (newCabin) => {
  // SUPABASE API DOC CODE
  const { data, error } = await supabase
    .from("cabins")
    // .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .insert([newCabin])
    .select();
  //

  if (error) {
    throw new Error("Couldn't Create Cabin");
  }

  return data;
};
