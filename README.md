# butlerBot

## functions

- utils

  - push
    - params:
      - array {array}
      - element {any}
    - returns: {array} latitude and longitude of seeked point
    - usage exemple: `use Fn("utils", action = "push", array = ["toto", "tata"], element = "tutu") as array // array = ["toto", "tata", "tutu"]`

  - split
    - params:
      - string {string}
      - separator {string}
    - returns: Array of strings
    - usage exemple: `use Fn("utils", action = "split", string = "hello world", separator = " ") as words // words = ["hello", "world"]`

- openTrip

  - Environment variables : APPID, Get your token at [https://dev.opentripmap.com/](https://dev.opentripmap.com/)

  - getCityCoord
    - params: query {string} city name
    - returns: {object} latitude and longitude of seeked point
    - usage exemple: `use Fn("openTrip", action = "getCityCoord", query = "paris")`

  - getAttractionList
    - params:
      - kind {string} list of coma separated attraction types from openTrip API
      - radius {string} maximum distance from coordinates lat and lon
      - lat {string} latitude
      - lon {string} longitude
    - returns: Array of attractions corresponding to of of kind parameters, within radius of lat and lon point.
    - usage exemple: `use Fn("openTrip", action = "getAttractionList", kind = restaurants, museums", radius = "500", lat = "48.09876", lon = "0.34809")`

  - getAttractionDetails
    - params: xid {string} should be a valid openTrip API xid
    - returns: {object} details of the attraction
    - usage exemple : `use Fn("openTrip", action = "getAttractionDetails", xid = N56438")`
