
function convert_to_unicode()
{

{
var array_one = new Array( 

"aa" ,	"a" ,
"ZZ" ,	"Z" ,
"=kk" ,	"=k" ,
"f=k" ,	"f=" ,

"Q+Z" ,	"QZ+" ,
"sas" ,	"sa" ,
"as" ,	"sa" ,

"‘" ,	"\"" ,
"’" ,	"\"" ,
"“" ,	"'" ,
"”" ,	"'" ,

"ƒ" ,	"१" ,
"„" ,	"२" ,
"…" ,	"३" ,
"†" ,	"४" ,
"‡" ,	"५" ,
"ˆ" ,	"६" ,
"‰" ,	"७" ,
"Š" ,	"८" ,
"‹" ,	"९" ,
"Œ" ,	"०" ,
"å" ,	"०" ,

"v‚" ,	"ऑ" ,
"vks" ,	"ओ" ,
"vkS" ,	"औ" ,
"vk" ,	"आ" ,
"v" ,	"अ" ,
"b±" ,	"ईं" ,
"Ã" ,	"ई" ,
"bZ" ,	"ई" ,
"b" ,	"इ" ,
"m" ,	"उ" ,
"Å" ,	"ऊ" ,
",s" ,	"ऐ" ,
"," ,	"ए" ,
"_" ,	"ऋ" ,


"d+" ,	"क़" ,
"[+" ,	"ख़्" ,
"x+" ,	"ग़" ,
"T+" ,	"ज़्" ,
"t+" ,	"ज़" ,
"M+" ,	"ड़" ,
"<+" ,	"ढ़" ,
"¶+" ,	"फ़्" ,
"Q+" ,	"फ़" ,
";+" ,	"य़" ,
"j+" ,	"ऱ" ,
"u+" ,	"ऩ" ,

"d" ,	"क" ,
"D" ,	"क्" ,
"£" ,	"ख्र" ,
"[" ,	"ख्" ,
"x" ,	"ग" ,
"X" ,	"ग्" ,
"Ä" ,	"घ" ,
"?" ,	"घ्" ,
"³" ,	"ङ" ,
"p" ,	"च" ,
"P" ,	"च्" ,
"N" ,	"छ" ,
"t" ,	"ज" ,
"T" ,	"ज्" ,
">" ,	"झ" ,
"÷" ,	"झ्" ,
"Ö" ,	"झ्" ,
"¥" ,	"ञ" ,
"V" ,	"ट" ,
"B" ,	"ठ" ,
"M" ,	"ड" ,
"<" ,	"ढ" ,
"." ,	"ण्" ,
"r" ,	"त" ,
"R" ,	"त्" ,
"F" ,	"थ्" ,
"n" ,	"द" ,
"/" ,	"ध्" ,
"Ë" ,	"ध्" ,
"è" ,	"ध्" ,
"u" ,	"न" ,
"U" ,	"न्" ,
"i" ,	"प" ,
"I" ,	"प्" ,
"Q" ,	"फ" ,
"¶" ,	"फ्" ,
"c" ,	"ब" ,
"C" ,	"ब्" ,
"Ò" ,	"भ" ,
"H" ,	"भ्" ,
"e" ,	"म" ,
"E" ,	"म्" ,
";" ,	"य" ,
"¸" ,	"य्" ,
"j" ,	"र" ,
"y" ,	"ल" ,
"Y" ,	"ल्" ,
"G" ,	"ळ" ,
"Üo" ,	"श्व" ,
"Ük" ,	"श" , // as used in 'shringaal' etc
"Üz" ,	"श्र्" ,
"o" ,	"व" ,
"O" ,	"व्" ,

"'" ,	"श्" ,
"\"" ,	"ष्" ,
"l" ,	"स" ,
"L" ,	"स्" ,
"g" ,	"ह" ,

"Ñ" ,	"कृ" ,
"—" ,	"कृ" ,
"ô" ,	"क्क" ,
"ä" ,	"क्त" ,
"{" ,	"क्ष्" ,
"K" ,	"ज्ञ" ,

"ê" ,	"ट्ट" ,
"Í" ,	"ट्ट" ,
"ë" ,	"ट्ठ" ,
"Î" ,	"ट्ठ" ,
"ð" ,	"ठ्ठ" ,
"Ï" ,	"ड्ड" ,
"ì" ,	"ड्ड" ,
"ï" ,	"ड्ढ" ,
"Ô" ,	"ड्ढ" ,

"Ù" ,	"त्त्" ,
"=" ,	"त्र" ,
"«" ,	"त्र्" ,
"–" ,	"दृ" ,
"Ì" ,	"द्द" ,
"í" ,	"द्द" ,
"\)" ,	"द्ध" ,
"˜" ,	"द्भ" ,
"ö" ,	"द्भ" ,
"|" ,	"द्य" ,
"}" ,	"द्व" ,
"é" ,	"न्न" ,
"™" ,	"न्न्" ,

"ó" ,	"स्त्र" ,
"â" ,	"हृ" ,
"à" ,	"ह्न" ,
"ã" ,	"ह्म" ,
"á" ,	"ह्य" ,
"º" ,	"ह्" ,

"J" ,	"श्र" ,
"Ø" ,	"क्र" ,
"Ý" ,	"फ्र" ,
"æ" ,	"द्र" ,
"ç" ,	"प्र" ,
"Á" ,	"प्र" ,
"#" ,	"रु" ,
":" ,	"रू" ,

"Ó" ,	"्य" ,
"î" ,	"्य" ,
"z" ,	"्र" ,
"ª" ,	"्र" ,

// "Ç" ,	"िं", 
"È" ,	"ीं" ,
"Ê" ,	"Zी" ,
"\›" ,	"Zैं" ,
"õ" ,	"Zैं" ,
"±"  ,	"Zं" ,
"Æ" ,	"र्f" ,
"É" ,	"र्Ç" ,

"्k" ,	"" ,

"‚" ,	"ॉ" ,
"¨" ,	"ो" ,
"®" ,	"ो" ,
"ks" ,	"ो" ,
"©" ,	"ौ" ,
"kS" ,	"ौ" ,
"h" ,	"ी" ,
"q" ,	"ु" ,
"w" ,	"ू" ,
"`" ,	"ृ" , 
"s" ,	"े" ,
"¢" ,	"े" , //suitable for ka
"S" ,	"ै" ,
"a" ,	"ं" ,
"¡" ,	"ँ" ,
"%" ,	"ः" ,
"W" ,	"ॅ" ,
"•" ,	"ऽ" ,
"·" ,	"ऽ" ,
"∙" ,	"ऽ" ,
"·" ,	"ऽ" ,
"~" ,	"्" ,
"+" ,	"़" ,
"k" ,	"ा" ,

"A" ,	"।" ,
"ñ" ,	"॰" ,  // laaghava

"\\" ,	"?" ,
" ः" ,	" :" ,
"^" ,	"‘" ,
"*" ,	"’" ,
"Þ" ,	"“" ,
"ß" ,	"”" ,
"(" ,	";" ,
"¼" ,	"(" ,
"½" ,	")" ,
"¿" ,	"{" ,
"À" ,	"}" ,
"¾" ,	"=" ,
"-" ,	"." , // full stop?
"&" ,	"-" ,
//"&" ,	"µ" ,
"]" ,	"," ,
"@" ,	"/" ,

"~ " ,	"् " ,
"ाे" ,	"ो" ,
"ाॅ" ,	"ॉ" ,
"े्र" ,	"्रे" ,
"अौ" ,	"औ" ,
"अो" ,	"ओ" ,
"आॅ" ,	"ऑ" 		)
}

var array_one_length = array_one.length ;

var legacyTxt = document.getElementById("legacy_text").value  ;

var processed_text = '' ;  //blank	
	
if(document.getElementById("is_HTML").checked) process_as_HTML (legacyTxt) 
else process_as_Plain_Text (legacyTxt) ;

document.getElementById("unicode_text").value = processed_text  ;


function process_as_HTML (in_text)
{

var remaining_text = in_text  ;

var present_position = 0 ;

while ( present_position != -1 )
{
var indx_br1 = remaining_text.indexOf( "\<") ;
// expand this logic such that if < is preceded by \ (escape), it is not counted as opening angle bracket.

if (indx_br1 != -1)
{
var text_to_be_converted = remaining_text.substring( 0 , indx_br1 ) ;
var indx_br2 = remaining_text.indexOf( "\>" , indx_br1+1) ;

if (indx_br2 != -1)
{
var txt_within_ang_br = remaining_text.substring (indx_br1 , indx_br2+1) ; 
var remaining_text = remaining_text.substring (indx_br2+1) ; 
} else
{
var txt_within_ang_br = remaining_text.substring (indx_br1) ; 
present_position = -1
}

} else
{
var text_to_be_converted = remaining_text ;
var txt_within_ang_br = '' ;
present_position = -1 ;  // end of file reached
}

    Replace_Symbols( text_to_be_converted ) ;

    processed_text += modified_substring + txt_within_ang_br;
}

return processed_text
	
}

function process_as_Plain_Text (in_text)
{
//************************************************************
//  Break the long text into small bunches of batch_size or less characters each.
//*************************************************************
 
    var text_size = in_text.length ;
 
    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var batch_size = 6000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - batch_size ) )  
     { 
      sthiti2 +=  batch_size ;
	  while ( (in_text.charAt( sthiti2 ) != '\n')&(in_text.charAt( sthiti2 ) != '\t')&(in_text.charAt( sthiti2 ) != ' ') )   {sthiti2-- ;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

    Replace_Symbols( in_text.substring ( sthiti1, sthiti2 ) ) ;

    processed_text += modified_substring ;

   }
   
return processed_text
 
}   


function Replace_Symbols( in_text )
{

modified_substring = in_text ;
//substitute array_two elements in place of corresponding array_one elements

if ( modified_substring != "" )  // if string to be converted is non-blank then no need of any processing.
{
for ( input_symbol_idx = 0 ; input_symbol_idx < array_one_length - 1;    input_symbol_idx=input_symbol_idx + 2 )

{

idx = 0  ;  // index of the symbol being searched for replacement

while (idx != -1 ) //whie-00
{

modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx + 1] )
idx = modified_substring.indexOf( array_one[input_symbol_idx] )

} // end of while-00 loop
} // end of for loop


// following statements for adjusting postion of i maatraas.

modified_substring = modified_substring.replace( /([fÇ])([कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़ड़ढ़फ़य़ऱऩ])/g , "$2$1" ) ;

modified_substring = modified_substring.replace( /([fÇ])((्[कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़ड़ढ़फ़य़ऱऩ])+)/g , "$2$1" ) ;

modified_substring = modified_substring.replace( /f/g , "ि" ) ;
modified_substring = modified_substring.replace( /Ç/g , "िं" ) ;


//following three statement for adjusting position of reph ie, half r .

modified_substring = modified_substring.replace( /([कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़ड़ढ़फ़य़ऱऩ])([ािीुूृेैोौंँ]*)([Z])/g , "$3$1$2" ) ;

modified_substring = modified_substring.replace( /(([कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़ड़ढ़फ़य़ऱऩ][्])+)([Z])/g, "$3$1" ) ;
// Z is $3 here, NOT $2.

modified_substring = modified_substring.replace( /Z/g , "र्" ) ;

modified_substring = modified_substring.replace( /([ ]+)([ािीुूृेैोौ])/g , "$2" );

// remove maatras typed wrongly
modified_substring = modified_substring.replace( /([ंँ॰])([ािीुूृेैोौ])/g , "$2$1" );

modified_substring = modified_substring.replace( /([ािीुूृेैोौंँ])([ािीुूृेैोौ])/g , "$1" ) ;

} // end of IF  statement  meant to  supress processing of  blank  string.

} // end of the function  Replace_Symbols
 
} // end of Krutidev_to_unicode function



//************************************************************************

function convert_to_legacy_font()
{
{
var array_one = new Array( 
"\u200C" , "" ,
"\u200D" , "" ,
"'" ,	"\*" ,
"\"" ,	"Þ" ,
"‘" ,	"\^" ,
"’" ,	"\*" ,
"“" ,	"Þ" ,
"”" ,	"ß" ,
"\(" ,	"¼" ,
"\)" ,	"½" ,
"\{" ,	"¿" ,
"\}" ,	"À" ,
"\[" ,	"¼" , // there is no symbol for [ in Krutidev.
"\]" ,	"½" , // there is no symbol for ] in Krutidev.

"_" ,	"\&" ,
"-" ,	"\&" ,
"x" ,	"Û" ,
"\+" ,	"$" ,
"\=" ,	"¾" ,

"।" ,		"A" ,
"॰" ,		"ñ" , // laaghava
"." ,	"-" , // Full stop
"?" ,	"\\" ,
"\," ,	"\]" ,
"%" ,	"þ" , // Kaamachalaaoo.
"\:" ,	"%" , 
"\;" ,	"\(" ,
"\/" ,	"@" ,
// There is no symbol in Krutidev for hash (#).
"#" , "ü" , // Kaamachalaaoo.

// ú û ü ý þ ÿ  remain unchanged in Krutidev.


"०" ,		"å" ,
"१" ,		"ƒ" ,
"२" ,		"„" ,
"३" ,		"…" ,
"४" ,		"†" ,
"५" ,		"‡" ,
"६" ,		"ˆ" ,
"७" ,		"‰" ,
"८" ,		"Š" ,
"९" ,		"\‹" ,

"क़्" ,	"D\+" ,
"ख़्" ,	"\[\+" ,
"ग़्" ,	"X+" ,
"ज़्" ,	"T\+" ,
"ऩ्" ,	"U\+" ,
"फ़्" ,	"¶\+" ,
"य़्" ,	"¸\+" ,

"क़" ,	"d\+" ,
"ख़" ,	"[k\+" ,
"ग़" ,	"x\+" ,
"ज़" ,	"t\+" ,
"ड़" ,		"M\+" ,
"ढ़" ,		"<\+" ,
"ऩ" ,	"u\+" ,
"फ़" ,	"Q\+" ,
"य़" ,	";\+" ,
"ऱ" ,		"j\+" ,

"कृ" ,	"—" ,
"क्क" ,	"ô" ,
"क्त" ,	"ä" ,
"क्ष्" ,	"\{" ,
"क्ष" ,	"\{k" ,
"ज्ञ्" ,	"K~" ,
"ज्ञ" ,	"K" ,

"ट्ट" ,	"ê" ,
"ट्ठ" ,	"ë" ,
"ड्ड" ,	"ì" ,
"ड्ढ" ,	"ï" ,

"त्त्" ,	"Ù" ,
"त्त" ,	"Ùk" ,
"त्र्" ,	"«" ,
"त्र" ,	"\=" ,

"दृ" ,	"–" ,
"द्द" ,	"í" ,
"द्ध" ,	"\)" ,
"द्य" ,	"\|" ,
"द्व" ,	"\}" ,

"छ्य" ,	"Nî" ,
"ट्य" ,	"Vî" ,
"ठ्य" ,	"Bî" ,
"ड्य" ,	"Mî" ,
"ढ्य" ,	"\<î" ,

"छ्र" ,	"Nª" ,
"ट्र" ,	"Vª" ,
"ठ्र" ,	"Bª" ,
"ड्र" ,	"Mª" ,
"ढ्र" ,	"<ª" ,

"क्र" ,	"Ø" ,
"द्र" ,	"æ" ,
"प्र" ,	"ç" ,
"फ्र" ,	"Ý" ,
"श्र्" ,	"Üz" ,
"श्र" ,	"J" ,

"शृ" ,	"Ük`" , // spacial form
"श्व" ,	"Üo" , // spacial form

"हृ" ,	"â" ,
"ह्न" ,	"à" ,
"ह्म" ,	"ã" ,
"ह्य" ,	"á" ,
"ह्र" ,	"ºz" ,
"ह्" ,	"º" ,

"्र" ,	"z" ,

"रु" ,	"\#" ,
"रू" ,	"\:" ,

"ओ" ,	"vks" ,
"औ" ,	"vkS" ,
"ऑ" ,	"v‚" ,
"आ" ,	"vk" ,
"अ" ,	"v" ,
"ईं" ,	"b±" ,
"ई" ,	"Ã" ,
//"ई" ,		"bZ" ,
"इ" ,	"b" ,
"उ" ,	"m" ,
"ऊ" ,	"Å" ,
"ऐ" ,	"\,s" ,
"ए" ,	"\," ,
"ऋ" ,	"_" ,

"क्" ,	"D" ,
"क" ,	"d" ,
"ख्" ,	"\[" ,
"ख" ,	"\[k" ,
"ग्" ,	"X" ,
"ग" ,	"x" ,
"घ्" ,	"\?" ,
"घ" ,	"\?k" ,
"ङ" ,		"³" ,

"च्" ,	"P" ,
"च" ,	"p" ,
"छ" ,	"N" ,
"ज्" ,	"T" ,
"ज" ,	"t" ,
"झ्" ,	"÷" ,
"झ" ,	"\>" ,
"ञ" ,	"¥" ,
"ट" ,	"V" ,
"ठ" ,	"B" ,
"ड" ,	"M" ,
"ढ" ,	"\<" ,
"ण्" ,	"." ,
"ण" ,	".k" ,
"त्" ,	"R" ,
"त" ,	"r" ,
"थ्" ,	"F" ,
"थ" ,	"Fk" ,
"द" ,	"n" ,
"ध्" ,	"è" ,
"ध" ,	"èk" ,
"न्" ,	"U" ,
"न" ,	"u" ,
"प्" ,	"I" ,
"प" ,	"i" ,
"फ्" ,	"¶" ,
"फ" ,	"Q" ,
"ब्" ,	"C" ,
"ब" ,	"c" ,
"भ्" ,	"H" ,
"भ" ,	"Hk" ,
"म्" ,	"E" ,
"म" ,	"e" ,
"य्" ,	"¸" ,
"य" ,	"\;" ,
"र" ,	"j" ,
"ल्" ,	"Y" ,
"ल" ,	"y" ,
"ळ" ,	"G" ,
"व्" ,	"O" ,
"व" ,	"o" ,
"श्" ,	"\'" ,
"श" ,	"\'k" ,
"ष्" ,	"\"" ,
"ष" ,	"\"k" ,
"स्" ,	"L" ,
"स" ,	"l" ,
"ह" ,	"g" ,

"ॉ" ,	"\‚" ,
"ॅ" ,		"W" ,
"ो" ,	"ks" ,
"ौ" ,	"kS" ,
"ा" ,	"k" ,
"ीं" ,	"È" ,
"ी" ,	"h" ,
"ु" ,		"q" ,
"ू" ,		"w" ,
"ृ" ,		"`" ,
"े" ,		"s" ,
"ै" ,		"S" ,
"ं" ,		"a" ,
"ँ" ,		"¡" ,
"ः" ,	"%" ,
"ऽ" ,		"·" ,
"्" ,		"~" ,
"़" ,		"\+" 	 );
}

var array_one_length = array_one.length ;

var unicodeTxt = document.getElementById("unicode_text").value  ;

var processed_text = '' ;  //blank	
	
if(document.getElementById("is_HTML2").checked) process_as_HTML (unicodeTxt) 
else process_as_Plain_Text (unicodeTxt) ;

document.getElementById("legacy_text").value = processed_text  ;


function process_as_HTML (in_text)
{

var remaining_text = in_text  ;

var present_position = 0 ;

while ( present_position != -1 )
{
var indx_br1 = remaining_text.indexOf( "\<") ;
// expand this logic such that if < is preceded by \ (escape), it is not counted as opening angle bracket.

if (indx_br1 != -1)
{
var text_to_be_converted = remaining_text.substring( 0 , indx_br1 ) ;
var indx_br2 = remaining_text.indexOf( "\>" , indx_br1+1) ;

if (indx_br2 != -1)
{
var txt_within_ang_br = remaining_text.substring (indx_br1 , indx_br2+1) ; 
var remaining_text = remaining_text.substring (indx_br2+1) ; 
} else
{
var txt_within_ang_br = remaining_text.substring (indx_br1) ; 
present_position = -1
}

} else
{
var text_to_be_converted = remaining_text ;
var txt_within_ang_br = '' ;
present_position = -1 ;  // end of file reached
}

    Replace_Symbols( text_to_be_converted ) ;

    processed_text += modified_substring + txt_within_ang_br;
}

return processed_text
	
}

function process_as_Plain_Text (in_text)
{
//************************************************************
//  Break the long text into small bunches of batch_size or less characters each.
//*************************************************************
 
    var text_size = in_text.length ;
 
    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var batch_size = 6000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - batch_size ) )  
     { 
      sthiti2 +=  batch_size ;
	  while ( (in_text.charAt( sthiti2 ) != '\n')&(in_text.charAt( sthiti2 ) != '\t')&(in_text.charAt( sthiti2 ) != ' ') )   {sthiti2-- ;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

    Replace_Symbols( in_text.substring ( sthiti1, sthiti2 ) ) ;

    processed_text += modified_substring ;

   }
   
return processed_text
 
}   


function Replace_Symbols( in_text )
{

modified_substring = in_text ;

if ( modified_substring != "" )  // if string to be converted is non-blank then no need of any processing.
{

// replace the two-byte nukta_varNa with corresponding one-byte nukta varNas.
modified_substring = modified_substring.replace ( /क़/g , "क़" )  ; 
modified_substring = modified_substring.replace ( /ख़‌/g , "ख़" )  ;
modified_substring = modified_substring.replace ( /ग़/g , "ग़" )  ;
modified_substring = modified_substring.replace ( /ज़/g , "ज़" )  ;
modified_substring = modified_substring.replace( 'ज' + '्' + '़' , 'ज़्' ) ;
modified_substring = modified_substring.replace ( /ड़/g , "ड़" )  ;
modified_substring = modified_substring.replace ( /ढ़/g , "ढ़" )  ;
modified_substring = modified_substring.replace ( /ऩ/g , "ऩ" )  ;
modified_substring = modified_substring.replace ( /फ़/g , "फ़" )  ;
modified_substring = modified_substring.replace ( /य़/g , "य़" )  ;
modified_substring = modified_substring.replace ( /ऱ/g , "ऱ" )  ;


// These two to avoid conversion of र् into Z.
modified_substring = modified_substring.replace ( /त्र्/g , "«" )  ; 
modified_substring = modified_substring.replace ( /श्र्/g , "Üz" )  ;
 
modified_substring = modified_substring.replace( /र्/g , "Z" ) ;

modified_substring = modified_substring.replace ( /«/g , "त्र्" )  ; 
modified_substring = modified_substring.replace ( /Üz/g , "श्र्" )  ; 

// following statements for adjusting postion of i maatraas.

modified_substring = modified_substring.replace( /िं/g , "Ç" ) ;
modified_substring = modified_substring.replace( /ि/g , "f" ) ;

modified_substring = modified_substring.replace( /([कखगघङचछजझञटठडड़ढढ़णतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])([Çf])/g , "$2$1" ) ;

modified_substring = modified_substring.replace( /(([कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़ड़ढ़फ़य़ऱऩ]्)+)([Çf])/g , "$3$1" ) ; // not $2S1

modified_substring = modified_substring.replace( /Zf/g , "Æ" ) ;
modified_substring = modified_substring.replace( /ZÇ/g , "É" ) ;


//following three statement for adjusting position of reph ie, half r .

modified_substring = modified_substring.replace( /([Z])(([कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़]्)+)/g , "$2$1" ) ;

modified_substring = modified_substring.replace( /([Z])([कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक़ख़ग़ज़ड़ढ़फ़])([ाॅीुूृेैोौंँ]*)/g , "$2$3$1" ) ;

modified_substring = modified_substring.replace( /ीZ/g , "Ê" ) ;
modified_substring = modified_substring.replace( /ैंZ/g , "õ" ) ;
modified_substring = modified_substring.replace( /ंZ/g , "±" ) ;

// Halanta after which there is no constant but space, hypen, comma or full-stop etc
modified_substring = modified_substring.replace ( /[्]([ \,\;\.।\n\-\:])/g , "~$1" ) ;


// Now substitute Roman symbols for corresponding Devanagari symbols given in array_one.

for ( input_symbol_idx = 0 ; input_symbol_idx < array_one_length - 1;    input_symbol_idx=input_symbol_idx + 2 )

{

idx = 0  ;  // index of the symbol being searched for replacement

while (idx != -1 ) //whie-00
{

modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_one[input_symbol_idx + 1] )
idx = modified_substring.indexOf( array_one[input_symbol_idx] )

} // end of while-00 loop
} // end of for loop

modified_substring = modified_substring.replace( /Zks/g , "ksZ" ) ; 
modified_substring = modified_substring.replace( /~ Z/g , "Z~" ) ; 
modified_substring = modified_substring.replace( /Zk/g , "kZ" ) ; 

} // end of IF  statement  meant to  supress processing of  blank  string.

} // end of the function  Replace_Symbols
 
} // end of Krutidev_to_unicode function

