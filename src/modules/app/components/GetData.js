import ApiCall from './../../Stub/ApiCall'
let GeoCordinates = ''
let GetWData = (text) => {
  //Get Weather Place id For Yahoo Weather Search
  var GetWeatherPlaceIdUrl = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places where text="${text}") | tail(count=1)&format=json`
  return ApiCall(GetWeatherPlaceIdUrl)

}


export { GetWData }