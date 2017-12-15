Image search app
================
##### You can get the image URLs, alt text and page urls for a set of images relating to a given search string

Example input:

*https://wide-drawer.glitch.me/api/imagesearch/golf*

Example output:

*[{"img_url": "https://cdn-s3.si.com/styles/marquee_large_2x/s3/images/trump-5.jpg","alt_text": "First Golfer: Donald Trump's relationship with golf has never been ...","page_url": "http://www.golf.com/tour-news/2017/08/01/president-donald-trump-relationship-golf-more-complicated-now"}, ...]*

##### You can paginate through the responses by adding a ?offset=2 parameter to the URL

Example input:

*https://wide-drawer.glitch.me/api/imagesearch/golf?offset=2*

Example output:

*[{"img_url": "http://www.golfwang.com/template/images/golfwang-store-share-image.jpg","alt_text": "Golf Wang","page_url": "http://www.golfwang.com/"}, ...]*

##### You can get a list of the most recently submitted search strings

Example input:

*https://wide-drawer.glitch.me/api/latest/imagesearch/*

Example output:

*[{"term": "golf","when": "Fri Dec 15 2017 16:04:54 GMT+0000 (UTC)"},{"term": "golf","when": "Fri Dec 15 2017 16:03:39 GMT+0000 (UTC)"},{"term": "disney","when": "Fri Dec 15 2017 15:56:14 GMT+0000 (UTC)"}, ...]*
