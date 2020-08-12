$(document).ready(function(){
    var key ='*********************************';
    var playlistid='PL2fnLUTsNyq78qZr2WopX7QcGBpxcmzzG';
    var URL='https://www.googleapis.com/youtube/v3/playlistItems';

    var options={
        part:'snippet', key:key , maxResults:20, playlistId : playlistid
    }

    loadVids();

    function loadVids()
    {
        $.getJSON(URL, options, function(data){
            console.log(data);
            var id=data.id;
            mainVid(id);
            resultsLoop();
        })
    }
    function mainVid(id)
    {
        $('#video').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    }

    function resultsLoop(data)
    {
        var thumb=
        $('main').html('<article><img src="https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg" alt="" class="thumb"><div class="details"><h4>Title</h4><p>I am a Description.</p></div></article>' );  
    }
});