/**
 *Get the url of the video from fastAPI api
 * @returns
 */

export default async function fetchFastApi(url) {
  let idVideo = getIdVideo(url);
  const encodedIdVideo = btoa(idVideo);
  return await fetch(
    `https://fastapi-testvideo-production.up.railway.app/${encodedIdVideo}`
  ).then((response) => {
    return response.json();
  });
}

const getIdVideo = (url) => {
  var idFinal;
  const videoId = url.match(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
  );
  if (videoId && videoId[7]) {
    idFinal = videoId[7];
  }
  return idFinal;
};
