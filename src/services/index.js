const baseURL = "http://localhost:6005";

export const get = async (url) => {
  try {
    const response = await fetch(`${baseURL}/${url}`);
    //console.log(response)
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};