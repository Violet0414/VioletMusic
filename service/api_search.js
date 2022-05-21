import myRequest from "./index"

export function getHotWords() {
  return myRequest.get("/search/hot")
}

export function getSearchWords(keywords) {
  return myRequest.get("/search/suggest", {
    keywords,
    type: "mobile"
  })
}