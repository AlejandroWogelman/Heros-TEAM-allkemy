export const optimiceData = (data) => {
  if (data) {
    const { name, image, work, appearance, biography, id } = data;

    return {
      nombre: name,
      image: image?.url,
      height: appearance?.height,
      weight: appearance?.weight,
      ojos: appearance?.["eye-color"],
      pelo: appearance?.["hair-color"],
      aliases: biography?.aliases,
      work: work?.occupation,
      id: id,
    };
  }
};
