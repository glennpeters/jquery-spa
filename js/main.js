
$(() => {
    try {
        function loadPage(pageID, callback) {
            if ( typeof callback !== 'function' ) {
                callback = () => {
                    console.log('Page load finished.');
                }
            }
    
            $( "article" ).load( "./pages/"+ pageID +".html", callback );
        }
    
        // 
        $('[data-src]').on('click', (event) => {
            const pageID = $(event.target).data('src');
    
            console.log('Load page, pageID = ', pageID);
    
            loadPage(pageID);
        });
            
    } catch (error) {
        console.log(error);
    }
});
