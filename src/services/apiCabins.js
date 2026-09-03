import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) throw new Error("Cabins could not be loaded");

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = typeof newCabin.image === "string";
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //* 1) Upload Image
  if (!hasImagePath) {
    const { error: errorStorage } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (errorStorage) throw new Error("Image could not be uploaded");
  }

  //* 2) Create Cabin
  if (!id) {
    const { data, error } = await supabase
      .from("cabins")
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .single();

    if (error) throw new Error("Cabin could not be created");
    return data;
  }
  //* 3) Edit Cabin
  if (id) {
    const { data, error } = await supabase
      .from("cabins")
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error("Cabin could not be updated");
    return data;
  }
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("Cabin could not be deleted");
}
