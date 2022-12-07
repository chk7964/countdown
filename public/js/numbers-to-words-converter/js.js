function numberToEnglish( n ) {
              
    var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = '';

   
    string = string.replace(/[, ]/g,"");


    if( parseInt( string ) === 0 ) {
        return 'zero';
    }
    

    units = [ '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen' ];
    
 
    tens = [ '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety' ];
    

    scales = [ '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion', 'Undecillion', 'Duodecillion', 'Tredecillion', 'Quatttuordecillion', 'Quindecillion', 'Sexdecillion', 'Septendecillion', 'Octodecillion', 'Novemdecillion', 'Vigintillion', 'Centillion' ];
    
   
    start = string.length;
    chunks = [];
    while( start > 0 ) {
        end = start;
        chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
    }
    
  
    chunksLen = chunks.length;
    if( chunksLen > scales.length ) {
        return '';
    }
    
  
    words = [];
    for( i = 0; i < chunksLen; i++ ) {
        
        chunk = parseInt( chunks[i] );
        
        if( chunk ) {
            
           
            ints = chunks[i].split( '' ).reverse().map( parseFloat );
        
          
            if( ints[1] === 1 ) {
                ints[0] += 10;
            }
            
    //thousand
            if( ( word = scales[i] ) ) {
                words.push( word );
            }
            
         //ones,tens,hundreds
            if( ( word = units[ ints[0] ] ) ) {
                        
                words.push( word );
            }
            
   
            if( ( word = tens[ ints[1] ] ) ) {
           
                words.push( word );
            }
            
        
            if( ints[0] || ints[1] ) {
                

                if( ints[2] || ! i && chunksLen ) {
                    words.push( );
                }
            
            }
            
    
            if( ( word = units[ ints[2] ] ) ) {
                words.push( word + ' hundred' );
            }
            
        }
        
    }
    
    return words.reverse().join( ' ' );
    
}
$("#cword").click(function(){
    var v = document.getElementById('number').value;
    document.getElementById('tb').value=numberToEnglish(v);
})


$("input").keypress(function(evt){
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
        return false; 
    return true; 
  });
