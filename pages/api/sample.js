import Podcast from "podcast";

/* lets create an rss feed */
const feed = new Podcast({
  title: "Srebalaji's Private Podcast",
  description: "Your private podcast. Powered by autopod",
  feedUrl: "http://example.com/rss.xml",
  siteUrl: "http://example.com",
  imageUrl: "http://example.com/icon.png",
  docs: "http://example.com/rss/docs.html",
  author: "Srebalaji",
  managingEditor: "Srebalaji",
  webMaster: "Srebalaji",
  copyright: "2021 Srebalaji",
  language: "en",
  // categories: ["Category 1", "Category 2", "Category 3"],
  pubDate: "Aug 25, 2021 04:00:00 GMT",
  ttl: 60,
  itunesAuthor: "Srebalaji",
  itunesSubtitle: "Private Podcast for Srebalaji",
  itunesSummary: "Private Podcast supported by autopod",
  itunesOwner: { name: "Srebalaji" }, //, email: "max@unsou.de" },
  itunesExplicit: false,
  // itunesCategory: [
  //   {
  //     text: "Entertainment",
  //     subcats: [
  //       {
  //         text: "Television",
  //       },
  //     ],
  //   },
  // ],
  itunesImage: "http://example.com/image.png",
});

/* loop over data and add to feed */
feed.addItem({
  title: "item title",
  description: "use this for the content. It can include html.",
  url: "https://www.huffpost.com/entry/twitter-forward-secrecy_n_4326599", // link to the item
  // guid: "1123", // optional - defaults to url
  // categories: ["Category 1", "Category 2", "Category 3", "Category 4"], // optional - array of item categories
  author: "Srebalaji", // optional - defaults to feed author property
  date: "Aug 25, 2021", // any format that js Date can parse.
  // lat: 33.417974, //optional latitude field for GeoRSS
  // long: -111.933231, //optional longitude field for GeoRSS
  enclosure: {
    url:
      "https://texttovoicesecond.s3.ap-south-1.amazonaws.com/f6de8689-d419-44a9-aa2d-f28cd37bcf78.mp3",
  }, // optional enclosure
  itunesAuthor: "Srebalaji",
  itunesExplicit: false,
  itunesSubtitle: "I am a sub title",
  itunesSummary: "I am a summary",
  // itunesDuration: 12345,
  // itunesNewFeedUrl: "https://newlocation.com/example.rss",
});

// cache the xml to send to clients
const xml = feed.buildXml();

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();
}
