import Layout from '../components/layout'
import YT from '../components/yt'
var parseString = require('xml2js').parseString;


import "isomorphic-fetch"

async function xml2json(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, { explicitArray: false, ignoreAttrs: true }, function (err, json) {
      if (err)
        reject(err);
      else
        resolve(json);
    });

  });
}

async function getVideoProps(videoId) {

  const youtube = await fetch("https://bold-meadow-4a42.mike4921.workers.dev/?https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=" + videoId + "&format=json")
  var data = await youtube.json()
  return data;
}


function Youtube({ feed }) {

  return (
    <Layout>
      <section className="section">

        <div className="container has-text-centered ">
          <div className="column">
            {feed.map((video, index) => {
              console.log(video)

              return (


                <YT video={video} />


              )

            })}
          </div>






        </div>
      </section>

    </Layout>
  );

}

Youtube.getInitialProps = async ctx => {
  let youtube;

  youtube = await fetch("https://bold-meadow-4a42.mike4921.workers.dev/?https://www.youtube.com/feeds/videos.xml?channel_id=UC5wC5_0J9Qa6MxXoI8DPUAg")


  let xml = await youtube.text();
  var x = await xml2json(xml);
  parseString(xml, { explicitArray: false, ignoreAttrs: true }, function (err, result) {
    const feed = result['feed']['entry']
    //console.dir((feed));
  });
  const feed = x['feed']['entry']
  return { feed }
}
export default Youtube;
