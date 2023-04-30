const reqUrl = `https://server-api-peach.vercel.app/api/videos`;
fetch(reqUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById(
            'videoId_new'
        ).href = `https://www.youtube.com/watch?v=${data[0].id}`;
        document.getElementById('videoThumbnail_new').src = data[0].thumbnail;
        document.getElementById('videoTittle_new').innerHTML = data[0].title;
    })
    .catch(error => console.error(error));