export function getCookie ( name )
{
  var results = document.cookie.match ( '(^|;) ?' + name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

export function setCookie (value,name) {
    document.cookie = `${name}=${value}`;
}
