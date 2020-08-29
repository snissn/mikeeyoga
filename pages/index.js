import Layout from '../components/layout'
var parseString = require('xml2js').parseString;


import "isomorphic-fetch"

async function xml2json(xml) {
  return new Promise((resolve, reject) => {
      parseString(xml, { explicitArray : false, ignoreAttrs : true }, function (err, json) {
          if (err)
              reject(err);
          else
              resolve(json);
      });

  });
}

async function getVideoProps(videoId){

  const youtube = await fetch("https://bold-meadow-4a42.mike4921.workers.dev/?https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v="+videoId+"&format=json")
  var data = await youtube.json()
  return data;
}

 
 function Index({video}){
 
   
  console.log(video);
   const videoUrl = 'https://www.youtube-nocookie.com/embed/'+video['yt:videoId'];
   console.log(video);
  return (
  <Layout>
    <section className="section">
      <div className="container has-text-centered">
      <h1 className="title">Hello I'm Mikee</h1> 

        <p><img  src="/Hello.png" /></p>




         
      </div>
    </section>
    <section className="section bottom">
      <div className="container has-text-centered">
    <p className="video" >
        
        <iframe width={video.data.thumbnail_width} style={{height:video.data.thumbnail_height,width:video.data.thumbnail_width}} height={video.data.thumbnail_height} src={videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        </p>
        <p><h1 className="title">My latest yoga video</h1></p>
        
         
      </div>
    </section>


    <style jsx>{`
        
        section {
          background: #24589f;
          
        }
        .section.bottom{
          background:#1d2110;
        }
        .card{ }
        h1{
          color: #f8f8ff;

        }
        .video, .video > iframe{
          
        }
  
      `}</style>


  </Layout>
);

      }

      Index.getInitialProps = async ctx => {
        let youtube;
        
         youtube = await fetch("https://bold-meadow-4a42.mike4921.workers.dev/?https://www.youtube.com/feeds/videos.xml?channel_id=UC5wC5_0J9Qa6MxXoI8DPUAg")
        
        
        let xml = await youtube.text();
        var x = await xml2json(xml);
         parseString(xml, { explicitArray : false, ignoreAttrs : true },function (err, result) {
          const feed = result['feed']['entry']
          //console.dir((feed));
      });
      const feed = x['feed']['entry']
      var video = feed[0];
   
      var data = await getVideoProps(feed[0]['yt:videoId'])
      console.log('data');
      video['data'] = data;
      console.log(data);
   
        return {video}
      }
      export default Index;
